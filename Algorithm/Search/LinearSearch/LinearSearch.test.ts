import LinearSearch from './LinearSearch'

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
})
