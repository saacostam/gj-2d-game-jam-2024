import { Sprite, Animation } from 'excalibur'
import { worldTilesImage, worldTilesSpritesheet } from '../../../assets'

export const PortalGraphics = {
  sprite: new Sprite({
    image: worldTilesImage,
  }),
  animations: {
    idle: Animation.fromSpriteSheetCoordinates({
      spriteSheet: worldTilesSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: 6,
        },
      ],
    }),
    pressed: Animation.fromSpriteSheetCoordinates({
      spriteSheet: worldTilesSpritesheet,
      frameCoordinates: [
        {
          x: 1,
          y: 6 + 8,
        },
      ],
    }),
  },
}
