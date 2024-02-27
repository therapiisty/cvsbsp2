"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var SourceCaptionCompiler = require("source-caption-compiler");
var vdf_text = (await fs.promises.readFile("closecaption_english.txt", "utf16le")).toString();
var compiled = SourceCaptionCompiler.compile(vdf_text);
await fs.promises.writeFile("closecaption_english.dat", compiled);
