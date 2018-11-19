export const colors = {
    primary: '#d91e18',
    hover: '#d91e18',
    selected: '#bc1914',
    default: '#48749e',
    background: '#183956',
    dimmed: '#142f47',
    shadow: '#757575',
};

export function changePrimary(color) {
    colors.primary = color;
}

window.changePrimary = changePrimary;
