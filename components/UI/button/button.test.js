import React from 'react';
import Button from './button';
import Enzyme ,{ mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });
it('<Button />',()=>{
    const spy  = sinon.spy();
    const wrapper = shallow(<Button  clicked={spy}>click</Button>);
    wrapper.find('button').first().simulate('click');
    expect(spy.calledOnce).toBe(true);
})