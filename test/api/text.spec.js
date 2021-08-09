import {expect} from 'chai'
import $ from '../../src/index.js'

describe('Get the text', function() {
    before(function() {
        document.body.innerHTML = '<div>hello jquery-es</div>'
    })
    it('Get text of body', function() {
        expect($('body').text()).to.be.equal('hello jquery-es')
    })
})

describe('Set the text', function() {
    before(function() {
        document.body.innerHTML = '<div></div>'
    })
    it('Set', function() {
        $('div').text('hello jquery-es')
        expect($('div').text()).to.be.equal('hello jquery-es')
    })

    it('Chain set', function() {
        $('div').text('hello').text('jquery-es')
        expect($('div').text()).to.be.equal('jquery-es')
    })
})