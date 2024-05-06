/* eslint-disable react/prop-types */

function Trabajador({ candidato, handleSetSelect, handleRemoveCandidato }) {
  return (
    <div
      key={candidato.id}
      className="card  text-white"
      style={{ width: "200px" }}
    >
      <img src={candidato.picture} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {candidato.name},{candidato.last}
        </h5>
        <p className="card-text">{candidato.location.city}</p>
        <p className="card-text">({candidato.location.country})</p>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(event) => handleSetSelect(event, candidato.id)}
          value={candidato.moveToSend}
        >
          <option defaultValue={""}>Selecciona</option>
          <option value="America">America</option>
          <option value="Europa">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>
        </select>
        <button
          onClick={() => handleRemoveCandidato(candidato.id)}
          className="btn btn-danger mt-3"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Trabajador;
