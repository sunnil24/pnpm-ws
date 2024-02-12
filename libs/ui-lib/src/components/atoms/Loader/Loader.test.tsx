import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, test } from "vitest"
import { Loader } from "./index"

describe("<Loader />", () => {
  beforeEach(() => {
    render(<Loader />)
  })

  test("should render the loader correctly", () => {
    screen.debug()

    expect(screen.getByRole("status")).toBeTruthy()
    expect(screen.getByTestId("spinner").textContent).toBe("Loading...")
  })
})
