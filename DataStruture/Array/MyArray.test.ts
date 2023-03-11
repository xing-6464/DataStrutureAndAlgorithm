import { MyArray } from './MyArray'

describe('测试数组类', () => {
  test('测试添加元素', () => {
    const arr = new MyArray(20)
    for (let i = 0; i < 10; i++) {
      arr.addLast(i)
    }

    expect(arr.data).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(arr.size).toBe(10)

    arr.addFirst(100)
    expect(arr.data[0]).toBe(100)
    expect(arr.size).toBe(11)

    arr.addLast(100)
    expect(arr.data[arr.size - 1]).toBe(100)
    expect(arr.size).toBe(12)

    arr.add(5, 100)
    expect(arr.data[5]).toBe(100)
    expect(arr.size).toBe(13)
  })
})
