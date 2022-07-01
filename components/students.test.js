import React from 'react';
import Students from './students';
import Student from './student/student';
import Enzyme ,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });
const items=[{id:0, name:'Mahdi', classNumber:204,number:123456,email:'reactapp.ir@gmail.com'},
{id:1, name:'Reza', classNumber:214,number:123456,email:'reactapp.ir@gmail.com'},
{id:2, name:'Morteza', classNumber:224,number:123456,email:'reactapp.ir@gmail.com'},
{id:3, name:'Alireza', classNumber:234,number:123456,email:'reactapp.ir@gmail.com'},]
describe('<Students />',()=>{
    it('renders nimber of student component',()=>{
        const spy = sinon.spy();
        const wrapper  = shallow(<Students studentsList={items} deleted={spy} toggle={true} edited={spy}/>);
        expect(wrapper.find(Student)).toHaveLength(items.length);
    })
})