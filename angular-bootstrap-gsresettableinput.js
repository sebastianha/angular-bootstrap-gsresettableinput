"use strict";

angular.module("ui.gsresettableinput", []).directive("gsresettableinput", function($timeout) {
	return {
		scope: {
			ngModel    : "=",
			placeholder: "@"
		},
		restrict: "E",
		replace : "true",
		template: "" +
			"<div class=\"input-group\">" +
				"<input ng-model=\"ngModel\" class=\"form-control\" placeholder=\"{{placeholder}}\">" +
				"<span class=\"input-group-btn\">" +
					"<button class=\"btn btn-default\" type=\"button\" ng-click=\"resetInput()\">" +
						"<span class=\"glyphicon glyphicon-remove\"></span>" +
					"</button>" +
				"</span>" +
			"</div>",
		link: function(scope, elem, attrs) {
			scope.resetInput = function() {
				scope.ngModel = "";
			};
		}
	};
});
