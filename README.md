# puddi

Puddi is browser 2D graphics library providing a thin layer of
object-oriented abstractions over HTML5 Canvas.

[Live demo](https://bagnalla.github.io/puddi_hello_world/).

Type 'make' in the scripts directory to build dist/bundle.js.


# Core puddi files

## scripts/puddi/puddi.js

This file contains the core graphics runtime. An instance of the
runtime is represented by a Puddi object. Every Puddi object is
associated with exactly one canvas element.

Puddi maintains a list of root objects (those with no parents), and is
responsible for regularly invoking their render and update methods (if
available). It does so by hooking into the browser's render loop.

Some important functions:

* The Puddi object constructor. Takes a canvas element as the only argument.
* run() - start the update/render loop.
* stop() - stop the loop


## scripts/puddi/puddiobject.js

Base "class" prototype for all objects managed by Puddi. Every object
has position, rotation, and scale fields, accessible via an assortment
of getters and setters. Private fields and methods should typically
not be touched.

An object may also have children objects. Updates/renders are
propagated to children (the runtime only has to deal with root
objects) and the childrens' transformations (position, rotation,
scale) are defined relative to their parent's model coordinate system.

Use the setUpdate and setDraw methods to define the behavior and
graphical appearance of an object. The update method should have a
single parameter for the number of milliseconds elapsed since the last
frame. The draw method should have a single parameter for the canvas
context object.

*** Warning: do NOT override the update and draw methods directly.


# Example files

## scripts/triangle.js

A prototype pre-equipped with a draw function for equilateral
triangles.

## scripts/square.js

A prototype pre-equipped with a draw function for squares.