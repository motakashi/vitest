import { render, screen } from "@testing-library/react";
import { TextInput } from "./TextInput"
 

test('TextInputに対するテスト', () => { 
    render(<TextInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
 })