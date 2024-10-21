export * from './player.image'
export * from './pointer.image'
export * from './tree.image'
export * from './world-tiles.image'

import { Loader } from 'excalibur'

import { playerImage } from './player.image'
import { pointerImage } from './pointer.image'
import { treeImage } from './tree.image'
import { worldTilesImage } from './world-tiles.image'

export const loader = new Loader()
loader.addResource(playerImage)
loader.addResource(pointerImage)
loader.addResource(treeImage)
loader.addResource(worldTilesImage)

loader.suppressPlayButton = true
loader.playButtonText = 'Go'
