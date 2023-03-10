/**
 * @description 队列 数据结构
 * @author 星光
 */

import { MyArray } from '../Array/MyArray'

export interface QueueInterface<T> {
  size: number
  front: T
  isEmpty: () => boolean
  enqueue: (e: T) => void
  dequeue: () => T
}

export class Queue<T> extends Object implements QueueInterface<T> {
  private array: MyArray<T>

  constructor(capacity?: number) {
    super()
    if (capacity) {
      this.array = new MyArray<T>(capacity)
    } else {
      this.array = new MyArray<T>()
    }
  }

  enqueue(e: T) {
    this.array.addLast(e)
  }

  dequeue() {
    return this.array.removeFirst()
  }

  isEmpty() {
    return this.array.isEmpty()
  }

  get size() {
    return this.array.size
  }

  get front() {
    return this.array.first
  }

  toString(): string {
    let res = ''
    res += 'Queue: front ['
    for (let i = 0; i < this.array.size; i++) {
      res += this.array.get(i)
      if (i !== this.array.size - 1) {
        res += ', '
      }
    }

    res += '] tail'

    return res
  }
}
