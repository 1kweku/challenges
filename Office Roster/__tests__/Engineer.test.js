const Engineer = require("../lib/Engineer");

it("returns engineer's GitHub", () => {
  const Kweku = new Engineer(
    "Kweku",
    2,
    "kwekuplusp@gmail.com",
    "github.com/1kweku"
  );

  expect(Kweku.GitHub).toEqual("github.com/1kweku");
});

it("returns engineer's role", () => {
  const Kweku = new Engineer(
    "Kweku",
    1,
    "kwekuplusp@gmail.com",
    "github.com/1kweku"
  );

  expect(Kweku.getrole()).toEqual("Engineer");
});
