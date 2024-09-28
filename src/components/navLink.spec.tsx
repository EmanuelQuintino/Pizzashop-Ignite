import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { NavLink } from "./navLink";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the nav link when is current page link", () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/home"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    wrapper.debug();

    expect(wrapper.getByText("Home").dataset.current).toEqual("true");
    expect(wrapper.getByText("About").dataset.current).toEqual("false");
  });
});
