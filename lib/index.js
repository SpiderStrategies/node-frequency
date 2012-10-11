
module.exports = function (val) {
  var parts = /^(\d+) (milliseconds?|ms|seconds?|minutes?|hours?|days?)$/.exec(val)

  if (!parts) {
    return null
  }
  var digit = ~~parts[1]
  var type = parts[2]

  if (digit === 1 && type.slice(-1) !== 's') { type += 's' }
  if (type === 'ms') { type = 'milliseconds'}

  return new Moment(type, digit)
}

var Moment = function (type, digit) {
  this.type = type
  this.digit = digit
}

Moment.prototype.moment = function () {
  var result = {}
  result[this.type] = this.digit
  return result
}

Moment.prototype.ms = function () {
  switch (this.type) {
    case 'days':
      return this.digit * 86400000
    case 'hours':
      return this.digit * 3600000
    case 'minutes':
      return this.digit * 60000
    case 'seconds':
      return this.digit * 1000
    case 'milliseconds':
      return this.digit
  }
}

Moment.prototype.seconds = function () {
  return this.ms() / 1000
}
