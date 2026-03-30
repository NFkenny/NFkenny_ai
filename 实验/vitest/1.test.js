import {
  expect,
  test
} from 'vitest'
import { sum } from './1.js'

test('sum', () => {
  expect(sum(1, 2)).toBe(3)
})
