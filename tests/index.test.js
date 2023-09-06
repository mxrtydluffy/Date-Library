// Tests
const { D } = require("../src/index");

describe("D Class Test", () => {
  describe("constructor", () => {
    it("should create a new D object with current date when no parameters are present", () => {
      const d = new D();
      expect(d._date).toBeInstanceOf(Date);
    });

    it("should return the correct short year for given string", () => {
      const d = new D("12/05/2001");
      expect(d.year).toBe(2001);
    });
  });

  describe("getters", () => {
    it("should return correct full year", () => {
      const d = new D(2023, 0, 1);
      expect(d.year).toBe(2023);
    });

    it("should get the correct short year", () => {
      const d = new D(2023, 0, 1);
      expect(d.yr).toBe(23);
    });
  });

  describe("format", () => {
    it("should format the date using default mask", () => {
      const d = new D(2023, 0, 15);
      expect(d.format()).toBe("2023 January 15");
    });

    it("should format the date using provided mask", () => {
      const d = new D(2022, 0, 2);
      expect(d.format("y/m/d")).toBe("22/Jan/2");
    });
  });

  describe("when", () => {
    it("should describe the difference between two dates", () => {
      const d = new D();
      expect(d.when()).toBe("today");
    });
  });
});