import { useState } from 'react';

export default function Cadastro() {
  const [formData,setFormData] = useState( {
    nome:"",
    email:"",
    cidade:"",
   } );

   const [pessoas, setPessoas] = useState([]);

  return (
    <form action="#" method="post" onSubmit={(event) => {
      event.preventDefault();
      alert(formData.nome);
      setPessoas([...pessoas, formData]);
    }}>
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="nome">Informe seu nome abaixo:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={formData.nome}
            onChange={(event) => setFormData( {...formData, nome: event.target.value})}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Informe seu e-mail abaixo:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(event) => setFormData( {...formData, email: event.target.value})}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cidade">Informe sua cidade:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={formData.cidade}
            onChange={(event) => setFormData( {...formData, cidade: event.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
          </button>
      </fieldset>

      <ul>
        {pessoas.map( pessoa => <li>{pessoa.nome}</li> )}
      </ul>

    </form>
  );
}
