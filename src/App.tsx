import './App.css'
import Login from './components/Login/Login'
import { Provider } from 'react-redux'
import store from './store/index'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Login />
            </div>
        </Provider>
    )
}

export default App
