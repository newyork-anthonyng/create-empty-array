const createEmptyArray = require("./");

it("should create empty iterable array", () => {
  const result = createEmptyArray(5);
  const map = result.map(() => "Hi");

  expect(result).toMatchSnapshot();
  expect(map).toMatchSnapshot();
});

it("should not explode when length is not specified", () => {
  const result = createEmptyArray();

  expect(result).toMatchSnapshot();
});
