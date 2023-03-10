/**
 * @description jest 测试选择排序算法
 * @author 星光
 */

import Student from '../../test/Student'
import SelectionSort from './SelectionSort'

describe('测试选择排序算法类', () => {
  test('数字排序', () => {
    const arr = [9, 4, 3, 5, 7, 2]
    SelectionSort.sort(arr)

    expect(arr).toEqual([2, 3, 4, 5, 7, 9])
  })

  test('测试回调方式', () => {
    const s1 = new Student('xing', 98)
    const s2 = new Student('guang', 67)
    const s3 = new Student('xingguang', 100)
    const studnet = [s3, s1, s2]

    SelectionSort.sort(studnet, (arr, i1, i2) => {
      return arr[i1].score - arr[i2].score
    })

    expect(studnet).toEqual([s2, s1, s3])
  })
})
