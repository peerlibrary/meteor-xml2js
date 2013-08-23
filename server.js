xml2js = Npm.require('xml2js');

xml2js.parseStringSync = blocking(xml2js.parseString);