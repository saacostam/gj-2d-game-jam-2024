export const timelineProgressHtmlElement: HTMLProgressElement = (() => {
  const timelineProgress = document.querySelector<HTMLProgressElement>(
    'progress#timeline-progress',
  )

  return timelineProgress!
})()

export const timelineProgressLabelElement: HTMLDivElement = (() => {
  const timelineProgressLabel = document.querySelector<HTMLDivElement>(
    'div#timeline-progress-label',
  )

  return timelineProgressLabel!
})()
