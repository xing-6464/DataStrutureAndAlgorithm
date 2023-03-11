/**
 * @description 数据结构 数组
 * @author 星光
 */

export class MyArray extends Object {
  private _data: number[]
  private _size: number

  constructor(capacity?: number) {
    super()
    if (!capacity) {
      this._data = new Array(10)
    } else {
      this._data = new Array(capacity)
    }
    this._size = 0
  }

  toString() {
    let res = `MyArray：size = ${this._size}, capacity = ${this._data.length}\n`
    res += '['
    for (let i = 0; i < this._size; i++) {
      res += this._data[i]

      if (i !== this._size - 1) res += ', '
    }
    res += ']'

    return res
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

  get(index: number) {
    if (index < 0 || index >= this._data.length)
      new Error('get failed, index is illegal')
    return this._data[index]
  }

  set(index: number, e: number) {
    if (index < 0 || index >= this._data.length)
      new Error('get failed, index is illegal')
    this._data[index] = e
  }

  get size() {
    return this._size
  }

  get capacity() {
    return this._data.length
  }
}
