import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhiskeyNew from '../WhiskeyNew'

Enzyme.configure({ adapter: new Adapter()})

describe('When WhiskeyNew renders', () => {
    it("displays h2", () => {

    
    const ne = shallow(<WhiskeyNew />)
    const newPage = ne.find("h2")
    expect(newPage.text()).toEqual("This is the New Page")


    })
    })