class ArrayGenerator {
  private constructor() {}

  static generatorOrderedArray(n: number): number[] {
    const arr: number[] = []
    for (let i = 0; i < n; i++) {
      arr.push(i)
    }

    return arr
  }
}

export default ArrayGenerator
