
import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './index';
import { Wrapper, Label, Input } from './style';

describe("<TextInput/> component test", () => {
    it("Test elements", () => {
        const wrapper = shallow(<TextInput/>);
        expect(wrapper.find(Wrapper)).toHaveLength(1);
        expect(wrapper.find(Input)).toHaveLength(1);
        expect(wrapper.find(Label)).toHaveLength(1);
    })

    it("Test states after input value when typing something [maxWidth=undefined] Default text input",()=>{
        const wrapper = shallow(<TextInput type="text"/>);
        const input = wrapper.find(Input);
        input.simulate('change', {target: {value: 'My new value'}});
        wrapper.update();
        expect(wrapper.state().empty).toEqual(false);
        expect(wrapper.state().labelOnTop).toEqual(false);
    })

    it("Test states after input value when typing something [maxWidth=50]  text input with select",()=>{
        const wrapper = shallow(<TextInput type="text" maxWidth={50}/>);
        const input = wrapper.find(Input);
        input.simulate('change', {target: {value: 'My new value'}});
        wrapper.update();
        expect(wrapper.state().empty).toEqual(false);
        expect(wrapper.state().labelOnTop).toEqual(true);
    })
})