import * as fs from "node:fs";
import * as SourceCaptionCompiler from "source-caption-compiler";

const vdf_text = (await fs.promises.readFile("closecaption_english.txt", "utf16le")).toString();
const compiled = SourceCaptionCompiler.compile(vdf_text);
await fs.promises.writeFile("closecaption_english.dat", compiled);