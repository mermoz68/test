basic.forever(function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 50)
    basic.pause(1000)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 50)
    basic.pause(1000)
})
