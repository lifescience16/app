Template.contact.events({
  'click .js-button-emergency': function() {
    const url = 'http://localhost:3000/live/fewJCSDT5HyC4dqhi';
    if (Meteor.isCordova) {
      window.open('guzz://lifescience', '_system');
      // cordova.InAppBrowser.open('guzz://blubber', '_system');
    } else {
      location.href = url;
    }
  }
});
