import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import userEvent from "@testing-library/user-event";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });

  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    const user = userEvent.setup();
    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the previous page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const previousPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });

    const user = userEvent.setup();
    await user.click(previousPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });

  it("should be able to navigate to the first page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const firstPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    const user = userEvent.setup();
    await user.click(firstPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it("should be able to navigate to the last page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const lastPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });

    const user = userEvent.setup();
    await user.click(lastPageButton);

    console.log(onPageChangeCallback.mock.calls);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
