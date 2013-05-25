Package.describe({
  summary: "Meteor smart package for xml2js node.js package"
});

Npm.depends({xml2js:"0.2.7"});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'server.coffee'
  ], 'server');
});
