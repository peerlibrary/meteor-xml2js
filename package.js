Package.describe({
  summary: "Simple XML to JavaScript object converter",
  version: '0.4.5_2',
  name: 'peerlibrary:xml2js',
  git: 'https://github.com/peerlibrary/meteor-xml2js.git'
});

Npm.depends({
  xml2js: '0.4.5'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.3.2');
  api.use('peerlibrary:blocking@0.5.2');

  api.export('xml2js');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:xml2js', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});
