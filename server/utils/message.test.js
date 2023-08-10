const { expect } = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("Generate Message", () => {
  it("should generate correct message object", () => {
    let from = "cem",
      text = "bla bla bla";
    message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({ from, text });
  });
});

describe("Generate Location Message", () => {
  it("should generate correct location object", () => {
    let from = "karaca",
      lat = 33,
      lng = 33,
      url = `https://www.google.com/maps?q=${lat}, ${lng}`,
      message = generateLocationMessage(from, lat, lng);

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({ from, url });
  });
});
