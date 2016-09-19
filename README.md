# Smack Kitty’s Haiku Dojo

As a teenager some friends and I invented a fake punk rock personality named Smack Kitty who was the frontman of a band called the Smoogalooga Blastos. This was inspired by our love of the real punk band called The Dead Milkmen. 

Later in life I began tweeting humorous and irreverent haikus for fun and the practice squeezing thoughts into a short format. I enhanced the story of Smack Kitty adding that after punk died he entered a monastery and became a monk. 

This application is an idea I have for expanding the Smack Kitty character and “brand.” It is a single page javascript application that utilizes the Carnegie Mellon Universities Pronunciation dictionary (used in many text-to-speech applications) to accurately count syllables and check the consistency of the 5-7-5 syllable haiku format. 

This project uses javascript, RequireJS, Handlebars, and other libraries to implement a robust single page web application. It leverages Cordova to serve the current web application, but with some more work will also work on both iOS and Android. In the future the CMU Dictionary and syllable counting logic will be implemented via MongoDB and REST. 

To run the application, install Cordova on your system, navigation to the root directory in a terminal, and type “cordova up browser”