import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhiskeyShow from '../WhiskeyShow'


Enzyme.configure({ adapter: new Adapter()})

describe('When WhiskeyShow renders', () => {
    it("displays CardTitle", () => {
        
    
    const show = shallow(<WhiskeyShow />)
    const showPage = show.find("CardTitle")
    expect(showPage.length).toEqual(1)


    })
    })