import { MyArray } from './MyArray'

describe('测试数组类', () => {
  test('测试添加元素', () => {
    const arr = new MyArray<number>(20)
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
    const arr = new MyArray<number>(20)
    for (let i = 0; i < 10; i++) {
      arr.addLast(i)
    }

    expect(arr.size).toBe(10)

    arr.set(0, 10)
    expect(arr.get(0)).toBe(10)
    expect(arr.size).toBe(10)
  })

  test('查询元素', () => {
    const arr = new MyArray<number>(20)
    for (let i = 0; i < 10; i++) {
      arr.addLast(i)
    }

    expect(arr.size).toBe(10)

    expect(arr.find(1)).toBe(1)
    expect(arr.contains(1)).toBeTruthy()
  })

  test('删除元素测试', () => {
    const arr = new MyArray<number>(20)
    for (let i = 0; i < 10; i++) {
      arr.addLast(i)
    }

    expect(arr.size).toBe(10)

    arr.removeFirst()
    expect(arr.getFirst).toBe(1)
    arr.removeLast()
    expect(arr.getLast).toBe(8)

    arr.remove(1)
    expect(arr.get(1)).toBe(3)

    const ret = arr.removeElement(3)
    expect(ret).toBeTruthy()
  })
})
