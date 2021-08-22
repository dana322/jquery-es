
import {expect} from 'chai'
import $ from '../../src/index.js'
 
describe('find the first previous sibling', function() {
    before(function() {
        const ulOne = document.createElement('ul')
        const ulTwo = document.createElement('ul')
        document.body.appendChild(ulOne)
        document.body.appendChild(ulTwo)
     
        const liOne1 = document.createElement('li')
        const liOne2 = document.createElement('li')
        const liOne3 = document.createElement('li')
     
        liOne3.setAttribute('class', 'item')
     
        ulOne.append(liOne1)
        ulOne.append(liOne2)
        ulOne.append(liOne3)
     
        const liTwo1 = document.createElement('li')
        const liTwo2 = document.createElement('li')
        const liTwo3 = document.createElement('li')
     
        liTwo3.setAttribute('class', 'item')
     
        ulTwo.append(liTwo1)
        ulTwo.append(liTwo2)
        ulTwo.append(liTwo3)
 
        liOne2.setAttribute('class', 'hello')
        liTwo2.setAttribute('class', 'hello')
 
        liOne1.setAttribute('class', 'jQuery')
        liTwo1.setAttribute('class', 'jQuery')
 
        document.querySelectorAll('.hello').forEach(item => {
            item.innerText = 'hello'
        })
 
        document.querySelectorAll('.jQuery').forEach(item => {
            item.innerText = 'jquery-es'
        })
    })
 
    it('find two previous elements', function() {
        expect($( '.item' ).prev().text()).to.be.equal('hellohello')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
 
describe('find selected previous slibling', function() {
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
    it('find target', function() {
        expect($('.end').prev('p').text()).to.be.equal('jquery-es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
