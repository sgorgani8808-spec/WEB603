import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders shop title", () => {
  render(<App />);
  const titleElement = screen.getByText(/shop to react/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders all products", () => {
  render(<App />);
  expect(screen.getByText(/unisex cologne/i)).toBeInTheDocument();
  expect(screen.getByText(/apple iwatch/i)).toBeInTheDocument();
  expect(screen.getByText(/unique mug/i)).toBeInTheDocument();
  expect(screen.getByText(/mens wallet/i)).toBeInTheDocument();
});

test("renders cart count", () => {
  render(<App />);
  expect(screen.getByText(/0 items/i)).toBeInTheDocument();
});