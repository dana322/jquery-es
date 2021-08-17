import {expect} from 'chai'
import $ from '../../src/index.js'

describe('Get the html', function() {
    before(function() {
        document.body.innerHTML = '<div>hello jquery-es</div>'
    })

    it('Get html of body', function() {
        expect($('body').html()).to.be.equal('<div>hello jquery-es</div>')
    })

    it('Get html of div', function() {
        expect($('div').html()).to.be.equal('hello jquery-es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})

describe('Set the html', function() {
    before(function() {
        document.body.innerHTML = '<div></div>'
    })

    it('Set', function() {
        $('div').html('hello jquery-es')
        expect($('div').html()).to.be.equal('hello jquery-es')
    })

    it('Chain set', function() {
        $('div').html('hello').html('jquery-es')
        expect($('div').html()).to.be.equal('jquery-es')
    })

    after(function() {
        document.body.innerHTML = ''
    })
})