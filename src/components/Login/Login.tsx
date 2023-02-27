import PageContainer from '../../UI/PageContainer/PageContainer'
import Card from '../../UI/Card/Card'
import style from './Login.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login = () => {
    return (
        <PageContainer>
            <Card className={style.login}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        className="float-end"
                    >
                        Login
                    </Button>
                </Form>
            </Card>
        </PageContainer>
    )
}

export default Login
