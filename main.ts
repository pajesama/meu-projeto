input.onButtonPressed(Button.A, function () {
    basic.showString("11/01/2023")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
basic.showString("OLA")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
