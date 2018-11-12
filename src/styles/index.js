export let colors = { primary: '#f8da70', hover: '#83FD64', selected: '#6ed155', default: '#48749e' }

export function changePrimary (color) {
  colors.primary = color
}

window.changePrimary = changePrimary
