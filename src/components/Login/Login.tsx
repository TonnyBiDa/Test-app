import PageContainer from '../../UI/PageContainer/PageContainer'
import Card from '../../UI/Card/Card'
import style from './Login.module.css'

const Login = () => {
    return (
        <PageContainer>
            <Card className={style.login}>
                <form action="">this is login form</form>
            </Card>
        </PageContainer>
    )
}

export default Login
