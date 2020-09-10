import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Table, Container } from "react-bootstrap";

import AboutPage from '../AboutPage';


it('renders without crashing', () => {
  shallow(<AboutPage />);
});

it('renders title', () => {
    const wrapper = shallow(<AboutPage />);
    const title = <h1>About Us</h1>;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(title)).toEqual(true);
  });

  let wrapper;
beforeEach(() => {
    wrapper = shallow(<AboutPage />);
});

    describe('<AboutPage /> rendering', () => {

        it('should render two <Container>', () => {
            expect(wrapper.find('Container')).toHaveLength(2);
        });

    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render two <h3>', () => {
        expect(wrapper.find('h3')).toHaveLength(2);
    });

    it('should render three <h4>', () => {
        expect(wrapper.find('h4')).toHaveLength(3);
    });

    it('should render ten <h5>', () => {
        expect(wrapper.find('h5')).toHaveLength(10);
    });


});