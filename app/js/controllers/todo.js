app.controller('TodoCtrl', ['$scope', 'listener', 'pouchWrapper', function($scope, listener, pouchWrapper) {

  $scope.submit = function() {
    pouchWrapper.add($scope.text).then(function(res) {
      $scope.text = '';
    }, function(reason) {
      console.log(reason);
    })
  };

  $scope.remove = function(id) {
    pouchWrapper.remove(id).then(function(res) {
//      console.log(res);
    }, function(reason) {
      console.log(reason);
    })
  };

  $scope.todos = [];

  $scope.$on('newTodo', function(event, todo) {
    $scope.todos.push(todo);
  });

  $scope.$on('delTodo', function(event, id) {
    for (var i = 0; i<$scope.todos.length; i++) {
      if ($scope.todos[i]._id === id) {
        $scope.todos.splice(i,1);
      }
    }
  });

}]);