import { render, screen } from "@testing-library/react";
import FilterButtons, { FilterButtonsProps } from "./filter-buttons";

describe("Filter Buttons Component", () => {
  const filterButtons: {
    all?: HTMLElement;
    pending?: HTMLElement;
    done?: HTMLElement;
  } = {};

  const setup = ({ activeButton = "all" }: FilterButtonsProps) => {
    render(<FilterButtons activeButton={activeButton} />);

    filterButtons["all"] = screen.getByRole("button", {
      name: "all",
    });
    filterButtons["pending"] = screen.getByRole("button", {
      name: "pending",
    });
    filterButtons["done"] = screen.getByRole("button", {
      name: "done",
    });
  };

  test("Should render component correctly", () => {
    setup({});
    expect(filterButtons["all"]).toBeInTheDocument();
    expect(filterButtons["pending"]).toBeInTheDocument();
    expect(filterButtons["done"]).toBeInTheDocument();
  });

  test("Should active All button only", () => {
    setup({ activeButton: "all" });

    expect(filterButtons["all"]).toHaveClass("active");
    expect(filterButtons["pending"]).not.toHaveClass("active");
    expect(filterButtons["done"]).not.toHaveClass("active");
  });

  test("Should active Pending button only", () => {
    setup({ activeButton: "pending" });

    expect(filterButtons["all"]).not.toHaveClass("active");
    expect(filterButtons["pending"]).toHaveClass("active");
    expect(filterButtons["done"]).not.toHaveClass("active");
  });

  test("Should active Done button only", () => {
    setup({ activeButton: "done" });

    expect(filterButtons["all"]).not.toHaveClass("active");
    expect(filterButtons["pending"]).not.toHaveClass("active");
    expect(filterButtons["done"]).toHaveClass("active");
  });
});
