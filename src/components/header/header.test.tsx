import { render, screen } from "@testing-library/react";
import HeaderComponent from "./header";

describe("Header Component", () => {

    test("Should render component", () => {
        render(<HeaderComponent />);
        
        const title = screen.getByText("To Do");
        expect(title).toBeInTheDocument();
    });

    
});