Template.stationDesk.events({
  'click .js-button-home': function() {
    FlowRouter.go('dashboard');
  },
  'click .js-button-chat': function() {
    FlowRouter.go('contact');
  }
});
