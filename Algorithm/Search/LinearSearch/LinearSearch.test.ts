import LinearSearch from './LinearSearch'
import Student from '../../test/Student'

const setup = (i: number) => {
  const data = [24, 18, 12, 9, 16, 66, 32, 4]
  const res = LinearSearch.search(data, i)

  return res
}

describe('测试 线性查找算法', () => {
  test('能找到item', () => {
    const res = setup(16)

    expect(res).toBe(4)
  })

  test('找不到item', () => {
    const res = setup(5)

    expect(res).toBe(-1)
  })

  test('测试传入回调方式', () => {
    const Student1 = new Student('xing')
    const Student2 = new Student('guang')

    const arr = [Student1, Student2]

    const target = new Student('guang')
    const res = LinearSearch.search(arr, target, (n1, n2) => {
      if (n1.name === n2.name) return true

      return false
    })

    expect(res).toBe(1)
  })
})
