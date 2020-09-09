import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';


it('renders without crashing', () => {
  shallow(<HomePage />);
});



let wrapper;
beforeEach(() => {
    wrapper = shallow(<HomePage />);
});

describe('<HomePage /> rendering', () => {

    it('should render one <Container>', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });


});