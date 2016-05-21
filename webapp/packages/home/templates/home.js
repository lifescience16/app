Template.home.events({
  'click .js-button-food': function() {
    FlowRouter.go('contact');
  },
  'click .js-button-wc': function() {
    FlowRouter.go('station');
  }
});
