import { Queue } from './Queue'
/**
 * @description 循环队列
 * @author 星光
 */

interface LoopQueueInterface<T> {
  size: number
  isEmpty: () => boolean
  enqueue: (e: T) => void
  dequeue: () => T
  getFront: () => T
}

export class LoopQueue<T> extends Object implements LoopQueueInterface<T> {
  private data: T[]
  private front: number
  private tail: number
  private _size: number

  constructor(capacity: number = 10) {
    super()
    this.data = new Array<T>(capacity + 1)
    this.front = 0
    this.tail = 0
    this._size = 0
  }

  enqueue(e: T): void {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.capacity * 2)
    }

    this.data[this.tail] = e
    this.tail = (this.tail + 1) % this.data.length
    this._size++
  }

  dequeue(): T {
    if (this.isEmpty()) {
      new Error('Cannot dequeue from an empty queue.')
    }

    const ret = this.data[this.front]
    this.front = (this.front + 1) % this.data.length
    this._size--

    if (this._size === this.capacity / 4 && this.capacity / 2 !== 0) {
      this.resize(Math.floor(this.capacity / 2))
    }
    return ret
  }

  isEmpty(): boolean {
    return this.front === this.tail
  }

  getFront() {
    if (this.isEmpty()) {
      new Error('Queue is empty')
    }

    return this.data[this.front]
  }

  get capacity() {
    return this.data.length - 1
  }

  get size() {
    return this._size
  }

  private resize(newCapacity: number): void {
    const newData = new Array<T>(newCapacity + 1)

    for (let i = 0; i < this._size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length]
    }

    this.data = newData

    this.front = 0
    this.tail = this._size
  }

  toString() {
    let res = ''
    res += `Queue: size = ${this.size}, capacity = ${this.capacity}\n`
    res += 'front ['
    for (let i = 0; i !== this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i]
      if ((i + 1) % this.data.length !== this.tail) {
        res += ', '
      }
    }

    res += '] tail'
    return res
  }
}
