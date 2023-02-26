import './App.css'
import Login from './components/Login/Login'
import PageContainer from './UI/Card/PageContainer/PageContainer'

const App = () => {
    return (
        <div className="App">
            <PageContainer>
                <Login />
            </PageContainer>
        </div>
    )
}

export default App
