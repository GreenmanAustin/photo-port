import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

afterEach(cleanup)
const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

describe('Modal is rendering', () => {
    it('renders', () => {
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
    });

    it('renders', () => {
        const { asFragment } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        // Act: Simulate click event
        // Assert: Expected matcher
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);


    });
})
