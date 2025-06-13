import Container from './components/Container'
import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Fieldset from './components/Fieldset'
import Label from './components/Label'
import Input from './components/Input'
import ErrorText from './components/ErrorText'
import Button from './components/Button'
import Form from './components/Form'
import { ErrorMessage, Formik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Por vavor, informe o seu nome!'),
  email: Yup.string()
    .email('Por favor, insira um e-mail válido!')
    .required('Por favor, informe seu e-mail!'),
  password: Yup.string()
    .min(8, 'A senha deve possuir o mínimo de 8 caracteres!')
    .required('Por favor, informe uma senhe para o seu cadastro!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As duas senhas devem ser iguais!')
    .required('Pro favor, confirme sua senha!'),
})

function App() {

  const createUser = (values, { resetForm }) => {
    console.log('Formulário submetido: ', values)

    const user = values
    delete user.confirmPassword

    axios.post('http://localhost:3000/users', user)
      .then(() => {
        alert('Usuário foi cadastrado com sucesso!')
        resetForm()
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário', error)
      })
  }

  const initialValues = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>
          Cadastro
        </Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={createUser}
          validationSchema={validationSchema}
        >
          <Form>
            <Fieldset>
              <Label>
                Nome
              </Label>
              <Input name="name" id="name" />
              <ErrorMessage name='name' component={ErrorText} />
              {/* <ErrorText>
                Nome é obrigatório
              </ErrorText> */}
            </Fieldset>
            <Fieldset>
              <Label>
                E-mail
              </Label>
              <Input name="email" type="email" id="email" />
              <ErrorMessage name='email' component={ErrorText} />
            </Fieldset>
            <Fieldset>
              <Label>
                Senha
              </Label>
              <Input name="password" type="password" id="password" />
              <ErrorMessage name='password' component={ErrorText} />
            </Fieldset>
            <Fieldset>
              <Label>
                Confirme sua senha
              </Label>
              <Input name="confirmPassword" type="password" id="confirmPassword" />
              <ErrorMessage name='confirmPassword' component={ErrorText} />
            </Fieldset>
            <Button type="submit">
              Enviar
            </Button>
          </Form>
        </Formik>
      </Container>
    </>
  )
}

export default App
