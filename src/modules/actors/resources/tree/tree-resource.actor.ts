import { WorldType } from '../../../worlds'
import { BaseResourceActor, BaseResourceActorArgs } from '../base'
import { TreeResourceGraphics } from './tree-resource.graphics'

export interface TreeResourceActorArgs extends BaseResourceActorArgs {
  worldType: WorldType
}

export class TreeResourceActor extends BaseResourceActor {
  private treeResouceGraphics: ReturnType<typeof TreeResourceGraphics>

  constructor({ x, y, worldType }: TreeResourceActorArgs) {
    super({
      x,
      y,
    })

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

    this.treeResouceGraphics = TreeResourceGraphics(treeGraphicsRow)
    this.graphics.use(this.treeResouceGraphics.sprite)
    this.graphics.use(this.treeResouceGraphics.animations.full)
  }
}
