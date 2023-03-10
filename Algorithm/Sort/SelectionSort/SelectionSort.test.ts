import SelectionSort from './SelectionSort'

describe('测试选择排序算法类', () => {
  it('数字排序', () => {
    const arr = [9, 4, 3, 5, 7, 2]
    SelectionSort.sort(arr)

    expect(arr).toEqual([2, 3, 4, 5, 7, 9])
  })
})
