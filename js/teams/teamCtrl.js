var app = angular.module('nbaRoutes');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function($scope, $stateParams, teamService, teamData) {

  // console.log({$scope});

    $scope.teamData = teamData;

    $scope.newGame = {};

    $scope.showNewGamesForm = false;

    $scope.toggleNewGameForm = function() {
        $scope.showNewGamesForm = !$scope.showNewGamesForm;
    }

    if ("utahjazz" === $stateParams.team) {
        $scope.homeTeam === "Utah Jazz";
        $scope.logoPath = "images/jazz-logo.png"
    } else if ("losangeleslakers" === $stateParams.team) {
        $scope.homeTeam === "Los Angeles Lakers";
        $scope.logoPath = "images/lakers-logo.png"
    } else if ("miamiheat" === $stateParams.team) {
        $scope.homeTeam === "Miami Heat";
        $scope.logoPath = "images/heat-logo.png"
    };

    $scope.submitGame = function() {
        $scope.newGame.homeTeam = $scope.homeTeam.split("").join("").toLowerCase();
        teamService.addNewGame($scope.newGame).then(function() {
            teamService.getTeamData($scope.newGame.homeTeam).then(function(data) {
                $scope.teamData = data;
                $scope.newGame = {};
                $scope.showNewGamesForm = false;
            })


        })
    }

    //end
});
