#pragma config(StandardModel, "RVW SQUAREBOT")

// custom functions
void back(){
	motor[leftMotor]=-90;
  motor[rightMotor]=-90;
  wait1Msec(500);
}
void turnLeft(){
    motor[leftMotor]=-30;
    motor[rightMotor]=30;
	wait1Msec(1050);
}
void turnRight(){
    motor[leftMotor]=30;
	motor[rightMotor]=-30;
	wait1Msec(1050);
}

task main()
{
// Idea from:
//https://www.youtube.com/watch?v=aGW99bxCwmA
while(1){
	// driving forward first for distance
		motor[rightMotor] = 127;
		motor[leftMotor]  = 127;
		wait1Msec(550);
	// we turn right for 90 degrees
	if(SensorValue(sonarSensor) > 20){
		turnRight();
	}
	// else we turn left for 90 degrees
	else{
		back();
		turnLeft();}
	}
}
