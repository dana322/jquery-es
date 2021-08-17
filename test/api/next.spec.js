
import {expect} from 'chai'
import $ from '../../src/index.js'
 
describe('find the first sibling of two items', function() {
    before(function() {
        const ulOne = document.createElement('ul')
        const ulTwo = document.createElement('ul')
        document.body.appendChild(ulOne)
        document.body.appendChild(ulTwo)
     
        const liOne1 = document.createElement('li')
        const liOne2 = document.createElement('li')
        const liOne3 = document.createElement('li')
     
        liOne1.setAttribute('class', 'item')
     
        ulOne.append(liOne1)
        ulOne.append(liOne2)
        ulOne.append(liOne3)
     
        const liTwo1 = document.createElement('li')
        const liTwo2 = document.createElement('li')
        const liTwo3 = document.createElement('li')
     
        liTwo1.setAttribute('class', 'item')
     
        ulTwo.append(liTwo1)
        ulTwo.append(liTwo2)
        ulTwo.append(liTwo3)
 
        liOne2.setAttribute('class', 'hello')
        liTwo2.setAttribute('class', 'hello')
 
        liOne3.setAttribute('class', 'jQuery')
        liTwo3.setAttribute('class', 'jQuery')
 
        document.querySelectorAll('.hello').forEach(item => {
            item.innerText = 'hello'
        })
 
        document.querySelectorAll('.jQuery').forEach(item => {
            item.innerText = 'jquery-es'
        })
    })
 
    it('get text', function() {
        expect($( '.item' ).next().text()).to.be.equal('hellohello')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
 
describe('find selected item', function() {
    before(function() {
        const one = document.createElement('p')
        const targetP = document.createElement('p')
        const div = document.createElement('div')
 
        document.body.appendChild(one)
        document.body.appendChild(targetP)
        document.body.appendChild(div)
 
        one.setAttribute('class', 'one')
        targetP.setAttribute('class', 'target')
 
        document.querySelector('.target').innerText = 'jquery-es'
    })
    it('get p text', function() {
        expect($('.one').next('p').text()).to.be.equal('jquery-es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
