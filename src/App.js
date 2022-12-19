import logo from './logo.svg';
import './css/App.css';
import PortofolioBox from './components/PortfolioBox';
import data from './assets/portfolio-data.json'
import { useState } from 'react';

// TODO:
// 1: Create Header
// 2: Create Button and image introduction
// 3: Write Introduction
// 4: Write Problem
// 5: Write Goals
// 6: Write Design
// 7: Write reflection
// 8: Do you may also like components

function App() {
  const [displayPortofolio, setPortfolio] = useState(data);

  return (
    <div className="App">
      <div className = "Header">
        <div className = "UpperHeader">
          <div className = "Logo">
             My Portfolio
          </div>
          <div className = "Menu">
            <div className = "Menu_Child">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/" className = "Hyperlink">
                Home
              </a>
            </div>
            <div className = "Menu_Child2">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/" className = "Hyperlink">
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className = "Introduction">
        <div className = "Button_Container">
          <div className = "TextBox_text">
            Storyboard
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Introduction
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            In this assignment, we were tasked to create personas to understand our 
            target user and their needs. We had to choose a company and replicate what a 
            storyboard would look like for the target company and specifically its app. 
            I chose the MBTA since it is widely used by a large demographic, and is a simple service to use.
            </p>
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Problem
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
          To understand our target customer, we had to come up with ways in which we can 
          understand how a user may want to use our product. In this case, the train service 
          of the MBTA was the focus. To do so, we needed to interview prospecting users, 
          understand how the app achieves the desires of the users, then highlight how the 
          app would be created around the user archetypes through a storyboard.
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Goals
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBoxGoal_Child">
            <p>
            The technical goals of this assignment are as follows:
            </p>
            <ul>
              <li>Interview 3 prospecting users and understand their goals and aspirations from the app</li>
              <li>Sketch out the MBTA app and highlight the affordances</li>
              <li>Create the persona archetypes</li>
              <li>Create the persona storyboard</li>
            </ul> 
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Design
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <b>
            Creating the interview questions:
            </b>
            <p>
            I first designed interview questions outlined below. These questions were then asked to 3 random users that tried using the app:
            </p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Questionnaire.png" className = "Basic_Image1"></img>
            </div>
            <div className = "TextBoxGoal_Child">
            <b>
            General Observations:            
            </b>
            <p>
            Afterwards, general observations were made while the people used the application. The general observations are summarized below:
            </p>
            <ul>
              <li>Most users were able to quickly move from ticket to scheduling through the application without stalling</li>
              <li>No users seem to need the help section</li>
              <li>There were no signs of explicit frustration from any of the users while using the application</li>
              <li>However, during scheduling ,suers were noted to click on many buttons and backtrack to previous pages</li>
            </ul> 
            </div>
            <div className = "TextBoxGoal_Child">
            <b>Survey Results:</b>
            <p>
            The survey results are outlined below:
            </p>
            <ul>
              <li>All users were students that went to see their friends in toher cities, or to go travel</li>
              <li>All users used MBTA as much as the nubmer of train rides that they take n ia month. 2 chose “3-5 times’ and 1 chose “5-9 times”.</li>
              <li>All users reported that the tickets were better than the physical kiosks</li>
              <li>2 users expressed their disappointment in using the scheduling app, indicating that it was “not intuitive” and “not easy to find specific times”</li>
              <li>All users indicated that the application was intuitive. All had no issues in regards to navigating through the ticketing section</li>
            </ul> 
            </div>
            <div className = "TextBox_Child">
            <b>Interactive components:</b>
            <p>The interactive components of the app were re-created on Figma and analyzed. Several features of the app that were analyzed are shown below:</p> 
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Hifi.png" className = "Basic_Image3"></img>
            </div>  
            <div className = "TextBox_Child">
            <b>Archetypes:</b>
            <p>Two types of persona archetypes are presented. The personas are provided with a brief description, then divided into 4 quadrants, 
              each depciting what a archetype would think, feel, say, and do.</p> 
              </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Archetypes.png" className = "Basic_Image4"></img>
            </div> 
            <div className = "TextBox_Child">
            <b>Storyboard:</b>
            <p>Finally, a persona (Rushing Ron) is chosen to be depicted on my storyboard comic to reflect the goal of the persona, and the journey of the persona in using the application to fulfil his goal.</p> 
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Comic.png" className = "Basic_Image1"></img>
            </div>           
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Reflection
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            This assignment has taught me how to understand my target audience and how to develop 
            an understanding of their needs for the app. I understand the importance of developing 
            a well designed story, which can then be implmeneted into an intuitive app like MBTA.
            </p>
            <p>
            I felt that my storyboard could be futher developed. For example, the comic could be more detailed 
            with larger typefont and better images. The archetypes could be more fleshed out to incorporate more 
            realistic ideas. Finally, I could interview more people to get a better sense of who uses the app. 
            </p>

          </div>
        </div>
      </div>

      <div className = "OtherProjects_Divider">
        <div className = "Other_ProjectsTitle">
          <div className = "Other_ProjectsTitle">
            <div className = "OtherProjectsTitle_Text">
            You May Also Like...
            </div>
          </div>
        </div>
        <div className = "Other_ProjectsComponents">
          <div className = "Other_ProjectsChild">
            {displayPortofolio.map((item)=> (
              <PortofolioBox
              item = {item}/>
            ))}
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
