import {expect} from 'chai'
import $ from '../../src/index.js'
  
describe('find dom', function() {
    before(function() {
        const div = document.createElement('div')
        div.innerText = 'hello jquery es'
        document.body.appendChild(div)

        const divTwo = document.createElement('div')
        divTwo.innerText = 'hello jquery es'
        document.body.appendChild(divTwo)
    })

    it('find two div', function() {
        expect($('body').find('div').text()).to.be.equal('hello jquery eshello jquery es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
 
 