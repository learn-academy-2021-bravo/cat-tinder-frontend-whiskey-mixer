import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter()})

describe('When Home renders', () => {
    it("displays h1", () => {

    
    const home = shallow(<Home />)
    const homeH1 = home.find("h1")
    expect(homeH1.text()).toEqual("Home page")


    })
    })
