class VideoplayerController {

  constructor($sce,$timeout) {
    this.name = 'videoplayer';


    this.state = null;
    this.API = null;
    this.currentVideo = 0;

    this.onPlayerReady = function(API) {
      this.API = API;
    };

    this.onCompleteVideo = function() {
      this.isCompleted = true;
      this.currentVideo++;
      if (this.currentVideo >= this.videos.length) this.currentVideo = 0;

      this.setVideo(this.currentVideo);
    };

    this.videos = [
      {
        sources: [
          {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
          {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
          {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
        ]
      },
      {
        sources: [
          {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
          {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
        ]
      }
    ];


    this.config = {
      sources: this.videos[0].sources ,
      theme: {
        url: "/app/components/videoplayer/videogular.css"
      },
      title:"Video Title",
      autohide:"true",
      autohideTime:2000
    };


    this.setVideo = function(index) {
      this.API.stop();
      this.currentVideo = index;
      this.config.sources = this.videos[index].sources;
      $timeout(this.API.play.bind(this.API), 100);
    };

  }
}

VideoplayerController.$inject = ['$sce','$timeout'];

export default VideoplayerController;
