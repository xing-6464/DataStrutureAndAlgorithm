/**
 * @description 选择排序算法
 * @author 星光
 */

import ArrayGenerator from '../../util/ArrayGenerator'

class SelectionSort {
  private constructor() {}

  static sort<T>(arr: T[], fn?: (item1: T, item2: T) => number): void {
    let minIndex: number

    for (let i = 0, len = arr.length; i < len; i++) {
      minIndex = i

      for (let j = i; j < len; j++) {
        // 自己实现不可比较的逻辑函数
        if (fn) {
          const res = fn(arr[i], arr[j])
          if (res > 0) {
            minIndex = j
          } else {
            minIndex = i
          }

          continue
        }

        if (arr[minIndex] > arr[j]) {
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

/**
 * 性能测试
 */

function test() {
  const n = 10000
  const arr = ArrayGenerator.generateRandomArray(n, n)
  console.info(arr)
  // console.time('arr sort')
  SelectionSort.sort(arr)
  // console.timeEnd('arr sort')
  console.info(arr)
  // console.info(arr.sort())
}

test()

export default SelectionSort
