export * from './player.image'
export * from './tree.image'
export * from './world-tiles.image'

import { Loader } from 'excalibur'

import { playerImage } from './player.image'
import { treeImage } from './tree.image'
import { worldTilesImage } from './world-tiles.image'

export const loader = new Loader()
loader.addResource(worldTilesImage)
loader.addResource(playerImage)
loader.addResource(treeImage)

loader.suppressPlayButton = true
loader.playButtonText = 'Go'
