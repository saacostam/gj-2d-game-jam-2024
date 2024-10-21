export const gameOverCounterHtmlElement: HTMLDivElement = (() => {
  const gameOverCounter = document.querySelector<HTMLDivElement>(
    'div#game-over-counter',
  )

  return gameOverCounter!
})()
