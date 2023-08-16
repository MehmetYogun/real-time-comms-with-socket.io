const expect = require("expect");

const { isRealString } = require("./is_real_string");

describe("is Real String", () => {
  it("should reject non-string values", () => {
    let res = isRealString(65);
    expect(res).toBe(false);
  });

  it("should reject string with only spaces", () => {
    let res = isRealString("                        ");
    expect(res).toBe(false);
  });

  it("should allow string with non-space chars.", () => {
    let res = isRealString("              sartre          ");
    expect(res).toBe(true);
  });
});
