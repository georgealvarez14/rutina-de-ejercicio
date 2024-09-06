basic.showString("")
basic.showString(" ")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.StickFigure)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
basic.showString("")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # #
        # # # # .
        # # . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . #
        . # # # #
        . # . . #
        # . # . .
        `)
    basic.showLeds(`
        . # # # #
        # # # # .
        # # . . .
        . # . . .
        # . # . .
        `)
}
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        `)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # . # .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
}
basic.showString("")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        . # . . #
        `)
}
basic.showString("")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # # . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # # #
        . . # # .
        . . # . #
        `)
}
basic.showString("")
