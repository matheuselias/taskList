angular.module('taskListApp')
  .factory('taskFactory', function ($resource) {
    return $resource('http://localhost:3000/api/v1/tasks/:id',  {}, {
      query: {method:'GET', isArray:true},
      post: {method:'POST'},
      update: {method:'PUT'},
      remove: {method:'DELETE'}
    });
  });
