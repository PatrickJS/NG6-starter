class ItemController {
  constructor(ItemService) {
    'ngInject';

    this.ItemService = ItemService;
    this.serviceName = this.ItemService.getName();
    this.ItemService.getItems()
      .then((response)=> {
        this.items = response.data;
      }, () => {
        this.errorMsg = 'Error retrieving items';
      });
  }
}

export default ItemController;
