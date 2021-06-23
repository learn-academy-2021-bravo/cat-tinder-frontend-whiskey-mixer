import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhiskeyEdit from '../WhiskeyEdit'

Enzyme.configure({ adapter: new Adapter()})

describe('When WhiskeyEdit renders', () => {
    it("displays h2", () => {

    
    const edit = shallow(<WhiskeyEdit />)
    const editPage = edit.find("h2")
    expect(editPage.text()).toEqual("This is the Edit Page")


    })
    })