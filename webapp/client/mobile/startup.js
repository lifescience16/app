/* global handleOpenURL */
/* jshint -W020 */

const commandHandlers = {
  '/go': cordovaHandleGoCommand,
  '/action': cordovaHandleActionCommand
};

const scheme = 'lifescience://';

if (Meteor.isCordova) {
  Meteor.startup(function() {
    handleOpenURL = cordovaHandleOpenURL;
  });

  window.plugins.launchmyapp.getLastIntent((intent) => {
    if (intent.indexOf(scheme) > -1) {
      const command = intent.substr(scheme.length);
      switch (command) {
        case 'lifescience':
          Meteor.defer(() => {
            FlowRouter.go('/');
          });
          break;
      }
    } else {
      // ignore intent
    }
  }, () => {
    // no intent received
  });
}

/**
 * Handle calls coming from native apps
 * @param {String} url A command sent in URL format
 */
function cordovaHandleOpenURL(url) {
  if (typeof url !== 'string' || url.indexOf('/') === -1) {
    return;
  }
  // Parse URL syntax: /command[/subcommand]?param1=value1&param2=...
  var parsedURL = url.match(/(\/\w*)(\/?[^\?]*)\??(.*)/);
  var command = parsedURL[1];
  var subCommand = parsedURL[2];
  // Convert parameters into JSON object
  var params = {};
  $.map(parsedURL[3].split('&'), function(e) {
    var keyValuePair = e.split('=');
    var key = keyValuePair[0];
    var value = keyValuePair[1];
    params[key] = decodeURIComponent(value);
  });
  AppMain.log('Mobile app sent message');
  AppMain.log('Command: ' + command);
  AppMain.log('Subcommand: ' + subCommand);
  AppMain.log('Parameters:');
  AppMain.dir(params);
  var commandHandler = commandHandlers[command];
  if (!commandHandler) {
    return;
  }
  commandHandler.call(this, subCommand, params);
}

/**
 * Handles the "go" command sent from a native app
 * @param {String} command    Always "go"
 * @param {String} subCommand Target URL to redirect to
 */
function cordovaHandleGoCommand(subCommand) {
  var routeURL = subCommand;
  if (!routeURL) {
    return;
  }
  AppMain.log('Routing to "' + routeURL + '"');
  FlowRouter.go(routeURL);
}

/**
 * Handles the "action" command sent from a native app
 * @param {String} subCommand The action to perform.
 * @param {Object} params     Contains the action parameters.
 */
function cordovaHandleActionCommand(subCommand, params) {
  var action = subCommand;
  if (!action) {
    return;
  }
  switch (action) {
    case '/codescanned':
      cordovaActionCodeScanned(params);
      break;
  }
}

function cordovaActionCodeScanned(params) {
  // Store scanned code to Session variable to prevent its loss on hot code reloads
  Session.set('codeToResolve', {
    'type': params.type,
    'content': params.content
  });
  var targetRoute = 'resolveCode';
  // TODO: Is this flexibility really needed?
  if (params.go) {
    targetRoute = params.go;
  }
  // Route to target route or reload if route is already displayed.
  if (FlowRouter.getRouteName() === targetRoute) {
    FlowRouter.reload();
  } else {
    FlowRouter.go(targetRoute);
  }
}
