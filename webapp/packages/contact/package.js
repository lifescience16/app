Package.describe({
  name: 'lifescience:contact',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Contact to nurses and doctors',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['templating', 'ecmascript']);
  api.use('fourseven:scss@3.2.0');
  api.use(['kadira:flow-router@2.6.0', 'kadira:blaze-layout@2.1.0']);
  api.use('tap:i18n@1.5.1');

  addTemplates(api, [
    'contact'
  ]);

  api.addFiles('routes/contact.js');
});

function addTemplates(api, templates) {
  for (var t in templates) {
    var path = 'templates/' + templates[t];
    var files = [path + '.html', path + '.js', path + '.scss'];
    api.addFiles(files, 'client');
  }
}

Cordova.depends({
  "cordova-plugin-inappbrowser": "1.4.0",
});
