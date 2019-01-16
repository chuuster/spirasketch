# SpiraSketch
## Background and Overview
SpiraSketch is a web app inspired by the [Spirograph](https://en.wikipedia.org/wiki/Spirograph).

Users can generate mathematical curves--specifically roulette curves known as epitrochoids--by inputting parameters and holding their cursor over the drawing area. 

## Features
The drawing area starts with default parameters. 

The "cursor" in the drawing area is actually a compass with multiple sections. Each section rotates at different speeds according to input parameters. When the user holds down the cursor, a line will start tracing the path of the outmost compass. 

#### Bonus Features
Users can modify the colors and background of the drawing. 

#### Wireframe 
[app-wireframe](./images/spirasketch-wireframe.png)

## Architecture and Technologies
SpiraSketch uses Javascript, HTML, and CSS. 

## Implementation Timeline

### Day 1 -- 1/10/19 
  * Set up main page with canvas element 
  * Research how to draw on canvas 
  * Research how to animate on canvas

### Day 2 -- 1/11/19 
  * Implement drawing and animation on canvas
  * Be able to draw a simple circle on canvas with an animated compass

### Day 3 -- 1/12/19 
  * Implement multiple compass sections 
  * Implement equations for generating curves 
  * Be able to draw hard-coded roulette curves with animated compass sections

### Day 4 -- 1/13/19 
  * Add functionality for users to input parameters to generate curves

### Day 5 -- 1/14/19 
  * Add functionality to change colors of lines, and background, and other visual effects 

### Day 6 -- 1/15/19 
  * Create instructions section and polish CSS 
  * Add functionality to use keyboard keys and touchscreens in addition to the mouse