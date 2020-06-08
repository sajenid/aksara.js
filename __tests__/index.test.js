/**
 * Testing Script
 */
let Trans = require("../src/index");

describe("hanacaraka", () => {
  test("Test Transliterator ha = ꦲ", () => {
    let ha = Trans.LatinKeAksara("ha");
    expect(ha).toEqual("ꦲ");
  });

  test("Test Transliterator na = ꦤ", () => {
    let na = Trans.LatinKeAksara("na");
    expect(na).toEqual("ꦤ");
  });

  test("Test Transliterator ca = ꦕ", () => {
    let ca = Trans.LatinKeAksara("ca");
    expect(ca).toEqual("ꦕ");
  });

  test("Test Transiterator ra = ꦫ", () => {
    let ra = Trans.LatinKeAksara("ra");
    expect(ra).toEqual("ꦫ");
  });

  test("Test Transliterator ka = ꦏ", () => {
    let ka = Trans.LatinKeAksara("ka");
    expect(ka).toEqual("ꦏ");
  });
});
