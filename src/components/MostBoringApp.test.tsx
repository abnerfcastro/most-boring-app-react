import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MostBoringApp } from "./MostBoringApp";

describe("Test MostBoringApp", () => {
  afterEach(cleanup);

  test("Renders everything as expected", () => {
    render(<MostBoringApp />);

    expect(
      screen.getByRole("heading", { name: /the most boring app ever/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /increment/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /decrement/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/the current value is/i)).toBeInTheDocument();

    expect(screen.getByTestId("value-content")).toBeInTheDocument();
    expect(screen.getByTestId("value-content").textContent).toEqual("0");
  });

  test("Increments value when Increment button is clicked", () => {
    render(<MostBoringApp initialValue={100} />);

    expect(screen.getByTestId("value-content").textContent).toEqual("100");

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));

    expect(screen.getByTestId("value-content").textContent).toEqual("101");
  });

  test("Decrements value when Decrement button is clicked", () => {
    render(<MostBoringApp initialValue={80} />);

    expect(screen.getByTestId("value-content").textContent).toEqual("80");

    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));

    expect(screen.getByTestId("value-content").textContent).toEqual("79");
  });
});
