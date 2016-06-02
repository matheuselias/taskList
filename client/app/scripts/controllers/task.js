'use strict';

angular.module('taskListApp')
  .controller('taskCtrl', function ($scope, taskFactory) {
    $scope.tasks = [];

    var getTasks = function(){
      taskFactory.query({id: ''}, function(data){
          $scope.tasks = data;
      });
    };

    $scope.createTask = function(){
      taskFactory.save({task: $scope.task}, function(){
        $scope.task = [];
        getTasks();
      });
    };

    getTasks();
  });
