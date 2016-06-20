app.directive("instructions", function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            type: '=',
            lfzTitle: '=',
            description: '=',
            projects: '=',
            branch: '=',
            links: '=',
            demo: '=',
            view: '='
        },
        templateUrl: function(elem, attrs){
            switch(attrs.type){
                case 'a':
                case 'A':
                    return "assets/templates/instructionTemplateA.html";
                    break;
                case 'b':
                case 'B':
                    return "assets/templates/instructionTemplateB.html";
                    break;
                case 'c':
                case 'C':
                    return "assets/templates/instructionTemplateC.html";
                    break;
                default:
                    return "assets/templates/instructionTemplateB.html";
            }

        },
        link: function(scope, element){
            scope.repoName = "prototypes_C9";
            scope.map = {17: false, 18: false, 90: false};

            $('body').on("keydown", function(e){
                if(e.which in scope.map){
                    scope.map[e.which] = true;
                    if(scope.map[17] && scope.map[18] && scope.map[90]){
                        scope.$apply(function(){
                            scope.view = !scope.view;
                        });
                    }
                }
            }).on("keyup", function(e){
                if(e.which in scope.map){
                    scope.map[e.which] = false;
                }
            });
        }
    }
});