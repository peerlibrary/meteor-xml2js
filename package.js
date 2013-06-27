Package.describe({
  summary: "Meteor smart package for xml2js node.js package"
});

Npm.depends({
  xml2js: "0.2.8"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');
});