import {expect} from 'chai'
import $ from '../../src/index.js'

describe('find all previous siblings', function() {
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

        liOne1.setAttribute('class', 'hello')
        liTwo1.setAttribute('class', 'hello')

        document.querySelectorAll('.hello').forEach(item => {
            item.innerText = 'hello'
        })
    })

    it('find previous two elements', function() {
        expect($( '.item-2' ).prevAll().text()).to.be.equal('hellohello')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})

describe('find previous selected item', function() {
    before(function() {
        const div = document.createElement('div')
        const targetP = document.createElement('p')
        const end = document.createElement('p')
    

        document.body.appendChild(div)
        document.body.appendChild(targetP)
        document.body.appendChild(end)

        end.setAttribute('class', 'end')
        targetP.setAttribute('class', 'target')

        document.querySelector('.target').innerText = 'jquery-es'
    })
    
    it('get all prve selected p', function() {
        expect($('.end').prevAll('p').text('hello danan').text()).to.be.equal('hello danan')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})