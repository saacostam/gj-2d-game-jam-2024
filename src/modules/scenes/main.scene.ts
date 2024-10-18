import { Engine, Scene } from 'excalibur'
import { BaseWorld, ForestWorld, WorldPosition } from '../worlds'

export class MainScene extends Scene {
  public onInitialize(_engine: Engine<any>): void {
    const worlds: BaseWorld[] = [
      new ForestWorld({
        position: WorldPosition.TOP_LEFT,
      }),
      new ForestWorld({
        position: WorldPosition.TOP_RIGHT,
      }),
      new ForestWorld({
        position: WorldPosition.BOTTOM_LEFT,
      }),
      new ForestWorld({
        position: WorldPosition.BOTTOM_RIGHT,
      }),
    ]

    worlds.forEach((world) => {
      this.add(world)
    })
  }
}
