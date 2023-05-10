import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  //?La funcion onChance recibe un evento (e) y lo va guardando, letra por letra, los datos
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h2>
          <FaSignInAlt /> Login
        </h2>
        <p>Por favor teclea tus credenciales</p>
      </section>
      <section className="form">
        <form>
          <fieldset>
            <legend>Inicia tu sesión en Oura Movies </legend>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="email@example.com"
              onChange={onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Escribe tu contraseña"
              onChange={onChange} />
            </div><br /> <br />
            <div className="d-grid gap-2">
              <button className="btn btn-lg btn-primary" type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Login