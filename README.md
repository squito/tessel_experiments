Saving the code I write as I work through the tutorials on

learn.sparkfun.com

to work with the tessel2



# Ideas

Try learning about LED projects here (though it focuses on Arduino):

https://learn.sparkfun.com/tutorials/ws2812-breakout-hookup-guide


doesn't sound promising on tessel2: https://github.com/tessel/t2-firmware/issues/24


probably need another chip


## WLED.me

no programming version:
https://www.youtube.com/watch?v=tXvtxwK3jRk

just following that video, ESPhome didn't detect the NodeMCUs
browsing around on https://nodemcu.readthedocs.io/en/master/flash/

led me to believe I needed to install the USB-to-serial driver from
https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers


but, still no luck


comments here suggested running  https://github.com/esp8266/Arduino/issues/1703

```
system_profiler SPUSBDataType
ls -l /dev/cu.*
ls -l /dev/tty.*
```

also see 
https://bennthomsen.wordpress.com/iot/iot-things/esp8266-wifi-soc/esp8266-getting-started-with-arduino-ide/

to see USB status


OK, seems like it was just a bad USB cord.  I did install both drivers, anyway, not sure if that helped.







## Arduino

https://www.youtube.com/watch?v=nL34zDTPkcs



## LilyPad wearables

https://learn.sparkfun.com/tutorials/lilypad-safety-scarf


cool light up card:
https://learn.sparkfun.com/tutorials/led-butterfly-pop-up-card


