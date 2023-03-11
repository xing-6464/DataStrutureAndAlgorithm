import { MyArray } from '../Array/MyArray'

function test() {
  const arr = new MyArray(10)
  for (let i = 0; i < 10; i++) {
    arr.addLast(i)
  }

  console.info(arr.toString())
  arr.add(1, 100)
  console.info(arr.toString())
  arr.addFirst(1000)
  console.info(arr.toString())
}

test()
