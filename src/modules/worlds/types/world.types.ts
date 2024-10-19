import { Actor } from 'excalibur'

export enum WorldPosition {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export enum WorldType {
  FOREST = 'forest',
  DESERT = 'desert',
  CAVE = 'cave',
  VOLCANO = 'volcano',
  TUNDRA = 'tundra',
}

export interface WorldSeed {
  type: WorldType
  position: WorldPosition
}

export interface WorldState {
  type: WorldType
  actors: Actor[]
}
