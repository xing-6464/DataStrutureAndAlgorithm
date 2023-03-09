/**
 * @description 线性查找算法
 * @author 星光
 */

class LinearSearch {
  private constructor() {}

  static search<T>(
    data: T[],
    target: T,
    fn?: (n1: T, n2: T) => boolean
  ): number {
    for (let i = 0, len = data.length; i < len; i++) {
      if (fn) {
        if (fn(data[i], target)) return i
        continue
      }
      if (data[i] === target) return i
    }

    return -1
  }
}

export default LinearSearch
