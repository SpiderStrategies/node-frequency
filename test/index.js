var parser = require('../')
  , assert = require('assert')

describe('Frequency', function () {

  it('returns null', function () {
    assert(!parser('blah'))
    assert(!parser('two days'))
    assert(!parser('four minutes'))
    assert(!parser('1 day 19 minutes'))
  })

  it('milliseconds', function () {
    var ms = parser('4500 milliseconds')

    assert.deepEqual(ms.moment(), {milliseconds: 4500})
    assert.equal(ms.ms(), 4500)
    assert.equal(ms.seconds(), 4.5)

    var onems = parser('1 ms')
    assert.deepEqual(onems.moment(), {milliseconds: 1})
  })

  it('seconds', function () {
    var tens = parser('10 seconds')
    assert.deepEqual(tens.moment(), {seconds: 10})
    assert.equal(tens.ms(), 10 * 1000)
    assert.equal(tens.seconds(), 10)

    var one = parser('1 second')
    assert.deepEqual(one.moment(), { seconds: 1 })
    assert.equal(one.ms(), 1000)
    assert.equal(one.seconds(), 1)
  })

  it('minutes', function () {
    var threefour = parser('34 minutes')
    assert.deepEqual(threefour.moment(), { minutes: 34 })
    assert.equal(threefour.ms(), 34 * 60 * 1000)
    assert.equal(threefour.seconds(), 34 * 60)

    var one = parser('1 minute')
    assert.deepEqual(one.moment(), { minutes: 1 })
    assert.equal(one.ms(), 60 * 1000)
    assert.equal(one.seconds(), 60)
  })

  it('hours', function () {
    var four = parser('4 hours')
    assert.deepEqual(four.moment(), { hours: 4 })
    assert.equal(four.ms(), 4 * 60 * 60 * 1000)
    assert.equal(four.seconds(), 4 * 60 * 60)

    var single = parser('1 hour')
    assert.deepEqual(single.moment(), {hours: 1})
  })

  it('days', function () {
    var two = parser('2 days')
    assert.deepEqual(two.moment(), { days: 2 })
    assert.equal(two.ms(), 2 * 24 * 60 * 60 * 1000)
    assert.equal(two.seconds(), 2 * 24 * 60 * 60)
  })

})
