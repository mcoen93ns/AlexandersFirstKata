import { sumArray, calculateStepsOver20Years } from "../../src/functions";

describe("I have a list with a fixed amount of numbers and I want the sum of all the numbers in the list", () => {
  it("1, 2 and 3 add up to 6", () => {
    const sunday = [1, 2, 3];
    const output = 6;
    expect(sumArray(sunday)).toEqual(output);
  });

  it("1 and 2 become 3", () => {
    const sunday = [1, 2];
    const output = 3;
    expect(sumArray(sunday)).toEqual(output);
  });

  it("1, 2, 3 and 4 add up to 10", () => {
    const monday = [1, 2, 3, 4];
    const output = 10;
    expect(sumArray(monday)).toEqual(output);
  });

  it("1, 2, 3, 4 and 5 become 15", () => {
    const tuesday = [1, 2, 3, 4, 5];
    const output = 15;
    expect(sumArray(tuesday)).toEqual(output);
  });

  it("1, 2, 3, 4, 5 and 6 become 21", () => {
    const wednesday = [1, 2, 3, 4, 5, 6];
    const output = 21;
    expect(sumArray(wednesday)).toEqual(output);
  });

  it("1, 2, 3, 4, 5, 6 and 7 become 28", () => {
    const thursday = [1, 2, 3, 4, 5, 6, 7];
    const output = 28;
    expect(sumArray(thursday)).toEqual(output);
  });

  it("1, 2, 3, 4, 5, 6, 7 and 8 become 36", () => {
    const friday = [1, 2, 3, 4, 5, 6, 7, 8];
    const output = 36;
    expect(sumArray(friday)).toEqual(output);
  });

  it("1, 2, 3, 4, 5, 6, 7, 8 and 9 become 45", () => {
    const saturday = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const output = 45;
    expect(sumArray(saturday)).toEqual(output);
  });

  describe("Now that we can sum the number of steps for a given day, we need to calculate the total for a year", () => {
    it("When the data for a year looks like this: 6, 10, 15, 21, 28, 36, 45, the total is 161", () => {
      const year = [6, 10, 15, 21, 28, 36, 45];
      const output = 161;
      expect(sumArray(year)).toEqual(output);
    });
  });
  describe("Next step: forecast the number of steps taken in 20 years by multiplying the year total by 20", () => {
    it("When the total number of steps in a year is 161, the total number of steps in 20 years is 3220", () => {
      const sumOfStepsForAYear = 161;
      const output = 3220;
      expect(calculateStepsOver20Years(sumOfStepsForAYear)).toEqual(output);
    });
  });
});
