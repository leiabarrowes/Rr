#Design Specification: Genetics Games

This Design Specification will describe how the Genetics Games work from the inside.  Refer to the Fuctional Specification to see how the Games work from the outside, in the point of view of the user.


##Introduction

The Genetics Games are run entirely in the browser, with no server or database support.

This Design Spec will cover the following aspects of the Games:

* Client side programming language
* Data storage requirements and tool choices
* Client system architechture
* Major entry points (URL's) to the site
* Mathematical model for gameplay
* Software test strategy
* Software deployment instructions

The following do not apply to the Genetics Games and will not be discussed in the Design Spec:

* Server software and overall architecture
* Server side programming language
* Data storage requirements and tool choices
* Server system architecture
* Bug Tracking Strategy


##Client Side Programming Language
HTML, CSS, and JavaScript

##Client System Architechture
JavaScript will be used to process the user's inputs and progress each game.

HMTL and CSS will be used to create the layout of each game.  

Pressing a specific HTML button on the web page will trigger a specific JavaScript function in response, which will make the game progress.  See Mathematical Model for details on the functions and gameplay.

##Major Entry Points


##Mathematical Model 
###What Color?
Pressing the "CLICK ME" button will initialize the game, triggering the function DPrand(), which will make a random genotype (RR, Rr, or rr) appear on the screen by generating a random number over the interval [0,1).  
If the number is [0,1/3) then the result will be RR.  
If the number is [1/3,2/3) then the result will be Rr.  
If the number is [2/3,1) then the result will be rr.
If the result is either RR or Rr and the user clicks on the green plant, a "Correct!" alert appears and DPrand() is run again.
If the result is rr and the user clicks on the yellow plant, a "That's not it... try again!" alert appears.

###Punnett Squares
The "CLICK ME" button will initialize the game, triggering the functions DPrand1() and DPrand2().  Both of these functions generate a random phenotype in the same way as described above.  These two genotypes (gen1 and gen2) are placed on the outside of the Punnett square (gen1 at top and gen2 on left).
Inside each quadrant* of the Punnett square are three buttons, "RR," "Rr," and "rr."  When one of these buttons are clicked, the corresponding genotype appears in larger font above the buttons in the quadrant.
The "CLEAR" button removes the large-font genotypes in all the quadrants.
The "SUBMIT" button triggers the Check() function:
* If both genotypes are RR, each quadrant should say RR also.
* If both genotypes are rr, each quadrant should say rr also.
* If both genotypes are Rr, q1 and q3 should say Rr, q2 should say RR, and q4 should say rr.
* If the two genotypes are RR and rr, each quadrant should say Rr.
* If gen1 is RR and gen2 is Rr, q1 and q2 should say RR and q3 and q4 should say Rr.
* If gen1 is Rr and gen2 is RR, q2 and q3 should say RR and q1 and q4 should say Rr.
* If gen1 is Rr and gen2 is rr, q2 and q3 should say Rr and q1 and q4 should say rr.
* If gen1 is rr and gen2 is Rr, q1 and q2 should say Rr and q3 and q4 should say rr.
If any of these conditions are met, a "Correct!" alert appears and DPrand1() and DPrand2() run again.
Otherwise, a "That's not it... try again!" alert appears.

*Think of the Punnett square as a Cartesian coordinate plane.

###Who are the parents?
The "CLICK ME" button triggers the function Repr(), which randomly selects two random parent genotypes (gen1 and gen2) using the same method as described above.  
If either genotyes are RR, 20 green plants will appear on the screen.  
If both genotypes are rr, 20 yellow plants will appear on the screen.
If both genotypes are Rr:
* Another random number over [0,1) is generated.
* If the number is [0,.75) then the plant will be green.
* If the number is [.75,.25) then the plant will be yellow.
* The process is repeated 20 times to generate a total of 20 plants.
If the genotypes are either combination of RR and rr:
* Another random number over [0,1) is generated.
* If the number is [0,.5) then the plant will be green.
* If the number is [.5,1) then the plant will be yellow.
* The process is repeated 20 times to generate a total of 20 plants.
Next to the 20 plants are three buttons, RR, Rr, and rr.  When one of these is clicked the genotype appears in bigger font above the buttons.  The user clicks two buttons, and both genotypes appear.
The "CLEAR" button removes these bigger font genotypes.
The "SUBMIT" button triggers the function Submit() which checks to see if the genotypes the user selected are valid possibilities of parents for the 20 plants:
* If the plants are all green then the user could have selected RR & RR, RR & Rr, or RR & rr.
* If the plants are all yellow then the user must have selected rr & rr.
* If the green:yellow ratio is about 3:1 then the user must have selected Rr & Rr.
* If the green:yellow ratio is about 1:1 then the user must have selected Rr & rr.
If any of the above conditions are met, a "Correct!" alert appears and the Clear() and Repr() functions are run again.
Otherwise, a "That's not it... try again!" alert appears and the user can reselect the genotypes and resubmit.


##Software Test Strategy
Play each game to make sure each runs smoothly without errors.

##Software Deployment Instructions
