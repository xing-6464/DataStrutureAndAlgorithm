import { InsertionSort } from './InsertionSort'

describe('测试插入排序算法', () => {
  test('正常情况', () => {
    const arr = [6, 5, 4, 3, 2, 1]

    InsertionSort.sort(arr)

    expect(arr).toEqual([1, 2, 3, 4, 5, 6])
  })

  test('空数组', () => {
    const arr = []

    InsertionSort.sort(arr)

    expect(arr).toEqual([])
  })
})
