module.exports = (outDate, days) => {
  return new Date().setTime(outDate.getTime() + (days * 24 * 60 * 60 * 1000))
}
