import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import FindUsPage from '../FindUsPage';

it('renders without crashing', () => {
  shallow(<FindUsPage />);
});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<FindUsPage />);
});

describe('<FindUsPage /> rendering', () => {

    it('should render one <Container>', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('should render three <p>', () => {
        expect(wrapper.find('p')).toHaveLength(3);
    });

    it('should render three <h4>', () => {
        expect(wrapper.find('h4')).toHaveLength(3);
    });

    it('should render four <hr>', () => {
        expect(wrapper.find('hr')).toHaveLength(4);
    });
    
    it('should render three <span>', () => {
        expect(wrapper.find('span')).toHaveLength(3);
    });

    it('should render two <img>', () => {
        expect(wrapper.find('img')).toHaveLength(2);
    });

});