import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';



function App() {
    return (

        <div className = "App" >
      
            <Addtodo/>
             <Todolist/>
             
        </div>
    );
}

export default App;