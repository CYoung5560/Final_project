import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieComponent from '../MovieComponent';


it('renders without crashing', () => {
  shallow(<MovieComponent />);
});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<MovieComponent />);
});

describe('<MovieComponent /> rendering', () => {

    it('should render one <table>', () => {
        expect(wrapper.find('table')).toHaveLength(1);
    });
    

});