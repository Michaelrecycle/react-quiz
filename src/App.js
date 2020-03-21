import React from "react";

import "./App.css";
/*
NOTE ABOUT STYLING.

The styling of this application is broken down for each component. 

Only the JSX elements inside this application can be styled with App.css

To style the components, each has an individual style sheet in their respective folders. 


*/
import "./reset.css";

// Import icons

// Import Components
import OptionCard from "./components/options/OptionCard";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Slider from "./components/slider-bar/Slider";
import ResultScreen from "./components/result-screen/ResultScreen";


class App extends React.Component {
  /* 

This is a simple web app called Instruments quiz. 

It allows the user to go through a quiz, selecting different options to
match the users with the instrument that they should try to learn based 
on the options they have selected. 

There are X main components:

1. OptionCard --> Provides a box with styling to represent an option of each question.
                  It requires an Icon and a text as a prop. 
2. OptionSlider --> Similiar to Option card but it is a slider. Requires the title, starting value,
                    step size and a range.
3. ResultScreen --> Result screen that shows the instrument the user should play. Requires the title,
                    icon, text and URL for links.                      
                  



Author: Michael Shaimerden  ( michael@tadesign.co.nz )

Instruments Quiz Version 2 ( March, 2020 )


*/

  state = {
    /*
    questions 

    A question is an array of questions ( NOTE: we can later insert new questions rapidly into this array)
    NOTE: The last element of the questions array will represent the result screen.

    Each element of this array is an object that represents a question. This object has the following properties:

    title --> A string to represent the title of the question eg. Can you play any of these?

    options --> An array of options for the specifci question. Each question have different number of options. 
                Options can be different types. One can represent a simple picture + text box while others can be
                sliders 

    */
    questions: [
      // question --> options --> option
      {
        title: "Can You Already Play Any Of These?",
        options: [
          /* 
          Each option has:
          
          Title --> A string containt the option's title (it is also used as a key, as the option titles will be unique throughout the whole quiz)
          Icon --> One of the images imported at the top of the file

          CountUpdates --> See comment below outlining the purpose of this property
                         

          
          
          An option can also be a slider with discrete values 
          
          
          */
          {
            title: "Acoustic Guitar",
            icon: acousticIcon,
            countUpdates: [-2, 2, 0, 1, 1, 0, 1, 1]
            /*  
              countUpdates 

               Decides which instruments need to be incremented, decremented or ignored.  

               '1' represent instrument count to increment, where it's index dictates which instrument to update in the instrumentsCount state array.
                   
               '-1' represent instrument counts to decrement.

               There are two special values '2' and '-2' uses instead of the '1' and '-1' to indicate that this is a "deal-breaker" option which causes one
               instrumet to be strongly favoured or disfavoured.
               (For example: If you select 'No Much' for question 4, drums will be strongly disfavoured as you won't have enough room to fit the kit and practice efficiently )
                  
               0 will be used to skip the instrument in the count update. 
                   
                   Each index corresponds to an instument (same as instrumentCount).
     
                    0 - Acoustic Guitar
                    1 - Electirc Guitar
                    2 - Piano
                    3 - Drums
                    4 - Violin
                    5 - Saxophone (alto)
                    6 - Vocals
                    7 - Bass Guitar
  
             */
          },
          {
            title: "Electric Guitar\n(Also Acoustic)",
            icon: electricIcon,
            countUpdates: [-2, -2, 0, 1, 1, 0, 0, -2]
          },
          {
            title: "Piano\n(also Keyboard)",
            icon: pianoIcon,
            countUpdates: [0, 0, -2, 0, 0, 0, 0, 0]
          },
          {
            title: "Drums",
            icon: drumsIcon,
            countUpdates: [0, 0, 0, -2, 0, 0, 0, 0]
          },
          {
            title: "Violin",
            icon: violinIcon,
            countUpdates: [1, 1, 0, 0, -2, 0, 0, 0]
          },
          {
            title: "Saxophone (Alto)",
            icon: saxophoneIcon,
            countUpdates: [0, 0, 0, 0, 0, -2, 0, 0]
          },
          {
            title: "Vocals",
            icon: vocalsIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, -2, 0]
          },
          {
            title: "Bass Guitar",
            icon: bassIcon,
            countUpdates: [1, 1, 0, 0, 0, 0, 0, -2]
          },
          {
            title: "Other",
            icon: otherIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            title: "Nope",
            icon: nopeIcon,
            countUpdates: [1, 0, 1, 0, 0, 0, 0, 0]
          }
        ]
      },
      {
        title: "What Musical Genre Is Your Most Favourite?",
        options: [
          {
            // ag eg  pia  drums violin saxo voca bass
            title: "Rock (Alt, Metal or Funk)",
            icon: rockIcon,
            countUpdates: [1, 2, 0, 1, 0, -1, 1, 1] 
          },
          {
            title: "Old School Pop",
            icon: popIcon,
            countUpdates: [1, -1, 1, 0, -1, -1, 1, 1]
          },
          {
            title: "Classical",
            icon: classicalIcon,
            countUpdates: [0, 1, 2, -1, 1, 0, -1, -1]
          },
          {
            title: "Jazz",
            icon: jazzIcon,
            countUpdates: [-1, 1, 1, 1, -1, 1, 1, 1]
          },
          {
            title: "Hip-Hop (and Rap)",
            icon: hiphopIcon,
            countUpdates: [-1, -1, -1, 1, -1, -1, 1, 1]
          },
          {
            title: "Blues",
            icon: bluesIcon,
            countUpdates: [-1, 1, 1, 0, -1, -1, 1, -1]
          },
          {
            title: "Country",
            icon: countryIcon,
            countUpdates: [1, 1, 0, 0, -1, -1, 1, -1]
          },
          {
            title: "Popular Mainstream",
            icon: mainstreamIcon,
            countUpdates: [1, -1, 1, -1, -1, -1, 1, 1]
          }
        ]
      },
      {
        title: "Do You Want to Sing and Play?\n(At the same time)",
        options: [
          {
            // ag eg  pia  drums violin saxo voca bass
            title: "Yes",
            icon: plusIcon,
            countUpdates: [1, 1, 1, -2, -2, -2, 1, 1]
          },
          {
            title: "No",
            icon: crossIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, -1, 0]
          }
        ]
      },
      {
        // This is a question with a slider option
        // Sliders only have one option to set the slider for that question
        title: "How Much Space Is Available In Your House?",
        options: [
          {
            value: 1,
            max: 3,
            title: ["Not Much", "Some", "Enough", "Plenty"],
            icon: nextIcon,
            cardTitle: "Next",
            step: 1
          }
        ]
      },

