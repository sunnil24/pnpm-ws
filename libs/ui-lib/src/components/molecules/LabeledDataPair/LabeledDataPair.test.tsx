import { render, screen } from "@testing-library/react";
import { LabeledDataPair } from "./LabeledDataPair";
import { expect, it, describe } from "vitest";

describe("DataItem component", () => {
  it("renders LabeledDataPair with items", () => {
    const items = [
      { label: "Test Label 1", data: "Test Data 1" },
      { label: "Test Label 2", data: "Test Data 2" },
    ];

    render(<LabeledDataPair items={items} />);

    items.forEach((item) => {
      const labelElement = screen.getByText(new RegExp(item.label, "i"));
      const dataElement = screen.getByText(new RegExp(item.data, "i"));

      expect(labelElement).toBeInTheDocument();
      expect(dataElement).toBeInTheDocument();
    });
  });
});
