input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Ampelsteuerung()
})
function Ampelsteuerung () {
    basic.pause(500)
    GPIOAmpel(0, 0, 1, 1, 0)
    basic.pause(1000)
    GPIOAmpel(0, 1, 0, 1, 0)
    basic.pause(2000)
    GPIOAmpel(1, 0, 0, 1, 0)
    basic.pause(2000)
    GPIOAmpel(1, 0, 0, 0, 1)
}
function GPIOAmpel (Rot: number, Gelb: number, Grün: number, Rot2: number, Grün2: number) {
    Byte = 0
    Byte += Rot * 2 ** 0
    Byte += Gelb * 2 ** 1
    Byte += Grün * 2 ** 2
    Byte += Rot2 * 2 ** 3
    Byte += Grün2 * 2 ** 4
    qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Byte)
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
loops.everyInterval(1000, function () {
    if (qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)) == 64) {
        basic.setLedColor(0x0000ff)
        Ampelsteuerung()
    }
})
