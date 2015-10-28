angular.module('app.manual', [])

.controller('ManualController', ['$scope', 'requestNotificationChannel',
  function($scope, requestNotificationChannel) {
    $scope.manual = [['Loading Reactor BIOS...', 0]];

    var onLoadManualHandler = function(manual) {
      $scope.manual = manual;
      $scope.$apply();
      /*
      var menuPage  = ['/*',
        '  Slider:',
        '    If the control panel contains four meters',
        '    and a slider, refer to the slider() function.',
        '',
        '  Button Series:',
        '    If the control panel contains six labeled',
        '    buttons, refer to the buttonSeries() function.',
        '*\/'
      ].join('\n');
      var instructions;
      var functions;

      for (var i = 0, j = manuals.length; i < j; i++) {
        var manual = manuals[i];

        if (manual.type === 'binaryLever') {
          instructions = ['// For emergency override, take note of the meter',
            '// readings and evaluate the boolean return value.',
            '// If the return value is true, move the slider to',
            '// the position marked "I", otherwise move the',
            '// slider to the position marked "O".',
            '',
            '// "this" represents the control panel.',
            '// "minReading": lowest meter reading of the panel',
            '// "maxReading": highest meter reading of the panel'
          ].join('\n');

          functions = ['function slider() {',
            '  var a = ' + manual.conditions[0] + ';',
            '  var b = ' + manual.conditions[1] + ';',
            '  var c = ' + manual.conditions[2] + ';',
            '',
            '  return ' + manual.statement +';',
            '}'
          ].join('\n');
        }

        if (manual.type === 'buttonSeries') {
          instructions = 'button instructions';

          functions = ['button functions',
            manual.divisors[0],
            manual.divisors[1],
            manual.fbOrder[0],
            manual.fbOrder[1],
            manual.fbOrder[2],
            manual.fbOrder[3]
          ].join('\n');
        }

        if (manual.type === 'circuit') {
          instructions = 'circuit instructions';

          functions = 'circuit functions';
        }

        if (manual.type === 'codex') {
          instructions = 'codex instructions';

          functions = 'codex functions';
        }
      }

      $scope.manual = menuPage + '\n\n' + instructions + '\n\n' + functions;
      $scope.$apply();
      */
    };

    requestNotificationChannel.onLoadManual($scope, onLoadManualHandler);
  }
]);
