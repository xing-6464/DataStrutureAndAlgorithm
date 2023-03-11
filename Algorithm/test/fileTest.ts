import { ArrayGenerator } from '../util/ArrayGenerator'
import { SortingHelper } from '../util/SortingHelper'

function test() {
  const dataSize = [10000, 100000]

  for (const n of dataSize) {
    let arr = ArrayGenerator.generateRandomArray(n, n)
    let arr2 = Array.from(arr)
    console.info('randomArray：')
    SortingHelper.sortTest('InsertionSort', arr)
    SortingHelper.sortTest('SelectionSort', arr2)

    console.info('------')

    arr = ArrayGenerator.generatorOrderedArray(n)
    arr2 = Array.from(arr)

    console.info('orderArry：')
    SortingHelper.sortTest('InsertionSort', arr)
    SortingHelper.sortTest('SelectionSort', arr2)

    console.info(' ')
  }
}

test()
