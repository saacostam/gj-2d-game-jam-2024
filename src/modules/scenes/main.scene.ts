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
import {
  timelineProgressHtmlElement,
  timelineProgressLabelElement,
} from '../ui'
import { LaserActor } from '../actors/laser'
import { SceneKey } from './types'
import { UrlUtils } from '../url'

export class MainScene extends Scene {
  private _loopTime = 0
  private static RESOURCE_GATHERING_STAGE_TIME = 10_000
  private static TOTAL_LOOP_TIME = 15_000

  private laser = new LaserActor()

  private static POSITIONS: WorldPosition[] = Object.values(WorldPosition)
  private worlds: BaseWorld[] = []

  get loopTime() {
    return this._loopTime
  }

  set loopTime(value: number) {
    this._loopTime = value
    this.handleLoopTimeUpdate()
  }

  private roundRobinIndex = Math.floor(
    Math.random() * GAME_CONFIG.NUMBER_OF_AVAILABLE_WORLDS,
  )

  private getNextToEliminate(): number {
    const nextToEliminate = Math.floor(
      Math.random() * GAME_CONFIG.NUMBER_OF_VISIBLE_WORLDS,
    )
    return nextToEliminate
  }

  private nextToEliminate: number = this.getNextToEliminate()

  public onActivate(): void {
    for (let i = 0; i < MainScene.POSITIONS.length; i++) {
      const world = this.getNextWorld({
        position: MainScene.POSITIONS[i],
      })

      this.worlds.push(world)
      this.add(world)
    }

    this.getWorldLimitTiles().forEach((tile) => this.add(tile))

    this.add(
      new Player({
        x: WORLD_CONFIG.WORLD_WIDTH / 2 + WORLD_CONFIG.TILE_SIZE,
        y: WORLD_CONFIG.WORLD_HEIGHT / 2 + WORLD_CONFIG.TILE_SIZE,
      }),
    )

    this.add(this.laser)
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

  update(engine: Engine<any>, delta: number): void {
    super.update(engine, delta)
    this.loopTime += delta
  }

  private handleLoopTimeUpdate(): void {
    const MAX_OPACITY = 0.8

    const pos =
      this.nextToEliminate === 0
        ? {
            x: WORLD_CONFIG.TILE_SIZE + WORLD_CONFIG.WORLD_WIDTH / 2,
            y: WORLD_CONFIG.TILE_SIZE + WORLD_CONFIG.WORLD_HEIGHT / 2,
          }
        : this.nextToEliminate === 1
          ? {
              x:
                2 * WORLD_CONFIG.TILE_SIZE + (WORLD_CONFIG.WORLD_WIDTH * 3) / 2,
              y: WORLD_CONFIG.TILE_SIZE + WORLD_CONFIG.WORLD_HEIGHT / 2,
            }
          : this.nextToEliminate === 2
            ? {
                x: WORLD_CONFIG.TILE_SIZE + WORLD_CONFIG.WORLD_WIDTH / 2,
                y:
                  2 * WORLD_CONFIG.TILE_SIZE +
                  (WORLD_CONFIG.WORLD_HEIGHT * 3) / 2,
              }
            : {
                x:
                  2 * WORLD_CONFIG.TILE_SIZE +
                  (WORLD_CONFIG.WORLD_WIDTH * 3) / 2,
                y:
                  2 * WORLD_CONFIG.TILE_SIZE +
                  (WORLD_CONFIG.WORLD_HEIGHT * 3) / 2,
              }

    this.laser.pos.x = pos.x
    this.laser.pos.y = pos.y

    const time = this._loopTime

    const stage =
      time < MainScene.RESOURCE_GATHERING_STAGE_TIME ? 'gather' : 'attack'

    let color: string
    let progress: number
    if (stage === 'gather') {
      progress = Math.max(
        0,
        Math.min(time / MainScene.RESOURCE_GATHERING_STAGE_TIME, 1),
      )
      color = 'inherit'
      this.laser.opacity = 0
    } else {
      progress = Math.max(
        0,
        Math.min(
          (time - MainScene.RESOURCE_GATHERING_STAGE_TIME) /
            (MainScene.TOTAL_LOOP_TIME -
              MainScene.RESOURCE_GATHERING_STAGE_TIME),
          1,
        ),
      )
      color = 'red'
      this.laser.opacity = MAX_OPACITY * progress
    }

    timelineProgressLabelElement.innerText =
      stage === 'gather'
        ? 'Gather spears from trees!'
        : 'Attack the enemies and dodge the laser!'
    timelineProgressLabelElement.style.color = color

    timelineProgressHtmlElement.value = Math.max(0, 100 * progress)

    if (time >= MainScene.TOTAL_LOOP_TIME) {
      this.remove(this.worlds[this.nextToEliminate])
      const world = this.getNextWorld({
        position: MainScene.POSITIONS[this.nextToEliminate],
      })

      const isPlayerInDestroyedWorld = (() => {
        const player = this.actors.find((actor) => actor instanceof Player)

        if (player) {
          return (
            pos.x - WORLD_CONFIG.WORLD_WIDTH / 2 < player.pos.x &&
            player.pos.x < pos.x + WORLD_CONFIG.WORLD_WIDTH / 2 &&
            pos.y - WORLD_CONFIG.WORLD_HEIGHT / 2 < player.pos.y &&
            player.pos.y < pos.y + WORLD_CONFIG.WORLD_HEIGHT / 2
          )
        }
      })()

      if (isPlayerInDestroyedWorld) {
        const url = new URL(window.location.toString())
        url.searchParams.set('lost', String(UrlUtils.getLostCount() + 1))
        window.location.search = url.search
      }

      this.worlds[this.nextToEliminate] = world
      this.add(world)

      this._loopTime = this._loopTime % MainScene.TOTAL_LOOP_TIME
      this.nextToEliminate = this.getNextToEliminate()
    }
  }
}
