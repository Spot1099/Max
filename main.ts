input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.clearScreen()
    for (let index = 0; index < 100; index++) {
        basic.setLedColor(0xff8000)
        basic.pause(400)
        basic.turnRgbLedOff()
    }
})
basic.forever(function () {
    basic.setLedColor(0x00ff00)
    basic.pause(10000)
    basic.setLedColor(0xff8000)
    basic.pause(5000)
    basic.setLedColor(0xff0000)
    basic.pause(10000)
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
