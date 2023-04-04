const mapping: { [key: number]: string } = {
  0: "янв",
  1: "февр",
  2: "март",
  3: "апр",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "авг",
  8: "сент",
  9: "окт",
  10: "нояб",
  11: "дек",
}

const getDate = (data: string) => {
  const date = new Date(Number(data))
  const day = date.getDate()
  const month = date.getDate()
  return `${day} ${mapping[month]}`
}

export default getDate
