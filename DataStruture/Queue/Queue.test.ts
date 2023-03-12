import { Queue } from './Queue'

describe('测试 队列 数据结构', () => {
  it('空队列', () => {
    const queue = new Queue()

    expect(queue.isEmpty()).toBeTruthy()
  })

  it('入队', () => {
    const queue = new Queue<number>()

    expect(queue.isEmpty()).toBeTruthy()
    queue.enqueue(1)

    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.size).toBe(1)
    expect(queue.front).toBe(1)
  })

  it('出队', () => {
    const queue = new Queue<number>()
    for (let i = 0; i < 5; i++) {
      queue.enqueue(i)
    }

    const res = queue.dequeue()
    expect(res).toBe(0)
    expect(queue.front).toBe(1)
    expect(queue.size).toBe(4)
  })
})
