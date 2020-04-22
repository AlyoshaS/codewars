const calculateYears = (principal, interest, tax, desired) => {
  let value = principal
  let year = 0

  for (let i = 0; value <= desired; i++ ) {
    const percentage = value * interest
    const taxToPay = percentage * tax

    value += percentage - taxToPay
    year = i + 1
  }

  return principal === desired ? 0 : year
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)) // 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)) // 14
console.log(calculateYears(1000, 0.05, 0.18, 1000)) // 0
