import { Actor, CollisionType, Color, Engine, Vector } from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { SpearGraphics } from './spear.graphics'
import { MobActor } from '../mobs'
import { LimitTileActor } from '../tiles'

export interface SpearActorArgs {
  x: number
  y: number
  dir: Vector
}

export class SpearActor extends Actor {
  public dir: Vector

  constructor({ x, y, dir }: SpearActorArgs) {
    super({
      x: x,
      y: y,
      width: WORLD_CONFIG.TILE_SIZE / 4,
      height: WORLD_CONFIG.TILE_SIZE,
      collisionType: CollisionType.Passive,
      color: Color.Red,
    })

    this.dir = dir

    this.graphics.use(SpearGraphics.sprite)

    this.onCollisionStart = (_, other) => {
      if (
        other.owner instanceof MobActor ||
        other.owner instanceof LimitTileActor
      ) {
        this.kill()
      }
    }
  }

  update(engine: Engine<any>, delta: number): void {
    super.update(engine, delta)

    const DELTA_AMOUNT = 0.1

    this.pos.x += this.dir.x * DELTA_AMOUNT * delta
    this.pos.y += this.dir.y * DELTA_AMOUNT * delta

    this.rotation = Math.atan2(this.dir.y, this.dir.x) + Math.PI / 2
  }
}
