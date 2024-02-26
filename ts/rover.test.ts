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

/**
 * Given : rover is at 0,0 ; facing North and move forward
 * When move forward
 * Then : return 0,1
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "North");
  test('forward', () => {
    rover.moveForward();
    expect(rover.position).toStrictEqual([0,1])
  })
})

/**
 * Given : rover is at 0,0 ; facing South and move forward
 * When move forward
 * Then : return 0,-1
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "South");
  test('forward', () => {
    rover.moveForward();
    expect(rover.position).toStrictEqual([0,-1])
  })
})

/**
 * Given : rover is at 0,0 ; facing East and move forward
 * When move forward
 * Then : return 1,0
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "East");
  test('forward', () => {
    rover.moveForward();
    expect(rover.position).toStrictEqual([1,0])
  })
})

/**
 * Given : rover is at 0,0 ; facing West and move forward
 * When move forward
 * Then : return -1,0
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "West");
  test('forward', () => {
    rover.moveForward();
    expect(rover.position).toStrictEqual([-1,0])
  })
})

/**
 * Given : rover is at 0,0 ; facing North and move backward
 * When move backward
 * Then : return 0,-1
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "North");
  test('backward', () => {
    rover.moveBackward();
    expect(rover.position).toStrictEqual([0,-1])
  })
})

/**
 * Given : rover is at 0,0 ; facing South and move backward
 * When move backward
 * Then : return 0,-1
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "South");
  test('backward', () => {
    rover.moveBackward();
    expect(rover.position).toStrictEqual([0,1])
  })
})

/**
 * Given : rover is at 0,0 ; facing East and move backward
 * When move backward
 * Then : return -1,0
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "East");
  test('backward', () => {
    rover.moveBackward();
    expect(rover.position).toStrictEqual([-1,0])
  })
})

/**
 * Given : rover is at 0,0 ; facing West and move backward
 * When move backward
 * Then : return -1,0
 */

describe('Rover is moving', () => {
  const rover = new Rover([0,0], "West");
  test('backward', () => {
    rover.moveBackward();
    expect(rover.position).toStrictEqual([1,0])
  })
})