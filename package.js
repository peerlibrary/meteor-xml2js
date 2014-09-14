Package.describe({
  summary: "Simple XML to JavaScript object converter",
  version: '0.4.4-2',
  name: 'mrt:xml2js',
  git: 'https://github.com/peerlibrary/meteor-xml2js.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:xml2js@0.4.4-2');
});
