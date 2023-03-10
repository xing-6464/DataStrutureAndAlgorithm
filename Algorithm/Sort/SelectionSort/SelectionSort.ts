/**
 * @description 选择排序算法
 * @author 星光
 */

class SelectionSort {
  private constructor() {}

  static sort<T>(arr: T[], fn?: (item1: T, item2: T) => number): void {
    let minIndex: number
    for (let i = 0, len = arr.length; i < len; i++) {
      minIndex = i
      for (let j = i; j < len; j++) {
        // 自己实现不可比较的逻辑函数
        if (fn) {
          minIndex = fn(arr[i], arr[j])
          continue
        }

        if (arr[i] > arr[j]) {
          minIndex = j
        }
      }

      SelectionSort.swap(arr, i, minIndex)
    }
  }

  private static swap<T>(arr: T[], i: number, j: number): void {
    const mid = arr[j]
    arr[j] = arr[i]
    arr[i] = mid
  }
}

export default SelectionSort
