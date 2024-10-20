import { BaseResourceActor, BaseResourceActorArgs } from '../base'

export interface TreeResourceActorArgs extends BaseResourceActorArgs {}

export class TreeResourceActor extends BaseResourceActor {
  constructor({ x, y }: TreeResourceActorArgs) {
    super({
      x,
      y,
    })
  }
}
