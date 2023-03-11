/**
 * @description 插入排序算法
 * @author 星光
 */

import { ArrayGenerator } from '../../util/ArrayGenerator'
import { SortingHelper } from '../../util/SortingHelper'

export class InsertionSort {
  private constructor() {}

  static sort<T>(arr: T[], fn?: (arr: T[], index: number) => number) {
    if (arr.length === 0) return

    let p: T
    for (let i = 0, len = arr.length; i < len; i++) {
      p = arr[i]
      for (let j = i; j > 0; j--) {
        if (fn) {
          const res = fn(arr, j)
          if (res <= 0) {
            arr[j] = arr[j - 1]
          } else {
            arr[j - 1] = p
          }
          continue
        }

        if (arr[j - 1] > arr[j]) {
          arr[j] = arr[j - 1]
        }
        arr[j - 1] = p
      }
    }
  }
}

/**
 * 性能测试
 */

// function test() {
//   const dataSize = [10000, 100000]

//   for (const n of dataSize) {
//     const arr = ArrayGenerator.generateRandomArray(n, n)
//     SortingHelper.sortTest('InsertionSort', arr)
//   }
// }

// test()
