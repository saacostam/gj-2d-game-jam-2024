export * from './world-tiles.image'

import { Loader } from 'excalibur'

import { worldTilesImage } from './world-tiles.image'

export const loader = new Loader()
loader.addResource(worldTilesImage)

loader.suppressPlayButton = true
loader.playButtonText = 'Go'
