const {expect} = require("expect");

var { generateMessage } = require("./message");

describe("Generate Message", () => {
  it("should generate correct message object", () => {
    let from = "WDJ",
      text = "bla bla bla"
      message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({ from, text });
  });
});
