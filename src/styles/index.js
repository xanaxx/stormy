export let colors = {
  primary: '#d91e18',
  hover: '#d91e18',
  selected: '#bc1914',
  default: '#48749e'
}

export function changePrimary (color) {
  colors.primary = color
}

window.changePrimary = changePrimary
