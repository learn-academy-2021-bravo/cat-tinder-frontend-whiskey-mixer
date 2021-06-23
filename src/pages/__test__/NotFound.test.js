import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter()})

describe('When NotFound renders', () => {
    it("displays h1", () => {

    
    const notFound = shallow(<NotFound />)
    const notFoundImg = notFound.find("img")
    expect(notFoundImg.length).toEqual(1)


    })
    })