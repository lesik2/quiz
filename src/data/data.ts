export interface ITest{
  question: string,
  variants: string[]
}

export const dataTest: ITest[] = [
  {
    question: 'Сколько вам лет?',
    variants: ['Нужны средства для ребёнка младше 10 лет','Мне меньше 25 лет','От 25 до 35 лет','От 35 до 45 лет','Мне больше 45 лет'],
  },
  {
    question: 'Какой у вас тип кожи?',
    variants: ['Сухая','Нормальна','Комбинированная','Жирная'],
  },
  {
    question: 'Беспокоят ли воспаления на лице?',
    variants: ['Да','Нет','Иногда'],
  },
]
