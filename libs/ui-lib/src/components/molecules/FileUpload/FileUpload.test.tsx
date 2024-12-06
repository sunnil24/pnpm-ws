import { render } from "@testing-library/react";
import FileUpload from "./FileUpload";
import { expect, it, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("FileUpload component", () => {
  it("renders correctly without file", () => {
    const uploadText = "Upload File";
    const fileFormatText = "Files should be in excel format";
    const { getByText } = render(
      <FileUpload
        onUpload={() => {}}
        uploadText={uploadText}
        fileFormatText={fileFormatText}
      />,
    );
    expect(getByText("Drag and drop file here")).toBeInTheDocument();
    expect(getByText(uploadText)).toBeInTheDocument();
    expect(getByText(fileFormatText)).toBeInTheDocument();
  });
});
