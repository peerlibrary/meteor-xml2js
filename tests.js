Tinytest.addAsync('meteor-xml2js', function (test, onComplete) {
  var isDefined = false;
  try {
    xml2js;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "xml2js is not defined");
  test.isTrue(Package.xml2js.xml2js, "Package.xml2js.xml2js is not defined");

  var xml = "<root>Hello xml2js!</root>";
  var js = {
    root: 'Hello xml2js!'
  };
  xml2js.parseString(xml, function (err, result) {
    test.isFalse(err, "Error parsing: " + err);
    test.equal(result, js, "Parsed object not equal");
    onComplete();
  });
});