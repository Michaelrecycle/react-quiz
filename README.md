Checkout Demo here: https://tadesign.co.nz/iquiz/ 

# React Instruments Quiz

Instruments quiz app that calculates which instrument the user should learn based on the options they chose. Generates affiliate links for courses and gear for users to click and buy (which generates commision).  

This quiz can easily be modified to create other types of quizes where the logical model is incrementing/decrementing potential result elements with different options. For example, a book quiz (what book should they read) or a dress quiz (what dress should they buy) etc. 

# Implementation 

Questions are stored in the array in the state. Each question element in that array has two properties. A title and options (another array containing options which also have titles and other properties).

Instrument counts (total of 8 different instruments 0 - 7, each index correspondes to an instrument). This array is stored in the state and is updated through onClick handlers for ecah option. 

Main components: 

OptionCard
SliderCard
ProgressBar 
ResultScreen 

You can change this quiz very easily into another quiz you want by changing:

1. Result array (instrumentsCount array). Add or remove elements (if you have more or less than 8 outcomes). Arrange the outcomes by index and remember that index. 

2. Questions array. You can remove or add questions. 

3. Question titles and their options. 

4. Option titles,  option icons and their countUpdate array( when you click on an option, it will update the result array based on what the countUpdate is [ 0 -1 1 -1 -1 ...] where 0 is neutral, 1 is increment and -1 is decrement. So that each option has it's own effect on the result array

5. Tweak certain conditions (such as sliders, unless you want to keep them).

6. General styling 

7. ResultScreen component (check it out).

I will put up a video soon on how to quickly modify this quiz to transform this from a musical quiz to something completely different.  The main constrains are the layout and the logical model ( can't evaluate right/wrong without manual coding or can't randomize results).

You are free to use this as you please, no credit or anything required. 
