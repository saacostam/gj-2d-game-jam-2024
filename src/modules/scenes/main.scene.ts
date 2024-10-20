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

export class MainScene extends Scene {
  private roundRobinIndex = Math.floor(
    Math.random() * GAME_CONFIG.NUMBER_OF_AVAILABLE_WORLDS,
  )

  public onInitialize(_engine: Engine<any>): void {
    const worlds: BaseWorld[] = []

    const positions: WorldPosition[] = Object.values(WorldPosition)
    for (let i = 0; i < positions.length; i++) {
      worlds.push(
        this.getNextWorld({
          position: positions[i],
        }),
      )
    }

    worlds.forEach((world) => {
      this.add(world)
    })

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
}
