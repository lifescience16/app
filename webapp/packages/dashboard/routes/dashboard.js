FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'dashboard';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
