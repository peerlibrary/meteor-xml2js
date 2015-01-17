Package.describe({
  summary: "Simple XML to JavaScript object converter",
  version: '0.4.4_4',
  name: 'peerlibrary:xml2js',
  git: 'https://github.com/peerlibrary/meteor-xml2js.git'
});

Npm.depends({
  xml2js: '0.4.4'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.2.1');
  api.use('peerlibrary:blocking@0.5.1');

  api.export('xml2js');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:xml2js', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});
