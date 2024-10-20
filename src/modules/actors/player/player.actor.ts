import {
  Actor,
  CollisionType,
  Color,
  Engine,
  Keys,
  Shape,
  Vector,
} from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { PlayerGraphics } from './player.graphics'
import { OrthogonalDirection } from '../../physics'

export interface PlayerArgs {
  x: number
  y: number
}

export class Player extends Actor {
  public lookingDirection: OrthogonalDirection = OrthogonalDirection.DOWN

  constructor({ x, y }: PlayerArgs) {
    super({
      x: x,
      y: y,
      z: 20,
      width: (WORLD_CONFIG.TILE_SIZE * 3) / 4,
      height: (WORLD_CONFIG.TILE_SIZE * 3) / 4,
      color: Color.Rose,
      collisionType: CollisionType.Active,
      collider: Shape.Box(
        WORLD_CONFIG.TILE_SIZE / 2,
        WORLD_CONFIG.TILE_SIZE / 4,
      ),
      anchor: new Vector(0.5, 0.875),
    })

    this.graphics.use(PlayerGraphics.sprite)
    this.graphics.use(PlayerGraphics.animations.idleDown)
  }

  public update(engine: Engine, delta: number): void {
    super.update(engine, delta)

    const DELTA = delta * WORLD_CONFIG.TILE_SIZE * 0.005

    const { input } = engine

    if (input.keyboard.isHeld(Keys.W) || input.keyboard.isHeld(Keys.Up)) {
      this.lookingDirection = OrthogonalDirection.UP
      this.graphics.use(PlayerGraphics.animations.walkingUp)
      this.pos.y -= DELTA
    } else if (
      input.keyboard.isHeld(Keys.S) ||
      input.keyboard.isHeld(Keys.Down)
    ) {
      this.lookingDirection = OrthogonalDirection.DOWN
      this.graphics.use(PlayerGraphics.animations.walkingDown)
      this.pos.y += DELTA
    } else if (
      input.keyboard.isHeld(Keys.A) ||
      input.keyboard.isHeld(Keys.Left)
    ) {
      this.lookingDirection = OrthogonalDirection.LEFT
      this.graphics.use(PlayerGraphics.animations.walkingSides)
      this.pos.x -= DELTA
    } else if (
      input.keyboard.isHeld(Keys.D) ||
      input.keyboard.isHeld(Keys.Right)
    ) {
      this.lookingDirection = OrthogonalDirection.RIGHT
      this.graphics.use(PlayerGraphics.animations.walkingSides)
      this.pos.x += DELTA
    } else {
      switch (this.lookingDirection) {
        case OrthogonalDirection.UP:
          this.graphics.use(PlayerGraphics.animations.idleUp)
          break
        case OrthogonalDirection.DOWN:
          this.graphics.use(PlayerGraphics.animations.idleDown)
          break
        case OrthogonalDirection.LEFT:
        case OrthogonalDirection.RIGHT:
          this.graphics.use(PlayerGraphics.animations.idleSides)
          break
        default:
          this.graphics.use(PlayerGraphics.animations.idleDown)
          break
      }
    }

    this.z = this.pos.y;
  }
}
