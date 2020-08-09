const dayjs = require('dayjs')

function getDateNameOfToday() {
  return dayjs().format('dddd')
}

module.exports = { getDateNameOfToday }
