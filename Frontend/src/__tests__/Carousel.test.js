import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import Carousel from '../Carousel';


it('renders without crashing', () => {
  shallow(<Carousel />);
});

it('renders title1', () => {
    const wrapper = shallow(<Carousel />);
    const title = <h1>Book now for an amazing movie experience!</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders title2', () => {
    const wrapper = shallow(<Carousel />);
    const title = <h1>The Drive in low down</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders title3', () => {
    const wrapper = shallow(<Carousel />);
    const title = <h1>Great movies at great prices!</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Carousel />);
});

describe('<Carousel /> rendering', () => {

    it('should render three <img>', () => {
        expect(wrapper.find('img')).toHaveLength(3);
    });

    it('should render five <a>', () => {
        expect(wrapper.find('a')).toHaveLength(5);
    });

    it('should render three <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(3);
    });

    it('should render six <p>', () => {
        expect(wrapper.find('p')).toHaveLength(6);
    });

    

});