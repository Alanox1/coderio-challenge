import './App.css';
import { Stack} from "@chakra-ui/react"
import {SearchBox} from "./components/SearchBox"
import Logo from "./components/Logo"
function App() {
  return (
    <>
    <Stack as="header" 
        direction="column"
        justifyContent="center"
        margin="0px auto"
        alignItems="center"
        marginTop="100px">
     <Logo />
     <h1>Vamos a empezar, busca un timezone...</h1>
   </Stack>
   
   <SearchBox as="main"/>
    </>
   
  );
}

export default App;
