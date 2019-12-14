const sellTickets = require("./vasya");

describe("sellTickets", () => {
  test("Expects 'No' when passed with no value", () => {
    const input = [];
    const sales = sellTickets(input);
    expect(sales).toBe("No");
  });

  test("Expects 'Yes' when passed with a $25 dollar bill", () => {
    const input = [25];
    const sales = sellTickets(input);
    expect(sales).toBe("Yes");
  });

  test("Expects 'No' when passed with bill", () => {
    let input = [50];
    let sales = sellTickets(input);
    expect(sales).toBe("No");
    input = [100];
    sales = sellTickets(input);
    expect(sales).toBe("No");
  });

  test("Expects 'Yes' when there is change for a $50 dollar bill", () => {
    const input = [25, 50];
    const sales = sellTickets(input);
    expect(sales).toBe("Yes");
  });

  test("Expects 'No' when there is not enough change for a $100 dollar bill", () => {
    const input = [25, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("No");
  });

  test("Expects 'No' when there is not enough change for a $100 bill", () => {
    const input = [25, 25, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("No");
  });

  test("Expects 'Yes' when there is enough change for everyone", () => {
    const input = [25, 50, 25, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("Yes");
  });

  test("Expects 'No' when there is enough change for everyone", () => {
    const input = [25, 50, 50, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("No");
  });

  test("Expects 'Yes' when there is enough change for everyone", () => {
    const input = [25, 25, 50, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("Yes");
  });

  test("Expects 'Yes' when there is enough change for everyone", () => {
    const input = [25, 25, 25, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("Yes");
  });

  test("Expects 'Yes' when there is enough change", () => {
    const input = [25, 25, 50, 50, 100];
    const sales = sellTickets(input);
    expect(sales).toBe("Yes");
  });

  test("Expects 'No' when there is not enough change", () => {
    const input = [
      25,
      25,
      50,
      100,
      25,
      25,
      25,
      100,
      25,
      25,
      25,
      100,
      25,
      50,
      25,
      100,
      25,
      100,
      25
    ];
    const sales = sellTickets(input);
    expect(sales).toBe("No");
  });
});
