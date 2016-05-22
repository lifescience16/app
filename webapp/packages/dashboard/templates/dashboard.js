Template.dashboard.events({
  'click .js-button-station': function() {
    FlowRouter.go('station');
  },
  'click .js-button-contact': function() {
    FlowRouter.go('contact');
  },
  'click .js-button-home': function() {
    FlowRouter.go('home');
  }
});
