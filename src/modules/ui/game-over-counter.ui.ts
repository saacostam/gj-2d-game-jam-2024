export const gameOverCounterHtmlElement: HTMLDivElement = (() => {
  const gameOverCounter = document.querySelector<HTMLDivElement>(
    'div#game-over-counter',
  )

  return gameOverCounter!
})()

export const enemiesKilledCounterHtmlElement: HTMLDivElement = (() => {
  const enemisKilledCounter = document.querySelector<HTMLDivElement>(
    'div#enemies-killed-counter',
  )

  return enemisKilledCounter!
})()
