import { Stack } from './Stack'

describe('测试 栈数据结构', () => {
  it('测试入栈', () => {
    const stack = new Stack<number>()
    for (let i = 0; i < 5; i++) {
      stack.push(i)
    }

    expect(stack.size).toBe(5)
    expect(stack.peek()).toBe(4)
  })

  it('测试出栈', () => {
    const stack = new Stack<number>()
    for (let i = 0; i < 5; i++) {
      stack.push(i)
    }

    const res = stack.pop()
    expect(res).toBe(4)
    expect(stack.size).toBe(4)
    expect(stack.peek()).toBe(3)
  })

  it('空栈', () => {
    const stack = new Stack<number>()

    expect(stack.isEmpty()).toBeTruthy()
  })
})
