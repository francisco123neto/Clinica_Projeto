import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Cadastrar</h3>
        <div className="mb-3">
          <label>Primeiro Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Primeiro Nome"
          />
        </div>
        <div className="mb-3">
          <label>Ultimo Nome</label>
          <input type="text" className="form-control" placeholder="Ultimo Nome" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
        <p className="forgot-password text-right">
          Já possui registro <a href="/sign-in">Fazer Login?</a>
        </p>
      </form>
    )
  }
}