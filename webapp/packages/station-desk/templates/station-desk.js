Template.stationDesk.events({
  'click .js-button-home': function() {
    FlowRouter.go('home');
  },
  'click .js-button-chat': function() {
    FlowRouter.go('contact');
  }
});
