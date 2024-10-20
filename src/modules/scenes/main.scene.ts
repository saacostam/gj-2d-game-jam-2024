import { Engine, Scene } from 'excalibur'
import {
  BaseWorld,
  CaveWorld,
  DesertWorld,
  ForestWorld,
  TundraWorld,
  VolcanoWorld,
  WorldPosition,
} from '../worlds'
import { GAME_CONFIG, WORLD_CONFIG } from '../config'
import { Player } from '../actors/player'
import { LimitTileActor, PortalTileActor } from '../actors/tiles'

export class MainScene extends Scene {
  private roundRobinIndex = Math.floor(
    Math.random() * GAME_CONFIG.NUMBER_OF_AVAILABLE_WORLDS,
  )

  public onInitialize(_engine: Engine<any>): void {
    const positions: WorldPosition[] = Object.values(WorldPosition)
    for (let i = 0; i < positions.length; i++) {
      this.add(
        this.getNextWorld({
          position: positions[i],
        }),
      )
    }

    this.getWorldLimitTiles().forEach((tile) => this.add(tile))

    this.add(
      new Player({
        x: WORLD_CONFIG.WORLD_WIDTH / 2 + WORLD_CONFIG.TILE_SIZE,
        y: WORLD_CONFIG.WORLD_HEIGHT / 2 + WORLD_CONFIG.TILE_SIZE,
      }),
    )
  }

  private getNextWorld(args: { position: WorldPosition }): BaseWorld {
    this.roundRobinIndex =
      (this.roundRobinIndex + 1) % GAME_CONFIG.NUMBER_OF_AVAILABLE_WORLDS
    switch (this.roundRobinIndex) {
      case 0:
        return new CaveWorld(args)
      case 1:
        return new DesertWorld(args)
      case 2:
        return new ForestWorld(args)
      case 3:
        return new TundraWorld(args)
      case 4:
        return new VolcanoWorld(args)
      default:
        console.warn('Invalid world index, using forest world')
        return new ForestWorld(args)
    }
  }

  private getWorldLimitTiles(): LimitTileActor[] {
    // TODO: Refactor this complicated mess!

    const limitTileActors: LimitTileActor[] = []

    const BASE_X = WORLD_CONFIG.TILE_SIZE / 2
    const BASE_Y = WORLD_CONFIG.TILE_SIZE / 2

    for (let x = 0; x < 2 * WORLD_CONFIG.HORIZONTAL_TILES + 3; x++) {
      limitTileActors.push(
        new LimitTileActor({
          x: BASE_X + x * WORLD_CONFIG.TILE_SIZE,
          y:
            BASE_Y +
            0 * (WORLD_CONFIG.VERTICAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
        }),
      )

      if (
        !(
          WORLD_CONFIG.HORIZONTAL_TILES / 2 <= x &&
          x <= WORLD_CONFIG.HORIZONTAL_TILES / 2 + 1
        ) &&
        !(
          (WORLD_CONFIG.HORIZONTAL_TILES * 3) / 2 + 1 <= x &&
          x <= (WORLD_CONFIG.HORIZONTAL_TILES * 3) / 2 + 2
        )
      ) {
        limitTileActors.push(
          new LimitTileActor({
            x: BASE_X + x * WORLD_CONFIG.TILE_SIZE,
            y:
              BASE_Y +
              1 * (WORLD_CONFIG.VERTICAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
          }),
        )
      } else {
        limitTileActors.push(
          new PortalTileActor({
            x: BASE_X + x * WORLD_CONFIG.TILE_SIZE,
            y:
              BASE_Y +
              1 * (WORLD_CONFIG.VERTICAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
          }),
        )
      }

      limitTileActors.push(
        new LimitTileActor({
          x: BASE_X + x * WORLD_CONFIG.TILE_SIZE,
          y:
            BASE_Y +
            2 * (WORLD_CONFIG.VERTICAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
        }),
      )
    }

    for (let y = 0; y < 2 * WORLD_CONFIG.VERTICAL_TILES + 3; y++) {
      limitTileActors.push(
        new LimitTileActor({
          x:
            BASE_X +
            0 * (WORLD_CONFIG.HORIZONTAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
          y: BASE_Y + y * WORLD_CONFIG.TILE_SIZE,
        }),
      )

      if (
        !(
          WORLD_CONFIG.VERTICAL_TILES / 2 <= y &&
          y <= WORLD_CONFIG.VERTICAL_TILES / 2 + 1
        ) &&
        !(
          (WORLD_CONFIG.VERTICAL_TILES * 3) / 2 + 1 <= y &&
          y <= (WORLD_CONFIG.VERTICAL_TILES * 3) / 2 + 2
        )
      ) {
        limitTileActors.push(
          new LimitTileActor({
            x:
              BASE_X +
              1 * (WORLD_CONFIG.HORIZONTAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
            y: BASE_Y + y * WORLD_CONFIG.TILE_SIZE,
          }),
        )
      } else {
        limitTileActors.push(
          new PortalTileActor({
            x:
              BASE_X +
              1 * (WORLD_CONFIG.HORIZONTAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
            y: BASE_Y + y * WORLD_CONFIG.TILE_SIZE,
          }),
        )
      }

      limitTileActors.push(
        new LimitTileActor({
          x:
            BASE_X +
            2 * (WORLD_CONFIG.HORIZONTAL_TILES + 1) * WORLD_CONFIG.TILE_SIZE,
          y: BASE_Y + y * WORLD_CONFIG.TILE_SIZE,
        }),
      )
    }

    return limitTileActors
  }
}
