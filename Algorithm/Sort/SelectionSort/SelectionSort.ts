/**
 * @description 选择排序算法
 * @author 星光
 */

class SelectionSort {
  private constructor() {}

  static sort(arr: number[]): void {
    let mid: number
    let minIndex: number
    for (let i = 0, len = arr.length; i < len; i++) {
      minIndex = i
      for (let j = i; j < len; j++) {
        if (arr[i] > arr[j]) {
          minIndex = j
        }
      }

      SelectionSort.swap(arr, i, minIndex)
    }
  }

  private static swap(arr: number[], i: number, j: number): void {
    const mid = arr[j]
    arr[j] = arr[i]
    arr[i] = mid
  }
}

export default SelectionSort
