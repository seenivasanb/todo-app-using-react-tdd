import { render, screen } from "@testing-library/react";
import PlusStickButtonComponent from "./plus-sticky-button";
import { BrowserRouter } from "react-router-dom";

describe("Plus Sticky Button Component", () => {
    test("Should render correctly", () => {
        render(<PlusStickButtonComponent />, {
            wrapper: BrowserRouter
        });

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});