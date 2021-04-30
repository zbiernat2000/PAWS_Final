#include <Debug.h>
#include <PN5180.h>
#include <PN5180ISO15693.h>

#define ENA 2
const int trigPin = 6;
const int echoPin = 5;
boolean closed;
const int relay1 = 4;
const int relay2 = 3;
const int motorTime = 210;
const int stopIncrement = 10;
const int closeTime = motorTime -50;
const int stayTime = 2000;

float duration, distance;

void fowardMotor(){
  digitalWrite(relay1, LOW);// turn relay 1 ON
  digitalWrite(relay2, HIGH);// turn relay 2 OFF  

  }
void backwardsMotor(){
   digitalWrite(relay1, HIGH);// turn relay 1 OFF
  digitalWrite(relay2, LOW);// turn relay 2 ON 
  }
void stopMotor(){
  digitalWrite(relay1, LOW);// turn relay 1 OFF
  digitalWrite(relay2, LOW);// turn relay 2 OFF
}

void closeBowl(){
    Serial.println(F("Closing"));
    int x = closeTime;
    while(x > 0){
      backwardsMotor();
      delay(stopIncrement);
      while(inRange()){
        fowardMotor();
        delay(stopIncrement);
        stopMotor();
        x += stopIncrement;
        Serial.println(F("Reopen"));
        while(inRange()&& x == closeTime){
          delay(stopIncrement);
          }
      }

      x -= stopIncrement;
    }
    stopMotor();
    Serial.println(x);
    delay(stayTime);
    closed = true;
 }

void  openBowl(){
  Serial.println(F("Opening"));
  fowardMotor();
  delay(motorTime);
  stopMotor();
  delay(stayTime);
  closed = false;
  }

boolean inRange(){
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = (duration*.0343)/2;
  return distance < 15;
 }

// CONSTANTS
// The number of PN5180 readers connected
const byte numReaders = 1;
// What is the "correct" UID that should be detected by each reader
uint8_t correctUid[][8] = {
  {0xD1,0xD2,0x48,0x2A,0x50,0x1,0x4,0xE0},
  {0xB,0x8A,0xC6,0x6A,0x0,0x1,0x4,0xE0}
};
// This pin will be driven LOW when the puzzle is solved
const byte relayPin = A0;

// GLOBALS
// Each PN5180 reader requires unique NSS, BUSY, and RESET pins,
// as defined in the constructor below
PN5180ISO15693 nfc[] = {
  PN5180ISO15693(10,9,7), // works
};


uint8_t lastUid[numReaders][8];

void setup() {
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH);
  digitalWrite(ENA, HIGH);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  Serial.begin(115200);
 
  for(int i=0; i<numReaders; i++){
    Serial.print("Reader #");
    Serial.println(i);
    Serial.println(F("Initialising..."));
    nfc[i].begin();
    Serial.println(F("Resetting..."));
    nfc[i].reset();
    Serial.println(F("Enabling RF field..."));
    nfc[i].setupRF();
  }
  Serial.println(F("Setup Complete"));
}



uint32_t loopCnt = 0;
bool errorFlag = false;

void loop() {

  for(int i=0; i<numReaders; i++) {
    // Variable to store the ID of any tag read by this reader
    uint8_t thisUid[8];
    // Try to read a tag ID (or "get inventory" in ISO15693-speak) 
    ISO15693ErrorCode rc = nfc[i].getInventory(thisUid);
    // If the result code was that a card had been read
    if(rc == ISO15693_EC_OK) {

        if(closed)
          openBowl();
  
      }
    // If a card cannot be read
    else {
      // Test if we previously knew about a card (in which case it's just been removed
      // The most significant (last) byte of a valid UID should always be 0xE0. e.g. E007C4A509C247A8
      #ifdef DEBUG
        Serial.print(F("Error in getInventory: "));
        Serial.println(nfc[i].strerror(rc));
      #endif
      if(!closed && !inRange())
        closeBowl();
    }
 
    // Slight delay before checking the next reader
    delay(10);
  }
}
