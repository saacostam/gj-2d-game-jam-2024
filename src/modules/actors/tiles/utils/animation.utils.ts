import { Animation, AnimationStrategy, SpriteSheet } from 'excalibur'

export const AnimationUtils = {
  getTileAnimation(args: {
    spriteSheet: SpriteSheet
    firstFrameX: number
    firstFrameY: number
  }): Animation {
    return Animation.fromSpriteSheetCoordinates({
      spriteSheet: args.spriteSheet,
      frameCoordinates: [
        {
          x: args.firstFrameX,
          y: args.firstFrameY,
        },
        {
          x: args.firstFrameX,
          y: args.firstFrameY + 8,
        },
      ],
      strategy: AnimationStrategy.Loop,
      speed: 0.25,
    })
  },
}
