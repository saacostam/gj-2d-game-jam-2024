import { WorldType } from '../../../worlds'
import { BaseResourceActor, BaseResourceActorArgs } from '../base'
import { TreeResourceGraphics } from './tree-resource.graphics'

export interface TreeResourceActorArgs extends BaseResourceActorArgs {
  worldType: WorldType
}

export class TreeResourceActor extends BaseResourceActor {
  public static TOTAL_AMOUNT = 8

  constructor({ x, y, worldType }: TreeResourceActorArgs) {
    let treeGraphicsRow: number
    switch (worldType) {
      case WorldType.FOREST:
        treeGraphicsRow = 0
        break
      case WorldType.DESERT:
        treeGraphicsRow = 1
        break
      case WorldType.VOLCANO:
        treeGraphicsRow = 2
        break
      case WorldType.TUNDRA:
        treeGraphicsRow = 3
        break
      case WorldType.CAVE:
        treeGraphicsRow = 4
        break
      default:
        console.warn('Invalid world type on tree resource actor constructor')
        treeGraphicsRow = 0
        break
    }

    super({
      x,
      y,
      amount: TreeResourceActor.TOTAL_AMOUNT,
      resourceGraphics: TreeResourceGraphics(treeGraphicsRow),
    })

    this.graphics.use(this.resourceGraphics.sprite)
    this.graphics.use(this.resourceGraphics.animations.full)
  }
}
