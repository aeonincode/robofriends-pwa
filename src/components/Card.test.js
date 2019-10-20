// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

// it('expect to render Card component', () => {
//     expect(shallow(<Card />).length).toEqual(1)
// })

// snapshot testing
it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})

