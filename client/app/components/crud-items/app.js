angular
  .module('amazonCRUD', ['ngRoute'])

  .controller('CrudCtrl', ['$scope', 'crudFactory', function ($scope, crudFactory) {
    $scope.isEditing = false;
    $scope.editingItem = null;
    $scope.newItem = null;

    $scope.items = crudFactory.getItems();

    $scope.addItem = function (value) {
      if (value) {
        crudFactory.addItem($scope.newItem);
        clearInput();
      }
    };

    $scope.deleteItem = function (item) {
      crudFactory.deleteItem(item);
    };

    $scope.editItem = function (item) {
      if (item.editing == false) {
        $scope.isEditing = true;
        item.editing = true;
      } else {
        $scope.isEditing = false;
        item.editing = false;
      }
      $scope.editingItem = angular.copy(item);

      crudFactory.editItem($scope, $scope.editingItem);
      if ($scope.isEditing == false) {
        clearInput();
      }
    };

    $scope.updateItem = function (value, item) {
      if (value) {
        crudFactory.updateItem(item);
        clearInput();
        $scope.isEditing = false;
      }
    };

    function clearInput() {
      $scope.newItem = {};
      $scope.crFrm.$setPristine(true);
      $scope.crFrm.$setDirty(false);
    }

  }])

  .factory('crudFactory', [function () {
    var crud = {};

    var items = [
      {
        id: 0,
        name: 'PlayStation 4',
        category: 'Consoles',
        price: 250,
        owner: 'Sony',
        editing: false
      },
      {
        id: 1,
        name: 'Xbox 360',
        category: 'Consoles',
        price: 200,
        owner: 'Microsoft',
        editing: false
      }
    ];

    crud.getItems = function () {
      return items;
    };

    crud.addItem = function (item) {
      item.editing = false;
      items.push(item);
    };

    crud.deleteItem = function (item) {
      var index = items.indexOf(item);
      var res = confirm('Are you sure?');

      if (res) {
        items.splice(index, 1);
      }
    };

    crud.editItem = function ($scope, editingItem) {
      $scope.newItem = editingItem;
      $scope.newItem.editing = false;

    };

    crud.updateItem = function (item) {
      for (var i = 0; i < items.length; i++) {
        if (items[i]['id'] == item['id']) {
          items[i] = item;
        }
      }
    };

    return crud;
  }]);

