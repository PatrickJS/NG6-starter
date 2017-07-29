class ModalGalleryController {
  constructor() {
    this.currentImage = this.current;
    this.selectedIndex = null;
  }

  closeModal() {
    this.visible = false;
    this.selectedIndex = null;
  }

  setCurrentImage(image, index) {
    this.currentImage = image;
    this.selectedIndex = index;
  }
}

export default ModalGalleryController;
