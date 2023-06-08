import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";


import ActionButton, {Props} from "./ActionButton";


describe("ActionButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  afterEach(cleanup);

  it("renders as expected", () => {
    const { asFragment } = render(<ActionButton><>Hello World</></ActionButton>);
    expect(asFragment()).toMatchSnapshot();
  });

});
