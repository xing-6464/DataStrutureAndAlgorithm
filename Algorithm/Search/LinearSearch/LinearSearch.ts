/**
 * @description 线性查找算法
 * @author 星光
 */

import ArrayGenerator from '../../util/ArrayGenerator'

class LinearSearch {
  private constructor() {}

  static search<T>(
    data: T[],
    target: T,
    fn?: (n1: T, n2: T) => boolean
  ): number {
    for (let i = 0, len = data.length; i < len; i++) {
      // 自己实现相等类型函数
      if (fn) {
        if (fn(data[i], target)) return i
        continue
      }

      if (data[i] === target) return i
    }

    return -1
  }
}

/**
 * 性能测试
 */

function test() {
  const dataSize = [1000000, 10000000]
  for (const n of dataSize) {
    const data = ArrayGenerator.generatorOrderedArray(n)

    console.time(`${n} test-linearSearch`)
    for (let i = 0; i < 100; i++) {
      LinearSearch.search(data, n)
    }
    console.timeEnd(`${n} test-linearSearch`)
  }
}

test()

export default LinearSearch
