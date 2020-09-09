import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import ContactPage from '../ContactPage';


it('renders without crashing', () => {
  shallow(<ContactPage />);
});

it('renders title1', () => {
    const wrapper = shallow(<ContactPage />);
    const title = <h5>Find Us:</h5>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders title2', () => {
    const wrapper = shallow(<ContactPage />);
    const title = <h5>Opening Times:</h5>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders title3', () => {
    const wrapper = shallow(<ContactPage />);
    const title = <h5>Contact Us:</h5>;
    expect(wrapper.contains(title)).toEqual(true);
  });

let wrapper;
beforeEach(() => {
    wrapper = shallow(<ContactPage />);
});

describe('<ContactPage /> rendering', () => {

    it('should render two <Container>', () => {
        expect(wrapper.find('Container')).toHaveLength(2);
    });

    it('should render one <p>', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should render three <h5>', () => {
        expect(wrapper.find('h5')).toHaveLength(3);
    });

    it('should render one <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should render three <label>', () => {
        expect(wrapper.find('label')).toHaveLength(3);
    });

    it('should render two <input>', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render one <textarea>', () => {
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should render one <button>', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    

});