// Label.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Label from "./Label";

describe("Label", () => {
  it("renders correctly with only required props", () => {
    render(<Label labelFor="Test Label">Test Label</Label>);

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(
      "font-semibold text-sm text-basics-grey70 pb-2",
    );
  });

  it("renders correctly with all props", () => {
    render(
      <Label labelFor="test-label-1" className="custom-class">
        Test Label 1
      </Label>,
    );

    const labelElement = screen.getByText("Test Label 1");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(
      "font-semibold text-sm text-basics-grey70 pb-2 custom-class",
    );
  });
});
