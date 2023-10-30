input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onGesture(Gesture.Shake, function () {
    scrollbit.clear()
    scrollbit.scrollText("Happy Halloween Squirrels!", 128, 50)
    scrollbit.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
strip.clear()
