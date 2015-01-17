xml2js smart package
====================

Meteor smart package for [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) node.js package providing
a simple XML to JavaScript object converter.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `xml2js` object into the global scope.

Additionally, a [fibers](https://github.com/laverdet/node-fibers)-enabled synchronous
([blocking](https://github.com/peerlibrary/meteor-blocking)) `parseStringSync` function is provided on the `xml2js`
object. Except for the callback, it takes the same parameters as `parseString`.

Server side only.

Installation
------------

```
meteor add peerlibray:xml2js
```
