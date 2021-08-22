import {expect} from 'chai'
import $ from '../../src/index.js'
 
describe('find all siblings', function() {
    before(function() {
        const ulOne = document.createElement('ul')
        const ulTwo = document.createElement('ul')
        document.body.appendChild(ulOne)
        document.body.appendChild(ulTwo)
     
        const liOne1 = document.createElement('li')
        const liOne2 = document.createElement('li')
        const liOne3 = document.createElement('li')
     
        liOne2.setAttribute('class', 'item')
     
        ulOne.append(liOne1)
        ulOne.append(liOne2)
        ulOne.append(liOne3)
     
        const liTwo1 = document.createElement('li')
        const liTwo2 = document.createElement('li')
        const liTwo3 = document.createElement('li')
     
        liTwo2.setAttribute('class', 'item')
     
        ulTwo.append(liTwo1)
        ulTwo.append(liTwo2)
        ulTwo.append(liTwo3)
    })
 
    it('find all sliblings', function() {
        $('.item').prevAll().text('hello')
        $('.item').nextAll().text('jquery-es')
        expect($( '.item' ).siblings().text()).to.be.equal('hellohellojquery-esjquery-es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
 
describe('find selected siblings', function() {
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
        expect($('.one').siblings('p').text()).to.be.equal('jquery-es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})
