interface QueueInterface<T> {
  size: number
  isEmpty: () => boolean
  enqueue: (e: T) => void
  dequeue: () => T
  getFront: () => T
}

export class LeepQueue<T> implements QueueInterface<T> {
  private data: T[]
  private front: number
  private tail: number
  private _size: number

  constructor(capacity: number = 10) {
    this.data = new Array<T>(capacity + 1)
    this.front = 0
    this.tail = 0
    this._size = 0
  }

  getCapacity(): number {
    return this.data.length - 1
  }

  isEmpty(): boolean {
    return this.front === this.tail
  }

  get size() {
    return this._size
  }
}
