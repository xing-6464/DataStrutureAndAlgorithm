export class MyArray {
  private _data: number[]
  private _size: number

  constructor(capacity?: number) {
    if (!capacity) {
      this._data = new Array(10)
    } else {
      this._data = new Array(capacity)
    }
    this._size = 0
  }

  isEmpty() {
    return this._size === 0
  }

  get size() {
    return this._size
  }

  get capacity() {
    return this._data.length
  }
}
