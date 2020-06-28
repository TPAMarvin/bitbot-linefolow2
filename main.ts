let left = 0
let right = 0
basic.forever(function () {
    left = pins.digitalReadPin(DigitalPin.P11)
    right = pins.digitalReadPin(DigitalPin.P5)
    if (left == 0 && right == 1) {
        bitbot.motor(BBMotor.Left, 300)
        bitbot.motor(BBMotor.Right, 50)
        bitbot.neoSetColor(neopixel.colors(NeoPixelColors.Red))
    } else if (left == 1 && right == 0) {
        bitbot.motor(BBMotor.Left, 50)
        bitbot.motor(BBMotor.Right, 300)
        bitbot.neoSetColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (left == 0 && right == 0) {
        bitbot.motor(BBMotor.Left, 300)
        bitbot.motor(BBMotor.Right, 300)
        bitbot.neoSetColor(neopixel.colors(NeoPixelColors.Green))
    }
})
