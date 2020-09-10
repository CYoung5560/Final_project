import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import FilmRatingsPage from '../FilmRatingsPage';


it('renders without crashing', () => {
  shallow(<FilmRatingsPage />);
});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<FilmRatingsPage />);
});

describe('<FilmRatingsPage /> rendering', () => {

    it('should render one <Container>', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('should render one <h6>', () => {
        expect(wrapper.find('h6')).toHaveLength(1);
    });

    it('should render four <Row>', () => {
        expect(wrapper.find('Row')).toHaveLength(4);
    });

    it('should render eleven <Col>', () => {
        expect(wrapper.find('Col')).toHaveLength(12);
    });

    it('should render two <a>', () => {
        expect(wrapper.find('a')).toHaveLength(2);
    });

    it('should render three <img>', () => {
        expect(wrapper.find('img')).toHaveLength(3);
    });
    

});