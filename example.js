angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
var TabsDemoCtrl = function($scope, $timeout) {
    $scope.data = {};
    $timeout(function() {
        $scope.data.static1 = true;
    }, 0)
};
var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'angularMoment']);
app.controller('DatepickerDemoCtrl', function($scope) {
    $scope.maxDate = new moment().add(100, 'y');
    // start date
    $scope.startDateToday = function() {
        $scope.startDate = new moment();
    };
    $scope.startDateToday();
    $scope.startDateClear = function() {
        $scope.startDate = null;
    };
    $scope.startDateOpen = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.startDateOpened = true;
    };
    // end date
    $scope.endDateToday = function() {
        $scope.endDate = new moment().add(20, 'h');
    };
    $scope.endDateToday();
    $scope.endDateClear = function() {
        $scope.endDate = null;
    };
    $scope.endDateOpen = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.endDateOpened = true;
    };
    // generic functions
    $scope.toggleMin = function() {
        $scope.minDate = new moment();
    };
    $scope.toggleMin();
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[2];
    // duration
    $scope.getDuration = function(start, end) {
        try {
            return ((moment.duration(start - end)).humanize());
        } catch (e) {
            return "Cant evaluate"
        }
    };
    // compare
    $scope.compare = function(start, end) {
        if (0 <= ((moment.duration(end - start)).days())) try {
            return ((moment.duration(start - end)).humanize());
        } catch (e) {
            return "Cant evaluate"
        } else {
            return "check your date"
        }
    };
});
// add controller for typehead and dropdown ..
(function () {
  
    app.controller('TypeaheadCtrl', function($scope) {
      $scope.selected = '';
      $scope.states = ['Boston','New York',	'Chicago',	'San Francisco'];
    });
}());