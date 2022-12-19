const manager = require("../lib/Manager");

it("returns manager's office number", () => {
  const Kweku = new manager("Kweku", 2, "kwekuplusp@gmail.com", "112");

  expect(Kweku.officeNumber).toEqual("112");
});
