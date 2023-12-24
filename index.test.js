// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    // Write ur test-code here!
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  // write another 3 test case here!
  test("it capitalizes the first letter of a single character", () => {
    const result = capitalize("x");
    expect(result).toBe("X");
  });

  test("it handles an empty string", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  test("it capitalizes the first letter of a sentence", () => {
    const result = capitalize("this is a sentence");
    expect(result).toBe("This is a sentence");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
    expect(epochDateToUTC(0)).toEqual("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  // write another 3 test case here!
  it("should return the current date for the current timestamp", () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const result = epochDateToUTC(currentTimestamp);
    const currentDate = new Date(currentTimestamp * 1000).toUTCString();
    expect(result).toBe(currentDate);
  });

  it("should handle negative timestamps", () => {
    const result = epochDateToUTC(-86400);
    expect(result).toBe("Wed, 31 Dec 1969 00:00:00 GMT");
  });

  test("should return Invalid Date for an invalid timestamp", () => {
    const result = epochDateToUTC("invalid");
    expect(result).toBe("Invalid Date");
  });
});
