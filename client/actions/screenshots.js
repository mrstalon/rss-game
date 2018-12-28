const SHOW_CHOOSED_SCREENSHOT = 'SHOW_CHOOSED_SCREENSHOT'
const HIDE_CHOOSED_SCREENSHOT = 'HIDE_CHOOSED_SCREENSHOT'

export function showChoosedScreenshot(id) {
  console.log(id);
  return {
    type: SHOW_CHOOSED_SCREENSHOT,
    payload: id
  }
}

export function hideChoosedScreenshot() {
  return {
    type: HIDE_CHOOSED_SCREENSHOT
  }
}
