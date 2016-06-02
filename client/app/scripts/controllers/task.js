'use strict';

angular.module('taskListApp')
  .controller('taskCtrl', function ($scope, taskFactory) {
    $scope.tasks = [];

    var getTasks = function(){
      taskFactory.query({id: ''},
        function(data){
          $scope.tasks = data;
        },
        function(data){
          alert('Ocorreu um problema ao carregar as Tasks!');
        });
    };

    $scope.createTask = function(){
      taskFactory.save({task: $scope.task},
        function(){
          getTasks();
          $scope.task = "";
        },
        function(data){
          alert('Ocorreu um problema ao adicionar a Task!');
        }
      );
    };

    $scope.removeTask = function(task){
      if (confirm('Realmente deseja excluir a task ' + task.title + '?')) {
          taskFactory.remove({id: task.id},
              function() {
                  getTasks();
              },
              function(data) {
                  alert('Ocorreu um problema ao remover a task!');
              }
          );
      }
    };

    $scope.updateTask = function(task){
      taskFactory.update({id: task.id}, {task: task},
      function(){
        
      },
      function(data){
        alert('Ocorreu um problema ao alterar o status da task!');
      });
    };

    getTasks();
  });
