import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import Table from "./index"; // Assuming the component is in the same directory

describe("Table Component", () => {
  // Write your test case
  test("renders Table component", () => {
    // Render the Table component
    render(<Table />);

    // Check if the Table component is rendered by looking for the ag-Grid root element
    const gridRoot = screen.getByRole("grid");
    expect(gridRoot).toBeInTheDocument();
  });
});
