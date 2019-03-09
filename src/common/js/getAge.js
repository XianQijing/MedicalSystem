function getAge (year, month, date) {
  const YEAR = new Date().getFullYear()
  const MONTH = new Date().getMonth() + 1
  const DATE = new Date().getDate()

  if (month.indexOf('0') === 0) {
    month = month.substr(1, 1)
  }
  if (date.indexOf('0') === 0) {
    date = month.substr(1, 1)
  }

  month = Number(month)
  let age = YEAR - year

  if (MONTH < month) {
    age = age - 1
  } else if (MONTH === month) {
    if (DATE < date) {
      age = age - 1
    }
  }
  return age
}

export default getAge
