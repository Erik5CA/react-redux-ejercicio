/* eslint-disable react/prop-types */

function Candidato({ candidato, removeCandidato, handleAddCandidato }) {
  return (
    <div className="card mb-3" style={{ width: "49%", height: "100%" }}>
      <div className="row g-0 d-flex align-items-center w-100">
        <div className="col-md-2">
          <img
            src={candidato.picture}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-white">
              {candidato.title} {candidato.name} {candidato.last}
            </h5>
            <p className="card-text">
              Ubicacion: {candidato.location.city} ({candidato.location.country}
              )
            </p>
            <p className="card-text">{candidato.email}</p>
            <p className="card-text">{candidato.phone}</p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column gap-3">
          <button
            className="btn btn-danger"
            onClick={() => removeCandidato(candidato.id)}
          >
            Ocultar
          </button>
          <button
            className="btn btn-success"
            onClick={() => handleAddCandidato(candidato.id)}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Candidato;
