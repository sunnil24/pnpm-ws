import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import DataItem from "./DataItem";

describe("DataItem component", () => {
  it("renders DataItem with label and data", () => {
    const { getByText } = render(
      <DataItem label="Test Label" data="Test Data" />,
    );

    const labelElement = getByText(/Test Label/i);
    const dataElement = getByText(/Test Data/i);

    expect(document.body.contains(labelElement)).to.be.true;
    expect(document.body.contains(dataElement)).to.be.true;
  });
});
