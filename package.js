Package.describe({
  summary: "Simple XML to JavaScript object converter"
});

Npm.depends({
  xml2js: "0.4.4"
});

Package.on_use(function (api) {
  api.use('blocking');

  api.export('xml2js');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['xml2js', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});
