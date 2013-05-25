@xml2js = {}

do -> # To not pollute the namespace
  require = Npm.require

  @xml2js = require 'xml2js'