// Label.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Label from "./Label";

describe("Label", () => {
  it("renders correctly with only required props", () => {
    render(<Label labelText="Test Label" />);

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(
      "font-semibold text-sm text-basics-grey70 pb-2",
    );
  });

  it("renders correctly with all props", () => {
    render(<Label labelText="Test Label" className="custom-class" />);

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(
      "font-semibold text-sm text-basics-grey70 pb-2 custom-class",
    );
  });
});
