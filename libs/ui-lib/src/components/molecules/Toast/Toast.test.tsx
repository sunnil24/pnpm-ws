// Toast.test.tsx
import { render, fireEvent } from "@testing-library/react";
import Toast from "./Toast";
import { expect, it, describe, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Toast", () => {
  it("renders without crashing", () => {
    const handleClose = vi.fn();

    const { getByText } = render(
      <Toast
        message="Test message"
        position="top-0"
        type="success"
        handleClose={handleClose}
      />,
    );

    expect(getByText("Test message")).toBeInTheDocument();
  });

  it("calls handleClose when the close button is clicked", () => {
    const handleClose = vi.fn();

    const { getByRole } = render(
      <Toast
        message="Test message"
        position="top-0"
        type="success"
        handleClose={handleClose}
      />,
    );

    fireEvent.click(getByRole("button"));
    expect(handleClose).toHaveBeenCalled();
  });
});
