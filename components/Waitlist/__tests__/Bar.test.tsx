import React from "react";
import { render, screen } from "@utils/testing";
import Waitlist from "../Waitlist";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Waitlist />);
  expect(screen.getAllByTestId("Bar"));
});
