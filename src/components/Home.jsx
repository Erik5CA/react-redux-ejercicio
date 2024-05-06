import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCandidatos } from "../store/candidatosSlice";
import Candidato from "./Candidato";

function Home() {
  const [candidatos, setCandidatos] = useState([]);
  const listaCandidatos = useSelector((state) => state.candidatos.candidatos);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCadidatos = async () => {
      const resp = await fetch("https://randomuser.me/api/?results=6");
      const { results } = await resp.json();
      const candidatosNuevos = results.map((candidato) => ({
        name: candidato.name.first,
        last: candidato.name.last,
        title: candidato.name.title,
        email: candidato.email,
        phone: candidato.phone,
        picture: candidato.picture.large,
        id: candidato.login.uuid,
        location: {
          city: candidato.location.city,
          country: candidato.location.country,
        },
        moveToSend: "",
      }));
      setCandidatos(candidatosNuevos);
    };
    getCadidatos();
  }, []);

  const getOneCandidato = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=1");
    const { results } = await resp.json();
    const candidatoNuevo = results.map((candidato) => ({
      name: candidato.name.first,
      last: candidato.name.last,
      title: candidato.name.title,
      email: candidato.email,
      phone: candidato.phone,
      picture: candidato.picture.large,
      id: candidato.login.uuid,
      location: {
        city: candidato.location.city,
        country: candidato.location.country,
      },
      moveToSend: "",
    }));
    return candidatoNuevo[0];
  };

  const removeCandidato = async (id) => {
    const index = candidatos.findIndex((candidato) => id === candidato.id);
    const candidatosCopy = [...candidatos];
    candidatosCopy[index] = await getOneCandidato();
    setCandidatos(candidatosCopy);
  };

  const handleAddCandidato = async (id) => {
    const candidatoToAdd = candidatos.find((candidato) => id === candidato.id);
    await removeCandidato(id);
    dispatch(addCandidatos(candidatoToAdd));
  };

  return (
    <>
      <div className="bg-dark text-white d-flex justify-content-between">
        <h1>Candidatos</h1>

        <Link to="/candidatos">
          <button className="btn btn-primary">Ver Candidatos</button>
        </Link>
      </div>
      <div className="container text-white d-flex flex-wrap gap-3">
        {candidatos?.map((candidato) => (
          <Candidato
            key={candidato.id}
            candidato={candidato}
            removeCandidato={removeCandidato}
            handleAddCandidato={handleAddCandidato}
          />
        ))}
      </div>
      <div className="text-white">
        <h2>Candidatos agregados</h2>
        <div className="d-flex flex-col gap-3 w-100">
          {listaCandidatos?.map((candidato) => (
            <button key={candidato.id} className="btn btn-outline-primary">
              {candidato.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
