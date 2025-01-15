const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello MIT CTO, time to roll up your sleeves and get your hands dirty");
  });
});
