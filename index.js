const name = "Susan";
const height = 40;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });