'use strict';

angular.module('taskListApp')
  .controller('taskCtrl', function ($scope, taskFactory) {
    var init = function(){
      $scope.tasks = {};
      $scope.task = {
          date: new Date()
        };
    }

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
          init();
          $scope.taskForm.$setPristine();
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
                  alert('Ocorreu um problema ao excluir a task!');
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
    init();
  });
