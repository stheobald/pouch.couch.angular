app.factory('myPouch', [function() {

  var mydb = new PouchDB('ng-pouch');
  PouchDB.replicate('ng-pouch', 'http://127.0.0.1:5984/ng-db', {continuous: true});
  PouchDB.replicate('http://127.0.0.1:5984/ng-db', 'ng-pouch', {continuous: true});
  return mydb;

}]);