      {
        title: "In A Song, Do You Prefer It's Rhythm Or Melody?",
        options: [
          {
            // ag eg  pia  drums violin saxo voca bass
            title: "Rhythm",
            icon: rhythmIcon,
            countUpdates: [1, 1, 0, 1, 0, 0, 0, 1]
          },
          {
            title: "Melody",
            icon: melodyIcon,
            countUpdates: [1, 1, 1, 0, 1, 1, 1, 0]
          },
          {
            title: "Both",
            icon: bothIcon,
            countUpdates: [1, 1, 0, 0, 0, 0, 0, 1]
          },
          {
            title: "No Preference",
            icon: nextIcon,
            countUpdates: [0,1, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      {
        title: "What Is Your Budget?",
        options: [
          {
            value: 100,
            max: 6000,
            title: "$",
            icon: nextIcon,
            cardTitle: "Next",
            step: 50
          }
        ]
      },
      {
        title: "How Social/Outging Are You?",
        options: [
          {
            // ag eg  pia  drums violin saxo voca bass
            title: "Very Social",
            icon: socialIcon,
            countUpdates: [1, 0, 0, 0, 0, 0, 1, 0]
          },
          {
            title: "Normal",
            icon: normalIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            title: "Shy",
            icon: shyIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, -1, 0]
          },
          {
            title: "People Are Overrated",
            icon: antisocialIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, -1, 0]
          }
        ]
      },
      {
        title: "Where Would You Want To Play?",
        options: [
          {
            // ag eg  pia  drums violin saxo voca bass
            title: "On The Concert Stage",
            icon: concertIcon,
            countUpdates: [0, 1, 1, 1, 1, 1, 1, 1]
          },
          {
            title: "At Parties Or Outdoor",
            icon: partiesIcon,
            countUpdates: [2, 0, -1, 0, 0, 0, 1, 0]
          },
          {
            title: "Everywhere",
            icon: globeIcon,
            countUpdates: [1, 1, 0, 0, 1, 1, 1, 0] // Subject to change
          },
          {
            title: "At Home",
            icon: homeIcon,
            countUpdates: [1, 1, 1, 1, 1, 1, -1, 1] // Subject to change
          }
        ]
      },
      {
        title: "How Loud Can You Tolerate Sound?",
        options: [
          {
            value: 1,
            max: 3,
            title: ["Quiet", "Medium", "Loud", "Very Loud"],
            icon: nextIcon,
            cardTitle: "Next",
            step: 1
          }
        ]
      },
      {
        title: "How Often Do You Travel?",
        options: [
          {
            // ag eg  pia  drums violin saxo voca bass
            title: "Often",
            icon: planeIcon,
            countUpdates: [1, -1, -1, -1, 1, 1, 1, -1]
          },
          {
            title: "Sometimes",
            icon: suitcaseIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            title: "Rarely",
            icon: calendarIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            title: "Never",
            icon: homeIcon,
            countUpdates: [0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      {
        title: "You Will Like Learning...",

        /*
           This will represent the result screen.

           Each option is a different instrument that the user should learn.
           An option is rendered based on the highest instrument count in the array.

           Instead of count updates an instrument is going to have the content (some introductory text),
           and two links (one for the course and one for the gear)


        */
        options: [
          [
            {
              // ag eg  pia  drums violin saxo voca bass
              title: "Acoustic Guitar",
              icon: acousticIcon,
              content: 0
              // content indicates which text element should be selected from resultText array of div containing styled texts
            },
            {
              title: "Electric Guitar",
              icon: electricIcon,
              content: "Hello"
            },
            {
              title: "Piano",
              icon: pianoIcon,
              content: "Hello"
            },
            {
              title: "Drums",
              icon: drumsIcon,
              content: "Hello"
            },
            {
              title: "Violin",
              icon: violinIcon,
              content: "Hello"
            },
            {
              title: "Saxophone (Alto)",
              icon: saxophoneIcon,
              content: "Hello"
            },
            {
              title: "Vocals",
              icon: vocalsIcon,
              content: "Hello"
            },
            {
              title: "Bass Guitar",
              icon: bassIcon,
              content: "Hello"
            }
          ]
        ]
      }
    ],
    /*  
  instrumentCount

  -> Contains instrument counts which are all initialized to be 0. 
     Starting from 0 --> 8, each index corresponds to an instument.
     
     0 - Acoustic Guitar
     1 - Electirc Guitar
     2 - Piano
     3 - Drums
     4 - Violin
     5 - Saxophone (alto)
     6 - Vocals
     7 - Bass Guitar
  
  */
    instrumentCount: [0, 0, 0, 0, 0, 0, 0, 0],

    currentQuestion: 0
  };

  /* 
  
  
-----Handlers-------------

Two basic handlers to increment or decrement 
an instrument in the instrumentCount array.

They will be called as an onClick for each option,
and can be called multiple times per each option 
depending on the logic of the option. 

Their inputs are:

instruments -> A number from 0 - 7 to indicate which instrument
               should be incremented or decremented.

magnitude -> A positive number that multiplies the incrementation/decrementation.
             (Provide more weighing to some options if they are deal breaking).
        
             
             


*/

  handleIncrement = (instrument, magnitude) => {
    this.setState(state => {
      // create a shallow copy of the array
      const tempCount = [...state.instrumentCount];
      // increment the desired instrument
      tempCount[instrument] += 1 * magnitude;
      // update the state
      return {
        instrumentCount: tempCount
      };
    });
  };

  handleDecrement = (instrument, magnitude) => {
    this.setState(state => {
      // create a shallow copy of the array
      const tempCount = [...state.instrumentCount];
      // increment the desired instrument

      tempCount[instrument] -= 1 * magnitude;
      // update the state
      return {
        instrumentCount: tempCount
      };
    });
  };

  /*
 Iterate Handler 

 Each option has an array of numbers ranging from -1 to 1 
 This handler goes through the countUpdates array and
 decides which instrument counts need to be updated.

 This also updates the currentQuestion count as 
 this is called when an option is clicked. 
 

  */

  iterateHandler = array => {
    // Loop through
    for (let x = 0; x < 8; x++) {
      if (array[x] === 0) {
        // check for instruments which don't need an update
        continue;
      }

      if (array[x] > 0) {
        // Increment instrument count

        this.handleIncrement(x, array[x]);
      } else {
        // Decrement instrument count

        this.handleDecrement(x, array[x] * -1);
      }
    }

    this.updateCurrentQuestion();
  };

  /* 
  
  updateCurrentQuestion
  
  This handler gets called by IterateHandler when
  an option is click. This will increment the question count. 
  
  
  */
  updateCurrentQuestion = () => {
    this.setState(state => {
      // Update current question
      return {
        currentQuestion: this.state.currentQuestion + 1
      };
    });
  };

  /* 
  
  handleSliderChange
  
  This handler gets called by a slider to handle value change

  */

  handleSliderChange = val => {
    this.setState(state => {
      // create a shallow copy of the array
      const tempQuestions = [...state.questions];
      // increment the desired instrument
      tempQuestions[this.state.currentQuestion].options[0].value = val;
      // update the state
      return {
        questions: tempQuestions
      };
    });
  };

  /* 

  nextHandler 

  This is a handler for the Next button on Slider questions. 

  If this is a slider for Room Size or Sound Tolerance question then It computes the logic of the selected 
  value and updates the instruments count using the iterate handler 
  
  If this is for the budget slider, it generates affiliate links within the budget range
  
  Also Updates the current question number

*/
  nextHandler = () => {
    let value = this.state.questions[this.state.currentQuestion].options[0]
      .value;

    if (this.state.currentQuestion === 3) {
      if (value === 0) {
        // ag eg  pia  drums violin saxo voca bass
        this.iterateHandler([0, 0, -1, -2, 0, 0, 0, 0]);
      } else if (value === 1) {
        this.iterateHandler([0, 0, 0, -1, 0, 0, 0, 0]);
      } else {
        this.iterateHandler([0, 0, 0, 0, 0, 0, 0, 0]);
      }
    } else if (this.state.currentQuestion === 5) {
      if (value <= 250) {
        this.iterateHandler([1, 1, 1, -1, 1, 1, 1, 1]);
      } else if (value <= 1000) {
        this.iterateHandler([1, 1, 0, 1, 1, 1, 1, 1]);
      }
    } else if (this.state.currentQuestion === 8) {
      if (value <= 1) {
        // ag eg  pia  drums violin saxo voca bass
        this.iterateHandler([0, 0, 0, -1, 0, 0, 0, 0]);
      } else {
        this.iterateHandler([0, 0, 0, 0, 0, 0, 0, 0]);
      }
    }

    this.updateCurrentQuestion();
  };

  render() {
    //clean up variable readability

    let currentOptions = this.state.questions[this.state.currentQuestion]
      .options;

    let max = Math.max(...this.state.instrumentCount);

    let instrumentResult = this.state.instrumentCount.indexOf(max);

    // The backgrounds are gradients and change with each question

    let backgroundImage = [
      "linear-gradient(to right top, rgb(253, 244, 151), rgb(186, 242, 165), rgb(120, 233, 194), rgb(60, 219, 224), rgb(64, 200, 241), rgb(77, 197, 244), rgb(91, 194, 247), rgb(105, 191, 248), rgb(82, 207, 254), rgb(65, 223, 255), rgb(70, 238, 250), rgb(95, 251, 241))",
      "linear-gradient(to right top, rgb(166, 192, 254), rgb(189, 179, 246), rgb(212, 164, 230), rgb(232, 149, 207), rgb(244, 137, 177), rgb(253, 140, 148), rgb(250, 149, 121), rgb(236, 163, 101), rgb(210, 191, 104), rgb(175, 216, 133), rgb(134, 236, 183), rgb(95, 251, 241))",
      "linear-gradient(-20deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%)",
      "linear-gradient(-60deg, rgb(255, 88, 88) 0%, rgb(240, 152, 25) 100%)",
      "linear-gradient(to top, rgb(251, 194, 235) 0%, rgb(166, 193, 238) 100%)",
      "linear-gradient(to left top, rgb(78, 48, 164), rgb(0, 94, 194), rgb(0, 123, 190), rgb(0, 145, 167), rgb(0, 163, 142), rgb(0, 173, 137), rgb(0, 182, 128), rgb(31, 191, 116), rgb(0, 198, 140), rgb(0, 205, 163), rgb(0, 212, 184), rgb(0, 218, 204)) ",
      "linear-gradient(-180deg, rgb(105, 234, 203) 0%, rgb(234, 204, 248) 48%, rgb(102, 84, 241) 100%)",
      "linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%)",
      "linear-gradient(to right top, rgb(166, 192, 254), rgb(189, 179, 246), rgb(212, 164, 230), rgb(232, 149, 207), rgb(244, 137, 177), rgb(253, 140, 148), rgb(250, 149, 121), rgb(236, 163, 101), rgb(210, 191, 104), rgb(175, 216, 133), rgb(134, 236, 183), rgb(95, 251, 241))",
      "linear-gradient(to top, rgb(251, 194, 235) 0%, rgb(166, 193, 238) 100%)",
      "url(" + concertBackground + ")"
    ];

    let questionTitle = this.state.questions[this.state.currentQuestion].title;

    let sliderDisplayLeft = "flex";

    if (
      this.state.currentQuestion === 3 ||
      this.state.currentQuestion === 5 ||
      this.state.currentQuestion === 8 ||
      this.state.currentQuestion === 10
    ) {
      sliderDisplayLeft = "none";
    } else {
      sliderDisplayLeft = "flex";
    }

    /*   
    
    optionCard generates card from the options array based on the current question. 

    The option cards are rendered in right and left columns (based on their index i.a Even indexed go left, odd indexd go right)

    The left column is usually disabled for slider questions (as there only needs one option card screen) and also for the result screen.
    
    */

    let optionCardLeft = (
      <div className="optionColumn" style={{ display: sliderDisplayLeft }}>
        {this.state.questions[this.state.currentQuestion].options.map(
          (option, index) => {
            if (this.state.currentQuestion === 3) {
              return null;
            } else if (index % 2 === 0) {
              return (
                <OptionCard
                  onClick={() => this.iterateHandler(option.countUpdates)}
                  src={option.icon}
                  title={option.title}
                  key={option.title}
                />
              );
            }
          }
        )}
      </div>
    );

    let style = {};

    let optionClassName = "optionColumn";

    if (
      this.state.currentQuestion === 3 ||
      this.state.currentQuestion === 5 ||
      this.state.currentQuestion === 8
    ) {
      optionClassName = "sliderColumn"
     
    } else if (this.state.currentQuestion === 10) {
      optionClassName = "resultColumn";
    }
    //Switch styling for result screen!

    let optionCardRight = (
      <div className={optionClassName} style={style}>
        {this.state.questions[this.state.currentQuestion].options.map(
          (option, index) => {
            if (this.state.currentQuestion === 3) {
              return (
                <Slider
                  // For the slider
                  key={this.state.currentQuestion}
                  max={option.max}
                  value={option.value}
                  onChange={(event, val) => this.handleSliderChange(val)}
                  title={option.title[currentOptions[0].value]}
                  // For the option card
                  src={option.icon}
                  optionTitle={option.cardTitle}
                  onClick={this.nextHandler}
                  step={option.step}
                />
              );
            } else if (this.state.currentQuestion === 5) {
              return (
                <Slider
                  // For the slider
                  key={this.state.currentQuestion}
                  max={option.max}
                  value={option.value}
                  onChange={(event, val) => this.handleSliderChange(val)}
                  title={option.value + option.title}
                  // For the option card
                  src={option.icon}
                  optionTitle={option.cardTitle}
                  onClick={this.nextHandler}
                  step={option.step}
                />
              );
            } else if (this.state.currentQuestion === 8) {
              return (
                <Slider
                  // For the slider
                  key={this.state.currentQuestion}
                  max={option.max}
                  value={option.value}
                  onChange={(event, val) => this.handleSliderChange(val)}
                  title={option.title[currentOptions[0].value]}
                  // For the option card
                  src={option.icon}
                  optionTitle={option.cardTitle}
                  onClick={this.nextHandler}
                  step={option.step}
                />
              );
            } else if (this.state.currentQuestion === 10) {
              let result = option[instrumentResult];
              return (
                <ResultScreen
                  title={result.title}
                  icon={result.icon}
                  instrument={instrumentResult}
                  value={this.state.questions[5].options[0].value}
                />
              );
            } else if (index % 2 !== 0) {
              return (
                <OptionCard
                  onClick={() => this.iterateHandler(option.countUpdates)}
                  src={option.icon}
                  title={option.title}
                  key={option.title}
                />
              );
            }
          }
        )}
      </div>
    );

    return (
      <div
        className="App"
        style={{
          whiteSpace: "pre-wrap",
          backgroundImage: backgroundImage[this.state.currentQuestion],
          backgroundSize: "cover"
        }}
      >
        <h1 className="questionTitle">{questionTitle}</h1>

        <div className="optionScreen">
          {optionCardLeft}
          {optionCardRight}
        </div>
        <ProgressBar
          display={this.state.currentQuestion === 10 ? "none" : "auto"}
          progress={(this.state.currentQuestion / 10) * 100}
          width={(this.state.currentQuestion / 10) * 100}
        />
      </div>
    );
  }
}

export default App;
