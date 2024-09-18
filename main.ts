let distancia = 0
basic.forever(function () {
    distancia = grove.measureInCentimetersV2(DigitalPin.P8)
    if (distancia < 10) {
        music.ringTone(262)
        basic.showNumber(distancia)
    } else {
        music.stopAllSounds()
    }
})
