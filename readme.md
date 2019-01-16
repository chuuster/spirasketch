# SpiraSketch
![header-demo](./images/header.gif)
![spiral-demo](./images/spiro-demo.gif)
![spiral-demo-2](./images/spiro-2-demo.gif)

## Background and Overview
SpiraSketch is a web app inspired by the [Spirograph](https://en.wikipedia.org/wiki/Spirograph).

A drawing "compass" with multiple rotors traces out a curve known as a roulette curve. Users can input custom parameters to change the radii and speeds of each rotor. 

SpiraSketch uses vanilla Javascript, HTML, and CSS. 

## Features

Users can control the drawing with a control panel. There are three randomization options, two drawing mode options, and a panel for users to enter custom inputs. 

The three randomization options are: 
  * Simple: (2-5 rotors, maximum ratio for each rotor: 6)
![simple-demo](./images/simple-draw-demo.gif)

  * Spiral: (2 rotors, no maximum ratio) 
![spiral-demo](./images/spiral-draw-demo.gif)

  * Complex: (2-9 rotors, no maximum ratio) 
![complex-demo](./images/complex-draw-demo.gif)

The two drawing mode options are Draw and Animate. Using the Draw mode will render a complete sketch directly on the canvas. Using the Animate mode will render an animation of the sketch being drawn by the rotors, as in the header image. 

## Going Forward
Future plans for SpiraSketch include implementing options to change animation speed and line style. 