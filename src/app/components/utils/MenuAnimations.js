export {
    gridMenu,
    gridMenuContent,
}

const gridMenu = {
    hide : {y:-350, opacity:0},
    show : {y:0, opacity:1},
    transition : {duration:10, ease:'easeInOut'}
}

const gridMenuContent = {
    hideLeft : {x: 0, opacity:0},
    showLeft : {x: 9, opacity:1},
    hideRight : {x:-4, y: -4},
    showRight : {x:0, y:0},
    transition : {duration:2, ease:'easeInOut'}
}