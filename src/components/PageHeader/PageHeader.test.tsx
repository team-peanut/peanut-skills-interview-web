import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";


import PageHeader, {Props} from "./PageHeader";


describe("PageHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  afterEach(cleanup);

  it("renders as expected", () => {
    const { asFragment } = render(<PageHeader />);
    expect(asFragment()).toMatchSnapshot();
  });

});
