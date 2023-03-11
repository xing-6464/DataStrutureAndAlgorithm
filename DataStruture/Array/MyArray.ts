/**
 * @description 数据结构 数组
 * @author 星光
 */

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

  add(index: number, e: number) {
    if (this._size === this._data.length)
      new Error('insert failed, Array is full')

    if (index < 0 || index > this._size)
      new Error('Add failed. Require index >= 0 and index <= size.')

    for (let i = this._size; i > index; i--) {
      this._data[i] = this._data[i - 1]
    }

    this._data[index] = e
    this._size++
  }

  addLast(e: number) {
    this.add(this._size, e)
  }

  addFirst(e: number) {
    this.add(0, e)
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
