import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";


import PageFooter from "./PageFooter";


describe("PageFooter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  afterEach(cleanup);

  it("renders as expected", () => {
    const { asFragment } = render(<PageFooter />);
    expect(asFragment()).toMatchSnapshot();
  });

});
