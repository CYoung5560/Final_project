import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import DiscussionBoard from '../DiscussionBoard';


it('renders without crashing', () => {
  shallow(<DiscussionBoard />);
});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<DiscussionBoard />);
});

describe('<DiscussionBoard /> rendering', () => {

    it('should render one <Form>', () => {
        expect(wrapper.find('Form')).toHaveLength(1);
    });

    it('should render one <textarea>', () => {
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should render two <button>', () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });
    

});