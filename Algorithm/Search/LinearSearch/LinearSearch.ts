class LinearSearch {
  private constructor() {}

  static search<T>(data: T[], target: T): number {
    for (let i = 0, len = data.length; i < len; i++) {
      if (data[i] === target) return i
    }

    return -1
  }
}

export default LinearSearch
