import { MyArray } from '../Array/MyArray'
import { Student } from '../../Algorithm/test/Student'

function test() {
  const arr = new MyArray<Student>()

  arr.addLast(new Student('Alice', 100))
  arr.addLast(new Student('Bob', 66))
  arr.addLast(new Student('Charlie', 88))

  console.info(arr.toString())
}

test()
