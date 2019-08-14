class StreamBarController {
  constructor() {
    let _this = this;

    _this.$onInit = ()=>{
      _this.streams = ["Courte durée", "CDJ", "Urgence", "Amb. autres"];
      _this.selectedStream = "Courte durée";
    };

    _this.selectStream = stream => {
      _this.selectedStream = stream;
    };
  
  }
}

export default StreamBarController;
