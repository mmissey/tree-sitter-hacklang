const root = require("path").join(__dirname, "..", "..");

// node-gyp-build loads a prebuilt binary from prebuilds/<platform>-<arch>/ when
// one is available, and otherwise falls back to the local build/ output produced
// by `node-gyp rebuild` (run via the `install` script on machines without a
// matching prebuild). This is the standard prebuildify + node-gyp-build loader.
const binding = require("node-gyp-build")(root);

// Attach the node-type metadata onto the language object (matches index.d.ts and
// the modern tree-sitter convention: `require(pkg).hack`).
try {
  binding.hack.nodeTypeInfo = require("../../src/node-types.json");
} catch (_) {}

module.exports = binding;
