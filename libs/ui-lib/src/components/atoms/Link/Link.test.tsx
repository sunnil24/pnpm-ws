// component.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Link from "./Link";

describe("Link", () => {
  it("renders correctly", () => {
    render(<Link href="https://example.com">Children</Link>);

    const linkElement = screen.getByText("Example");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });
});
