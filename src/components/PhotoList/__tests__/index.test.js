import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photolist from '..';

const portrait = "portraits";

afterEach(cleanup)

describe('Photolist is rendering', () => {

    it('renders', () => {
        render(<Photolist category={portrait} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Photolist category={portrait} />)
        expect(asFragment()).toMatchSnapshot()
    })

})
