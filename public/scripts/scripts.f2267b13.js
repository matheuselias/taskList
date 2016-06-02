"use strict";angular.module("taskListApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]),angular.module("taskListApp").controller("taskCtrl",["$scope","taskFactory",function(a,b){a.tasks=[];var c=function(){b.query({id:""},function(b){a.tasks=b},function(a){alert("Ocorreu um problema ao carregar as Tasks!")})};a.createTask=function(){b.save({task:a.task},function(){c(),a.task=""},function(a){alert("Ocorreu um problema ao adicionar a Task!")})},a.removeTask=function(a){confirm("Realmente deseja excluir a task "+a.title+"?")&&b.remove({id:a.id},function(){c()},function(a){alert("Ocorreu um problema ao remover a task!")})},a.updateTask=function(a){b.update({id:a.id},{task:a},function(){},function(a){alert("Ocorreu um problema ao alterar o status da task!")})},c()}]),angular.module("taskListApp").factory("taskFactory",["$resource",function(a){return a("http://localhost:3000/api/v1/tasks/:id",{},{query:{method:"GET",params:{entryId:""},isArray:!0},post:{method:"POST"},update:{method:"PUT"},remove:{method:"DELETE"}})}]);