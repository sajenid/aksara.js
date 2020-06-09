/**
 * Testing Script
 */

import { LatinKeAksara } from '../dist/aksara.cjs';

describe("hanacaraka", () => {
  test("Test Transliterator ha = ꦲ", () => {
    let ha = LatinKeAksara("ha");
    expect(ha).toEqual("ꦲ");
  });

  test("Test Transliterator na = ꦤ", () => {
    let na = LatinKeAksara("na");
    expect(na).toEqual("ꦤ");
  });

  test("Test Transliterator ca = ꦕ", () => {
    let ca = LatinKeAksara("ca");
    expect(ca).toEqual("ꦕ");
  });

  test("Test Transiterator ra = ꦫ", () => {
    let ra = LatinKeAksara("ra");
    expect(ra).toEqual("ꦫ");
  });

  test("Test Transliterator ka = ꦏ", () => {
    let ka = LatinKeAksara("ka");
    expect(ka).toEqual("ꦏ");
  });
});

describe("datasawala", () =>{
  test("Test Translierator da = ", () => {
    let da = LatinKeAksara("da");
    expect(da).toEqual("ꦢ");
  })
})

let kalimat = "Nulisa Aksara Jawa";

describe("Test kalimat", () => {
  test(`${kalimat}`, ()=> {
    let naj = LatinKeAksara(`${kalimat}`);
    expect(naj).toEqual("ꦤꦸꦭꦶꦱ​ꦄꦏ꧀ꦱꦫ​ꦗꦮ");
  })
})
