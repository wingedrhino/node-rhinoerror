import { suite } from 'uvu'
import { expect } from 'earljs'
import { RhinoError } from '../src/rhinoerror.js'

function testStringCode() {
  const err = new RhinoError('MyError', 'My message')
  expect(err).toBeAnObjectWith({
    name: 'MyError',
    code: 'MyError',
  })
}

function testNumberCode() {
  const err = new RhinoError(500, 'My message')
  expect(err).toBeAnObjectWith({
    name: 'HttpErrorInternalServerError',
    code: 500,
  })
}

const test = suite('RhinoError tests')
test('testStringCode', testStringCode)
test('testNumberCode', testNumberCode)
test.run()