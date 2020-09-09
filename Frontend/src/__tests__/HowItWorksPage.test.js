import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import HowItWorksPage from '../HowItWorksPage';

it('renders without crashing', () => {
  shallow(<HowItWorksPage />);
});

it('renders title1', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h1>Booking your drive in experience</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders title2', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title =  <h1>When you get here ... </h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders title3', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h2>Choose a movie</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it('renders title4', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h2>Buy a ticket</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it('renders title5', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h2>VIP your email</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it('renders title6', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h2>At the cinema</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it('renders title7', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h2>Order some food</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it('renders title8', () => {
    const wrapper = shallow(<HowItWorksPage />);
    const title = <h2>Sit back and enjoy</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });

let wrapper;
beforeEach(() => {
    wrapper = shallow(<HowItWorksPage />);
});

describe('<HowItWorksPage /> rendering', () => {

    it('should render one <Container>', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('should render two <section>', () => {
        expect(wrapper.find('section')).toHaveLength(2);
    });

    it('should render six <img>', () => {
        expect(wrapper.find('img')).toHaveLength(6);
    });

    it('should render eight <p>', () => {
        expect(wrapper.find('p')).toHaveLength(8);
    });

    it('should render two <a>', () => {
        expect(wrapper.find('a')).toHaveLength(2);
    });

    it('should render two <hr>', () => {
        expect(wrapper.find('hr')).toHaveLength(2);
    });

    
    

});