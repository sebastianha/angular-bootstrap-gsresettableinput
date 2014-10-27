"use strict";

angular.module("angular-bootstrap-gsresettableinput-test", ["ui.gsresettableinput"]).controller("index", function($scope, $timeout) {
	$scope.inputModel = "123";

	$timeout(function() {
		$scope.inputModel = "456";
	}, 1000);
});