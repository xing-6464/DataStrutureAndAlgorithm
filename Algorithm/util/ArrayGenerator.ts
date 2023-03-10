class ArrayGenerator {
  private constructor() {}

  static generatorOrderedArray(n: number): number[] {
    const arr: number[] = []
    for (let i = 0; i < n; i++) {
      arr.push(i)
    }

    return arr
  }

  static generateRandomArray(n: number, bound: number): number[] {
    const getRandomInt = (max: number) => {
      return Math.floor(Math.random() * max)
    }

    const arr: number[] = []
    for (let i = 0; i < n; i++) {
      arr.push(getRandomInt(bound))
    }

    return arr
  }
}

export { ArrayGenerator }
