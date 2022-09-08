import './App.css';
import {PageMainContainer} from "./component/mainPage/pageMain"

function App(props) {
  return (
   <div>
    <PageMainContainer store={props.store}/>
   </div>
  );
}

export default App;
