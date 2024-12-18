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
import { BaseResourceActor, TreeResourceActor } from '../resources'
import { woodCounterHtmlElement } from '../../ui'
import { SpearActor } from '../spear'

export interface PlayerArgs {
  x: number
  y: number
}

export class Player extends Actor {
  public lookingDirection: OrthogonalDirection = OrthogonalDirection.DOWN
  private _wood: number = 0
  private availableResources: BaseResourceActor[] = []

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

    this.onCollisionStart = (_, other) => {
      if (other.owner instanceof TreeResourceActor) {
        this.availableResources.push(other.owner)
      }
    }

    this.onCollisionEnd = (_, other) => {
      if (other.owner instanceof TreeResourceActor) {
        this.availableResources = this.availableResources.filter(
          (resource) => resource !== other.owner,
        )
      }
    }

    this.wood = 0
  }

  onInitialize(engine: Engine<any>): void {
    super.onInitialize(engine)

    engine.input.pointers.primary.on('down', (e) => {
      if (this.wood <= 0) return

      const dir = new Vector(
        e.coordinates.worldPos.x - this.pos.x,
        e.coordinates.worldPos.y - this.pos.y,
      ).normalize()

      this.scene?.add(
        new SpearActor({
          x: this.pos.x,
          y: this.pos.y,
          dir: dir,
        }),
      )

      this.wood--
    })
  }

  public get wood(): number {
    return this._wood
  }

  public set wood(value: number) {
    this._wood = value

    woodCounterHtmlElement.innerText = value.toString()
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

    if (input.keyboard.wasPressed(Keys.Space)) {
      this.availableResources.forEach((resource) => {
        resource.amount--
        this.wood++
      })
    }

    this.z = this.pos.y
  }
}
