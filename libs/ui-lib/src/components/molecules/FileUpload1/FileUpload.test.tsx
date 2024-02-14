import { render } from "@testing-library/react";
import FileUpload from "./FileUpload";
import { expect, it, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("FileUpload component", () => {
  it("renders correctly without file", () => {
    const { getByText } = render(<FileUpload onUpload={() => {}} />);
    expect(getByText("Drag and drop file here")).toBeInTheDocument();
    expect(getByText("Upload File")).toBeInTheDocument();
    expect(getByText("Files should be in excel format")).toBeInTheDocument();
  });
});
