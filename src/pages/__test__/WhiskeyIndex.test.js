import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhiskeyIndex from '../WhiskeyIndex'

Enzyme.configure({ adapter: new Adapter()})

describe('When WhiskeyIndex renders', () => {
    it("displays h1", () => {

    
    const index = shallow(<WhiskeyIndex />)
    const indexPage = index.find("h2")
    expect(indexPage.text()).toEqual("This is the Index Page")


    })
    })