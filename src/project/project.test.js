import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import Project from './project';

configure({ adapter: new Adapter() });

it('should render project component', () => {
  const wrapper = shallow(<Project />);
});

it("should create an entry in component state", () => {
  // given
  const component = shallow(<Project />);
  const form = component.find('input');
  // when
  form.props().onChange({target: {
     value: 'myValue'
  }});
  // then
  expect(component.state('text')).toBeDefined();
});