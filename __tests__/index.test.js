/**
 * Testing Script
 */
let Trans = require("../index");

test("Test Transliterator Ha = ꦲ", () => {
  let j = Trans.DoTransliterate("a");
  expect(j).toEqual("ꦲ");
});
