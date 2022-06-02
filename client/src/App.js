import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Information from './components/Information';
import Contributors from './components/Contributors';
import Trial from './components/Trial';
import './App.css'

const theme = {
  bgColors: {
    nav: 'rgba(19, 157, 212, 1)'//'#7dcfff'
  },
  fontColors: {
    nav: '#000'
  }
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme = {theme}>
        <Main id="main"/>
        <Information head= "About" body="Inspired by Brainf*ck, four fellow duckgramers decided to make their own duckgraming language. Thus, BRAINDUCK WAS BORN! One duck brain is tiny, but four are . . . not so tiny. Our future ducklings will be so proud." id="about"/>
        <Contributors blueBg="1" id="contributors"/>
        <Information head="Code" body="You think we're dumb enough to give you our precious code!? Oh quack? You have food . . . okay. https://gitlab.com/HolyChicken99/quack-lang" id="code"/>
        <Trial blueBg="1" id="tryIt"/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
