#Design Specification: Genetics Games

This Design Specification will describe how the Genetics Games work from the inside.  Refer to the Fuctional Specification to see how the Games work from the outside, in the point of view of the user.


##Introduction

The Genetics Games are run entirely in the browser, with no server or database support.

This Design Spec will cover the following aspects of the Games:

-Client side programming language
-Data storage requirements and tool choices
-Client system architechture
-Major entry points (URL's) to the site
-Mathematical model for gameplay
-Software test strategy
-Software deployment instructions

The following do not apply to the Genetics Games and will not be discussed in the Design Spec:

-Server software and overall architecture
-Server side programming language
-Data storage requirements and tool choices
-Server system architecture
-Bug Tracking Strategy


##Client Side Programming Language
HTML, CSS, and JavaScript

##Client System Architechture
JavaScript will be used to process the user's inputs and progress each game.

HMTL and CSS will be used to create the layout of each game.  

Pressing a specific HTML button on the web page will trigger a specific JavaScript function in response, which will make the game progress.  See Mathematical Model for details on the functions and gameplay.

##Major Entry Points


##Mathematical Model 
###Determining Phenotypes
Pressing the "CLICK ME" button will initialize the game, triggering the function DPrand(), which will make a random genotype (RR, Rr, or rr) appear on the screen by generating a random number over the interval [0,1).  
If the number is [0,1/3) then the result will be RR.  
If the number is [1/3,2/3) then the result will be Rr.  
If the number is [2/3,1) then the result will be rr.
See the Functional Spec to see how 

###Predicting Genotypes


###Determining Genotypes



##Software Test Strategy


##Software Deployment Instructions
