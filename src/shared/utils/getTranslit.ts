interface IConvertor {
  [key: string]: string
}

const converter: IConvertor = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ь: "",
  ы: "y",
  ъ: "",
  э: "e",
  ю: "yu",
  я: "ya",
  " ": "_",
}

const getTranslit = (text: string): string => {
  let result = ""
  const textLower = text.toLowerCase()
  for (const symbol of textLower) {
    if (/[а-я]/i.test(symbol)) {
      result += converter[symbol]
    } else {
      result += symbol
    }
  }
  return result
}

export default getTranslit
