import { describe, expect, test } from '@jest/globals'
import Rover from './Rover'
/**
 * Given : rover is at 0,0 and facing North
 * When asking for position
 * Then : return 0,0
 * 
 * When asking for orientation
 * Then : return North
 */

describe('Rover not moving', () => {
  const rover = new Rover([0,0], "North");
  test('has a position', () => {
    expect(rover.position).toStrictEqual([0,0])
  }),
  test('has an orientation', () => {
    expect(rover.orientation).toStrictEqual("North")
  })
})