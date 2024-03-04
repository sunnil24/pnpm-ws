// Dropdown.spec.tsx
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Select from "./Select";

describe("Select", () => {
  const options = ["Apples", "Bananas", "Oranges"];

  test("renders correctly and displays options", () => {
    console.log(render(<Select options={options} />));

    const triggerButton = screen.getByText("New");
    expect(triggerButton).toBeInTheDocument();
  });
});
