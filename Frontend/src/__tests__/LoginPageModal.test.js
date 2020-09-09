import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import LoginPageModal from '../LoginPageModal';


it('renders without crashing', () => {
  shallow(<LoginPageModal />);
});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<LoginPageModal />);
});

describe('<LoginPageModal /> rendering', () => {

    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render one <a>', () => {
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('should render three <strong>', () => {
        expect(wrapper.find('strong')).toHaveLength(3);
    });

    it('should render one <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should render two <label>', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('should render two <input>', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render three <button>', () => {
        expect(wrapper.find('button')).toHaveLength(3);
    });
    

});