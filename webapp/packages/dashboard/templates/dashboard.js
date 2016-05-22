Template.dashboard.events({
  'click .js-button-contact': function() {
    FlowRouter.go('contact');
  },
  'click .js-button-home': function() {
    FlowRouter.go('home');
  }
});
