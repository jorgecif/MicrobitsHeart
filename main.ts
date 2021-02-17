input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(100)
})
basic.showString("Hola!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
