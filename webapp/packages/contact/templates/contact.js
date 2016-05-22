Template.contact.events({
  'click .js-button-emergency': function() {
    const url = 'http://localhost:3000/live/fdAX58W6WqjZeyZBM';
    if (Meteor.isCordova) {
      window.open('guzz://lifescience', '_system');
      // cordova.InAppBrowser.open('guzz://blubber', '_system');
    } else {
      window.open(url, 'chat');
    }
  },
  'click .js-button-back': function() {
    history.back();
  },
  'click .js-button-home': function() {
    FlowRouter.go('dashboard');
  }
});
