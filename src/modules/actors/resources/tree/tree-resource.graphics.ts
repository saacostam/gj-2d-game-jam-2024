import { Sprite, Animation } from 'excalibur'
import { treeImage, treeSpritesheet } from '../../../assets'

export const TreeResourceGraphics = (row: number) => ({
  sprite: new Sprite({
    image: treeImage,
  }),
  animations: {
    full: Animation.fromSpriteSheetCoordinates({
      spriteSheet: treeSpritesheet,
      frameCoordinates: [
        {
          x: 0,
          y: row,
        },
      ],
    }),
    threeQuarters: Animation.fromSpriteSheetCoordinates({
      spriteSheet: treeSpritesheet,
      frameCoordinates: [
        {
          x: 1,
          y: row,
        },
      ],
    }),
    half: Animation.fromSpriteSheetCoordinates({
      spriteSheet: treeSpritesheet,
      frameCoordinates: [
        {
          x: 2,
          y: row,
        },
      ],
    }),
    quarter: Animation.fromSpriteSheetCoordinates({
      spriteSheet: treeSpritesheet,
      frameCoordinates: [
        {
          x: 3,
          y: row,
        },
      ],
    }),
  },
})
