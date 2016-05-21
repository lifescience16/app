FlowRouter.route('/', {
  name: 'station',
  // triggersEnter: [function(context, redirect) {
  //   redirect('/map');
  // }],
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'stationDesk';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
