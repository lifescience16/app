FlowRouter.route('/blooddraw', {
  name: 'blooddraw',
  // triggersEnter: [function(context, redirect) {
  //   redirect('/map');
  // }],
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'blooddraw';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
