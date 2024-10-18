import { Actor, Engine } from 'excalibur'
import { WorldPosition, WorldSeed, WorldState } from './types'
import { WORLD_CONFIG } from '../config'
import { BaseTileActorFactory } from '../actors/tiles'

export interface BaseWorldParams {
  worldSeed: WorldSeed
  tileActorFactory: BaseTileActorFactory
}

export class BaseWorld extends Actor {
  worldSeed: WorldSeed
  tileActorFactory: BaseTileActorFactory

  constructor({ worldSeed, tileActorFactory }: BaseWorldParams) {
    super()
    this.worldSeed = worldSeed
    this.tileActorFactory = tileActorFactory
  }

  onInitialize(_engine: Engine<any>): void {
    const worldState = this.generateWorldState(this.worldSeed)

    worldState.actors.forEach((actor) => {
      this.addChild(actor)
    })
  }

  private generateWorldState({ type, position }: WorldSeed): WorldState {
    const { x: BASE_X, y: BASE_Y } =
      this.getWorldBaseCoordinatesBasedOnPosition({
        position: position,
      })

    const tileActors = this.generateTileActors({
      baseX: BASE_X,
      baseY: BASE_Y,
    })

    return {
      type: type,
      actors: [...tileActors],
    }
  }

  private getWorldBaseCoordinatesBasedOnPosition(args: {
    position: WorldPosition
  }): {
    x: number
    y: number
  } {
    const { position } = args

    const BASE_X =
      (position === WorldPosition.TOP_LEFT ||
      position === WorldPosition.BOTTOM_LEFT
        ? 0
        : WORLD_CONFIG.WORLD_WIDTH + WORLD_CONFIG.TILE_SIZE) +
      WORLD_CONFIG.TILE_SIZE

    const BASE_Y =
      (position === WorldPosition.TOP_LEFT ||
      position === WorldPosition.TOP_RIGHT
        ? 0
        : WORLD_CONFIG.WORLD_HEIGHT + WORLD_CONFIG.TILE_SIZE) +
      WORLD_CONFIG.TILE_SIZE

    return {
      x: BASE_X,
      y: BASE_Y,
    }
  }

  private generateTileActors(args: { baseX: number; baseY: number }): Actor[] {
    const { baseX, baseY } = args

    const tileActors: Actor[] = []
    for (let x = 0; x < WORLD_CONFIG.HORIZONTAL_TILES; x++) {
      for (let y = 0; y < WORLD_CONFIG.VERTICAL_TILES; y++) {
        const tileActor = this.tileActorFactory.createTileActor({
          x: baseX + x * WORLD_CONFIG.TILE_SIZE,
          y: baseY + y * WORLD_CONFIG.TILE_SIZE,
        })

        tileActors.push(tileActor)
      }
    }

    return tileActors
  }
}
