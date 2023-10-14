input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Ampelsteuerung()
})
function Ampelsteuerung () {
    basic.pause(500)
    GPIOAmpel(1, 1, 1, 1, 1)
}
function GPIOAmpel (Rot: number, Gelb: number, Grün: number, Rot2: number, Grün2: number) {
    if (Rot == 1) {
        basic.setLedColor(0xff0000)
    } else if (Gelb == 1) {
        basic.setLedColor(0xffff00)
    } else if (Grün == 1) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.turnRgbLedOff()
    }
    if (Rot2 == 1) {
        basic.showIcon(IconNames.StickFigure)
    } else if (Grün2 == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
    Byte = 0
    Byte += Rot * 2 ** 0
}
let Byte = 0
qwiicgpio.beimStart(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27))
qwiicgpio.setMode(
qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27),
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.IN_inverted,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT
)
