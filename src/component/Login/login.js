import { Component } from 'react'
import styleRegister from './styleRegister.module.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  hendleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ name: '', email: '', password: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styleRegister.demoForm}>
        <div className={styleRegister.container}>
         
          <div className={styleRegister.formGroup}>
            <label htmlFor="login">Почта</label>
            <input
              type="login"
              className={styleRegister.formControl}
                        name="password"
                        onChange={this.hendleNameChange }
            />
          </div> <div className={styleRegister.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={styleRegister.formControl}
                        name="password"
                        onChange={this.hendleNameChange }
            />
          </div>
        </div>
        <button type="submit" className={styleRegister.registerbtn}>
          Войти
        </button>
      </form>
    )
  }
}
export default LoginForm;
