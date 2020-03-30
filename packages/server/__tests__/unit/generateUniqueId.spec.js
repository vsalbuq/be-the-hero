const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique Id", () => {
  it("should generate a valid ID", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
