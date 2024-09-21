import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { SignIn } from "./SignIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

describe("NavLink", () => {
  it("should set default email input value if email is present on search params", () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter initialEntries={["/sign-in?email=johndoe@email.com"]}>
              <QueryClientProvider client={new QueryClient()}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        );
      },
    });

    wrapper.debug();

    const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;
    expect(emailInput.value).toEqual("johndoe@email.com");
  });
});
