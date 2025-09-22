radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("gravity", receivedNumber)
})
radio.setGroup(255)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
