import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  plugins: [terser(), json({ compact: true })],
  output: [
    {
      file: pkg.module,
      format: "esm",
    },
    {
      file: pkg.browser,
      format: "iife",
      name: "aksara"
    },
    {
      file: pkg.main,
      format: "cjs",
    },
  ],
};
