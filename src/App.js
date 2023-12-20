import logo from './logo.svg';
import './App.css';
import { User } from './User';
import Home from './components/Home';
import { HomeContainer } from './containers/HomeContainer';


function App() {
    const data = {
        name: 'pratibha pradhan',
        age: 25
    }
    return (
        <div className="App">
            {/* <h1>App Component</h1> */}
            {/* <User data={data}/> */}
            {/* <Home /> */}
            <HomeContainer />
        </div>
    );
}

export default App;
