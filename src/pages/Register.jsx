import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'


const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

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
          <FaUser /> Registrate !!!
        </h2>
        <p>Por favor crea una cuenta</p>
      </section>
      <section className="form">
        <form>
          <fieldset>
            <legend>Escribe tus datos correctamente</legend>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Escribe tu nombre"
                onChange={onChange} />
            </div>
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
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Password</label>
              <input
                className="form-control"
                type="password"
                name="password2"
                id="password2"
                value={password2}
                placeholder="Confirma tu contraseña"
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

export default Register