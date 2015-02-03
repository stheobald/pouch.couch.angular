app.factory('listener', ['$rootScope', 'myPouch', function($rootScope, myPouch) {

  myPouch.changes({
    continuous: true,
    onChange: function(change) {
      if (!change.deleted) {
        $rootScope.$apply(function() {
          myPouch.get(change.id, function(err, doc) {
            $rootScope.$apply(function() {
              if (err) console.log(err);
              $rootScope.$broadcast('newTodo', doc);
              console.log(doc);
              
            })
          });
        })
        console.log('Stuff changed.');
        
      } else {
        $rootScope.$apply(function() {
          $rootScope.$broadcast('delTodo', change.id);
          console.log('A record was deleted: '+ change.id);
          
        });
      }
    }
  })
  return {};
}]);