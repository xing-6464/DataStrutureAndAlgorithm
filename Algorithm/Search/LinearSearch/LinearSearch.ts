class LinearSearch {
  search(data: number[], target: number) {
    for (let i = 0, len = data.length; i < len; i++) {
      if (data[i] === target) return i
    }

    return -1
  }
}

export default LinearSearch
