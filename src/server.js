"use strict";
// Native
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var stream_1 = require("stream");
console.log(http_1.Server);
console.log(stream_1.Stream);
// Packages
var contentType = __importStar(require("content-type"));
var getRawBody = __importStar(require("raw-body"));
var is_stream_1 = require("is-stream");
console.log(contentType);
console.log(getRawBody);
console.log(is_stream_1.readable);
var NODE_ENV = process.env.NODE_ENV;
var DEV = NODE_ENV === 'development';
console.log(DEV);
var serve = function (fn) { return new http_1.Server(function (req, res) { return exports.run(req, res, fn); }); };
exports.default = serve;
