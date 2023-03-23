import Header from "./components/Header";
import { useSelector } from 'react-redux';
import Title from "./components/Title";


function App() {

  let data = useSelector((state) => state.value);
 

  return (
    <>
        <Header/>
        <h1> {data} </h1>
        <Title/>
    </>
  );
}

export default App;
