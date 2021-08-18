import {expect} from 'chai'
import $ from '../../src/index.js' 

describe('set className', function () {
    this.beforeEach(function() {
        document.body.innerHTML = ''
        const div = document.createElement('div')
        document.body.appendChild(div)
    })

    it('when arg is string', function() {
        $('div').addClass('selected')
        expect(document.querySelector('div').className).to.be.equal('selected')
    })

    it('when arg is array', function() {
        $('div').addClass(['one', 'two'])
        expect(document.querySelector('div').className).to.be.equal('one two')
    })

    it('when the return value of function arg is string', function() {
        $( 'div' ).addClass(function( index ) {
            return `item-${index}`
        })
        expect(document.querySelector('div').className).to.be.equal('item-0')
    })

    it('when the return value of function arg is array', function() {
        $( 'div' ).addClass(function() {
            return ['one', 'two']
        })
        expect(document.querySelector('div').className).to.be.equal('one two')
    })

    after(function() {
        document.body.innerHTML = ''
    })
}) 

describe('add className', function () {
    this.beforeEach(function() {
        document.body.innerHTML = ''
        const div = document.createElement('div')
        div.setAttribute('class', 'default')
        document.body.appendChild(div)
    })

    it('when arg is string', function() {
        $('div').addClass('selected')
        expect(document.querySelector('div').className).to.be.equal('default selected')
    })

    it('when arg is array', function() {
        $('div').addClass(['one', 'two'])
        expect(document.querySelector('div').className).to.be.equal('default one two')
    })

    it('when the return value of function arg is string', function() {
        $( 'div' ).addClass(function( index ) {
            return `item-${index}`
        })
        expect(document.querySelector('div').className).to.be.equal('default item-0')
    })

    it('when the return value of function arg is array', function() {
        $( 'div' ).addClass(function() {
            return ['one', 'two']
        })
        expect(document.querySelector('div').className).to.be.equal('default one two')
    })

    after(function() {
        document.body.innerHTML = ''
    })
}) 