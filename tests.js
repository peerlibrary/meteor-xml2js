Tinytest.addAsync('xml2js', function (test, onComplete) {
  var isDefined = false;
  try {
    xml2js;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "xml2js is not defined");
  test.isTrue(Package['peerlibrary:xml2js'].xml2js, "Package.peerlibrary:xml2js.xml2js is not defined");

  test.isTrue(xml2js.parseStringSync._blocking);

  var xml = "<root>Hello xml2js!</root>";
  var js = {
    root: 'Hello xml2js!'
  };

  var result = xml2js.parseStringSync(xml);
  test.equal(result, js, "Parsed object not equal");

  xml2js.parseString(xml, function (err, result) {
    test.isFalse(err, "Error parsing: " + err);
    test.equal(result, js, "Parsed object not equal");
    onComplete();
  });
});
