FlowRouter.route('/station', {
  name: 'station',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'stationDesk';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
