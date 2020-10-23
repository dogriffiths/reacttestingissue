import Example from "./Example";
import React from "react";
import {fireEvent, render} from "@testing-library/react";

describe('input blur', () => {
    it('should display text when blurring from the field', () => {
        const {getByLabelText, queryByText} = render(<Example/>);
        const input = getByLabelText(/Field/);
        fireEvent.blur(input);
        expect(queryByText('Blur has happened')).toBeInTheDocument();
    });
});