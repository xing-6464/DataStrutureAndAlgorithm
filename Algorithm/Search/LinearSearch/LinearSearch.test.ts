import LinearSearch from './LinearSearch'

test('test LinearSearch', () => {
  const data = [24, 18, 12, 9, 16, 66, 32, 4]
  const ls = new LinearSearch()
  const res = ls.search(data, 16)

  expect(res).toBe(4)
})
