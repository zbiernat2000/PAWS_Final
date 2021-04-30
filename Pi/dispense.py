import requests
import datetime
import json
import time as t
import RPi.GPIO as GPIO


pin = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(pin, GPIO.OUT)



def spin(cups):
    RUN_TIME = .09
    STOP_TIME = 1
    
    for i in range(0, cups):
        GPIO.output(pin, GPIO.HIGH)
        t.sleep(RUN_TIME)
        GPIO.output(pin, GPIO.LOW)
        t.sleep(STOP_TIME)


URL = "http://24.60.225.110:8080/api/v1/dispense"

r = requests.get(URL)

time = datetime.datetime.now()
minute = int(round(time.minute))-1
day = int(round(datetime.datetime.today().weekday()))
hour = int(round(time.hour))


while True:
    day = datetime.datetime.today().weekday()
    currMin = int(round(datetime.datetime.now().minute))
    if minute != currMin:
        time = datetime.datetime.now()
        minute = int(round(time.minute))
        day = int(round(datetime.datetime.today().weekday()))
        hour = int(round(time.hour))
        r = requests.get(URL)
        r = r.json()
        for dispense in r:
            if minute == int(dispense["minute"]) and hour == int(dispense["hour"]) and day == int(dispense["day"]):
                spin(dispense["amount"])
                if dispense["repeating"] == False:
                    requests.delete(URL + "/" + str(dispense["id"]))
