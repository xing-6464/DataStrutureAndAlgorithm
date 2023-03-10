import { SelectionSort } from '../Sort/SelectionSort/SelectionSort'

class SortingHelper {
  private constructor() {}

  static isSorted<T>(arr: T[], fn?: (i1: T, i2: T) => number) {
    for (let i = 1, len = arr.length; i < len; i++) {
      if (fn) {
        const res = fn(arr[i - 1], arr[i])
        if (res < 0) return false
        continue
      }
      if (arr[i - 1] > arr[i]) return false
    }

    return true
  }

  static sortTest<T>(sortName: string, arr: T[]) {
    const startTime = Date.now()
    if (sortName === 'SelectionSort') {
      SelectionSort.sort(arr)
    }
    const endTime = Date.now()

    const time = (endTime - startTime) / 1000
    if (!SortingHelper.isSorted(arr)) {
      console.error(`${sortName} failed`)
    }
    console.info(`${sortName}, n = ${arr.length} : ${time} s`)
  }
}

export { SortingHelper }
