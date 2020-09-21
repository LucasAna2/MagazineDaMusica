/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

const rammstein = "../music/rammstein.mp3"
const fireOnFire = "../music/fireOnFire.mp3"
const happier = "../music/happier.mp3"
const hazbinHotel = "../music/hazbinHotel.mp3"
const highHopes = "../music/highHopes.mp3"
const howDoYouSleep = "../music/howDoYouSleep.mp3"
const legendsNeverDie = "../music/legendsNeverDie.mp3"
const rise = "../music/rise.mp3"
const sunflower = "../music/sunflower.mp3"
const theDay = "../music/theDay.mp3"

function onDeviceReady() {
   var btnPlay = document.getElementById("playAudio");
   
   btnPlay.addEventListener("click", playAudio);
   document.getElementById("pauseAudio").addEventListener("click", pauseAudio);
   document.getElementById("stopAudio").addEventListener("click", stopAudio);
   document.getElementById("volumeUp").addEventListener("click", volumeUp);
   document.getElementById("volumeDown").addEventListener("click", volumeDown);
   
   var myMedia = null;
   function playAudio() {
      if(btnPlay.getAttribute("data-music-play") == "rammstein"){
         var src = rammstein;
      }else if(btnPlay.getAttribute("data-music-play") == "fireOnFire"){
         var src = fireOrenFi;
      }else if(btnPlay.getAttribute("data-music-play") == "happier"){
         var src = happier;
      }else if(btnPlay.getAttribute("data-music-play") == "hazbinHotel"){
         var src = hazbinHotel;
      }else if(btnPlay.getAttribute("data-music-play") == "highHopes"){
         var src = highHopes;
      }else if(btnPlay.getAttribute("data-music-play") == "howDoYouSleep"){
         var src = howDoYouSleep;
      }else if(btnPlay.getAttribute("data-music-play") == "legendsNeverDie"){
         var src = legendsNeverDie;
      }else if(btnPlay.getAttribute("data-music-play") == "rise"){
         var src = rise;
      }else if(btnPlay.getAttribute("data-music-play") == "sunflower"){
         var src = sunflower;
      }else if(btnPlay.getAttribute("data-music-play") == "theDay"){
         var src = theDay;
      }

      if(myMedia === null) {
         myMedia = new Media(src, onSuccess, onError);
   
         function onSuccess() {
            console.log("playAudio Success");
         }
   
         function onError(error) {
            console.log("playAudio Error: " + error.code);
         }
      }
      myMedia.play();
   }
   
   function pauseAudio() {
      if(myMedia) {
         myMedia.pause();
      }
   }
   
   function stopAudio() {
      if(myMedia) {
         myMedia.stop(); 
      }
      myMedia = null;
   }
   
   var volumeValue = 0.5;
   function volumeUp() {
      if(myMedia && volumeValue < 1) {
         myMedia.setVolume(volumeValue += 0.1);
      }
   }
   
   function volumeDown() {
      if(myMedia && volumeValue > 0) {
         myMedia.setVolume(volumeValue -= 0.1);
      }
   }
}
