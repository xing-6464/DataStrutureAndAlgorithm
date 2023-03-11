import { MyArray } from './MyArray'

describe('测试数组类', () => {
  test('测试添加元素', () => {
    const arr = new MyArray(20)
    for (let i = 0; i < 10; i++) {
      arr.addLast(i)
    }
    arr.addFirst(100)
    expect(arr.get(0)).toBe(100)
    expect(arr.size).toBe(11)

    arr.addLast(100)
    expect(arr.get(arr.size - 1)).toBe(100)
    expect(arr.size).toBe(12)

    arr.add(5, 100)
    expect(arr.get(5)).toBe(100)
    expect(arr.size).toBe(13)
  })

  test('修改元素测试', () => {
    const arr = new MyArray(20)
    for (let i = 0; i < 10; i++) {
      arr.addLast(i)
    }

    expect(arr.size).toBe(10)

    arr.set(0, 10)
    expect(arr.get(0)).toBe(10)
    expect(arr.size).toBe(10)
  })
})
