import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import LocalAttractionsPage from '../LocalAttractionsPage';

it('renders without crashing', () => {
  shallow(<LocalAttractionsPage />);
});

it('renders title1', () => {
    const wrapper = shallow(<LocalAttractionsPage />);
    const title = <h1>Local Attractions</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  
let wrapper;
beforeEach(() => {
    wrapper = shallow(<LocalAttractionsPage />);
});

describe('<LocalAttractionsPage /> rendering', () => {

    it('should render one <Container>', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('should render one <h4>', () => {
        expect(wrapper.find('h4')).toHaveLength(1);
    });

    it('should render two <p>', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('should render two <span>', () => {
        expect(wrapper.find('span')).toHaveLength(2);
    });


    it('should render three <hr>', () => {
        expect(wrapper.find('hr')).toHaveLength(3);
    });    

});