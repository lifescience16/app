FlowRouter.route('/contact', {
  name: 'contact',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'contact';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
