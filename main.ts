radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(69)
radio.sendNumber(4)
basic.forever(function () {
	
})
