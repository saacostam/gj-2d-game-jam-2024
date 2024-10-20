export * from './world-tiles.image'
export * from './player.image'

import { Loader } from 'excalibur'

import { worldTilesImage } from './world-tiles.image'
import { playerImage } from './player.image'

export const loader = new Loader()
loader.addResource(worldTilesImage)
loader.addResource(playerImage)

loader.suppressPlayButton = true
loader.playButtonText = 'Go'
