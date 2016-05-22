Template.blooddraw.events({
  'click .js-button-back': function() {
    FlowRouter.go('home');
  },
  'click .js-button-forward': function() {
    FlowRouter.go('station');
  }
});
