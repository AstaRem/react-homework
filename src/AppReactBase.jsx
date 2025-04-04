import './App.css';
import Greeting from './Components/Greeting.jsx';
import Subtitle from './Components/Subtitle.jsx';
import Title from './Components/Title.jsx';
import StoryDescription from './Components/StoryDescription.jsx';
import SecondStoryDescription from './Components/SecondStoryDescription.jsx';


function App() {

  // function randNum(min, max) {
  //   const minCeiled = Math.ceil(min);
  //   const maxFloored = Math.floor(max);
  //   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  // }
  

  return (


    <>
    <Greeting />
    <Title titleText="Šitas puslapis skirtas zuikiams, zebrams ir bebrams, bus ir grybų" />
    <Subtitle colorNum={'1'}/>
    <Subtitle colorNum={'2'}/>
    <StoryDescription storyTitle="Čia bus pasakojimas apie įvairius žvėris" storySubtitle="Kuo zebrai susiję su zuikiais ir bebrais?"/>
    <SecondStoryDescription storyTitle="O čia papasakosime apie grybus" storySubtitle="Kuo grybai susiję su žvėrimis?" titleColor='#7D1C4A'/>
    </>
  )
}

export default App
