class VideoplayerController {

  constructor($sce) {
    this.name = 'videoplayer';

    this.config = {
      sources: [
        {
          src: $sce.trustAsResourceUrl("http://nlds119.cdnak.neulion.com/nlds_vod/msgv/vod/2016/05/03/14999/2_14999_yorktown_msgv1_2016_h_discrete_5_save_1_1600.mp4"),
          type: "video/mp4"
        }
      ],
      theme: {
        url: "/app/components/videoplayer/videogular.css"
      },
      title:"Video Title",
      autohide:"true",
      autohideTime:2000
    };
  }
}

VideoplayerController.$inject = ['$sce'];

export default VideoplayerController;
