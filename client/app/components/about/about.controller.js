class AboutController {
  constructor() {
    this.name = 'about';

    var vPageView = new ADRUM.events.VPageView({
      url: '/#about'
    });

    vPageView.start();

  // SPA view routing and HTML partials fetching
    vPageView.markViewChangeStart();
  // AJAX requests for the HTML partials are automatically correlated with the VPageView
  setTimeout(3000, function (){
    vPageView.markViewChangeEnd();

  // HTML partials inserted into Browser DOM tree

    vPageView.markViewDOMLoaded();

  // SPA HTML AJAX data fetching
  // Data AJAX requests are automatically correlated with the VPageView


    vPageView.markXhrRequestsCompleted();

  // call this when ending a new virtual page
    vPageView.end();

    ADRUM.report(vPageView);
  })


    }
}

export default AboutController;
