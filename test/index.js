import expect from 'chai'
import _ from 'lodash'
import {
    chunk
} from "../src/array/array.js";

describe('array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]

    it('chunks with s 1 should be equal', () => {
        const array = [1, 2, 3, 4, 5, 6, 7]
        const expected = _.chunk(array)
        const actual = chunk(array)
        expect.expect(actual).to.eql(expected)
    })

    it('chunks by 1 should be equal (explicit size param)', () => {
        const array = [1, 2, 3, 4, 5, 6, 7]
        const size = 1
        const expected = _.chunk(array, size)
        const actual = chunk(array, size)
        expect.expect(actual).to.eql(expected)
    })

    it('chunks by 2 should be equal', () => {
        const array = [1, 2, 3, 4, 5, 6, 7]
        const size = 2
        const expected = _.chunk(array, size)
        const actual = chunk(array, size)
        printExpectedActual(expected, actual)
        expect.expect(actual).to.eql(expected)
    })

    it('chunks by 3 should be equal', () => {
        const array = [1, 2, 3, 4, 5, 6, 7]
        const size = 2
        const expected = _.chunk(array, size)
        const actual = chunk(array, size)
        printExpectedActual(expected, actual)
        expect.expect(actual).to.eql(expected)
    })
});

function printExpectedActual(expected, actual) {
    console.log('expected: ', expected, 'actual: ', actual)
}
