import {expect} from 'chai'
import $ from '../../src/index.js'

describe('find sibling of two items', function() {
    before(function() {
        const ulOne = document.createElement('ul')
        const ulTwo = document.createElement('ul')
        document.body.appendChild(ulOne)
        document.body.appendChild(ulTwo)

        const liOne1 = document.createElement('li')
        const liOne2 = document.createElement('li')
        const liOne3 = document.createElement('li')

        liOne2.setAttribute('class', 'item-2')

        ulOne.append(liOne1)
        ulOne.append(liOne2)
        ulOne.append(liOne3)

        const liTwo1 = document.createElement('li')
        const liTwo2 = document.createElement('li')
        const liTwo3 = document.createElement('li')

        liTwo2.setAttribute('class', 'item-2')

        ulTwo.append(liTwo1)
        ulTwo.append(liTwo2)
        ulTwo.append(liTwo3)

        liOne3.setAttribute('class', 'hello')
        liTwo3.setAttribute('class', 'hello')

        document.querySelectorAll('.hello').forEach(item => {
            item.innerText = 'hello'
        })
    })

    it('get text', function() {
        expect($( '.item-2' ).nextAll().text()).to.be.equal('hellohello')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})

describe('find selected item', function() {
    before(function() {
        const one = document.createElement('p')
        const div = document.createElement('div')
        const targetP = document.createElement('p')

        document.body.appendChild(one)
        document.body.appendChild(div)
        document.body.appendChild(targetP)

        one.setAttribute('class', 'one')
    })
    
    it('get p text', function() {
        expect($('.one').nextAll('p').text('hello danan').text()).to.be.equal('hello danan')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})