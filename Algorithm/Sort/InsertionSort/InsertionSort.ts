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
      let j: number
      p = arr[i]
      for (j = i; j > 0; j--) {
        if (fn) {
          const res = fn(arr, j)
          if (res < 0) {
            InsertionSort.swap(arr, j)
            continue
          }
        }

        if (p > arr[j - 1]) {
          break
        }
        arr[j] = arr[j - 1]
      }

      arr[j] = p
    }
  }

  private static swap<T>(arr: T[], i: number) {
    const mid = arr[i - 1]
    arr[i - 1] = arr[i]
    arr[i] = mid
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
