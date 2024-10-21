import { Actor, CollisionType, Engine, Vector } from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { MobGraphics } from './mob.graphics'
import { Player } from '../player'
import { MainScene } from '../../scenes'

export interface MobActorArgs {
  x: number
  y: number
  player: Player
}

export class MobActor extends Actor {
  private player: Player

  constructor({ x, y, player }: MobActorArgs) {
    super({
      x,
      y,
      collisionType: CollisionType.Passive,
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
    })

    this.graphics.use(MobGraphics.sprite)
    this.graphics.use(MobGraphics.animation)

    this.player = player

    this.onCollisionStart = (_, other) => {
      if (other.owner instanceof Player) {
        if (this.scene instanceof MainScene) {
          this.scene.gameOver()
        }
      }
    }
  }

  update(engine: Engine<any>, delta: number): void {
    super.update(engine, delta)

    const MOVE_SPEED = 0.3

    const deltaX = this.player.pos.x - this.pos.x
    const deltaY = this.player.pos.y - this.pos.y

    const normalizedVector = new Vector(deltaX, deltaY).normalize()

    this.pos.x += normalizedVector.x * MOVE_SPEED
    this.pos.y += normalizedVector.y * MOVE_SPEED
  }
}
