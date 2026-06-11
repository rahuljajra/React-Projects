import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Store from './utils/store';
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>

  );
}

export default App;
