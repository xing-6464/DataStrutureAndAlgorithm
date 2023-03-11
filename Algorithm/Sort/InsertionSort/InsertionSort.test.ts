import { InsertionSort } from './InsertionSort'
import { Student } from '../../test/Student'

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

  test('测试回调方式', () => {
    const s1 = new Student('xing', 98)
    const s2 = new Student('guang', 67)
    const s3 = new Student('xingguang', 100)
    const studnets = [s3, s1, s2]

    InsertionSort.sort(studnets, (arr, i) => {
      return arr[i].score - arr[i - 1].score
    })

    expect(studnets).toEqual([s2, s1, s3])
  })
})
