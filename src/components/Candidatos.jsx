import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeCandidato, setMoveToSend } from "../store/candidatosSlice";
import { Link } from "react-router-dom";
import Trabajador from "./Trabajador";

function Candidatos() {
  const candidatos = useSelector((state) => state.candidatos.candidatos);
  const dispatch = useDispatch();

  const handleRemoveCandidato = (id) => {
    dispatch(removeCandidato(id));
  };

  const handleSetSelect = (event, id) => {
    dispatch(
      setMoveToSend({
        id: id,
        moveToSend: event.target.value,
      })
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Candidatos</h1>
        <Link to={"/"}>
          <button className="btn btn-primary">Regresar</button>
        </Link>
      </div>
      <div className="d-flex flex-wrap gap-1">
        {candidatos.map((candidato) => {
          return (
            <Trabajador
              key={candidato.id}
              candidato={candidato}
              handleRemoveCandidato={handleRemoveCandidato}
              handleSetSelect={handleSetSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Candidatos;
