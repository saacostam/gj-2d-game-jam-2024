import { Actor, Engine } from 'excalibur'
import { WORLD_CONFIG } from '../../config'
import { ColorPalette } from '../../colors'

export class LaserActor extends Actor {
  public opacity: number = 0

  constructor() {
    super({
      width: WORLD_CONFIG.WORLD_WIDTH,
      height: WORLD_CONFIG.WORLD_HEIGHT,
      color: ColorPalette.RedAlpha(0),
      z: 10_000,
    })
  }

  update(engine: Engine<any>, delta: number): void {
    super.update(engine, delta)
    this.color = ColorPalette.RedAlpha(this.opacity)
  }
}
