/**
 * @description 实现栈数据结构
 * @author 星光
 */

import { MyArray } from '../Array/MyArray'

interface StackInterface<T> {
  size: number
  isEmpty: () => boolean
  push: (e: T) => void
  pop: () => T
  peek: () => T
}

export class Stack<T> extends Object implements StackInterface<T> {
  private array: MyArray<T>

  constructor(capacity?: number) {
    super()
    if (capacity) {
      this.array = new MyArray<T>(capacity)
    } else {
      this.array = new MyArray<T>()
    }
  }

  push(e: T) {
    this.array.addLast(e)
  }

  pop(): T {
    return this.array.removeLast()
  }

  peek() {
    return this.array.last
  }

  isEmpty() {
    return this.array.isEmpty()
  }

  get capacity() {
    return this.array.capacity
  }

  get size() {
    return this.array.size
  }

  toString(): string {
    let res = ''
    res += 'Stack: ['
    for (let i = 0; i < this.array.size; i++) {
      res += this.array.get(i)
      if (i !== this.array.size - 1) {
        res += ', '
      }
    }

    res += '] top'

    return res
  }
}
