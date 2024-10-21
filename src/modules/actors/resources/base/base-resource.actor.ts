import {
  Actor,
  Collider,
  CollisionType,
  Color,
  Engine,
  Vector,
} from 'excalibur'
import { WORLD_CONFIG } from '../../../config'
import { BaseResourceGraphics } from './base-resource.graphics'

export interface BaseResourceActorArgs {
  x: number
  y: number
  amount: number
  resourceGraphics: BaseResourceGraphics
  collisionType?: CollisionType
  collider?: Collider
  anchor?: Vector
}

export class BaseResourceActor extends Actor {
  public totalAmount: number
  public amount: number

  public resourceGraphics: BaseResourceGraphics

  constructor({
    x,
    y,
    amount,
    resourceGraphics,
    collisionType,
    collider,
    anchor,
  }: BaseResourceActorArgs) {
    super({
      x: x,
      y: y,
      z: y,
      width: WORLD_CONFIG.TILE_SIZE,
      height: WORLD_CONFIG.TILE_SIZE,
      color: Color.Green,
      collisionType: collisionType,
      collider: collider,
      anchor: anchor,
    })

    this.amount = amount
    this.totalAmount = amount
    this.resourceGraphics = resourceGraphics

    this.graphics.use(this.resourceGraphics.sprite)
    this.graphics.use(this.resourceGraphics.animations.full)
  }

  update(engine: Engine<any>, delta: number): void {
    super.update(engine, delta)
    if (this.amount <= 0) return this.kill()

    const prop = this.amount / this.totalAmount

    if (0.75 < prop) {
      this.graphics.use(this.resourceGraphics.animations.full)
    } else if (0.5 < prop) {
      this.graphics.use(this.resourceGraphics.animations.threeQuarters)
    } else if (0.25 < prop) {
      this.graphics.use(this.resourceGraphics.animations.half)
    } else {
      this.graphics.use(this.resourceGraphics.animations.quarter)
    }
  }
}
