import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import "./DetalhesEvento.css"

const DetalhesEvento = () => {
  const { state /*tp*/ } = useParams();

  return (
    <>
    
    <MainContent>
      <Container>
      <table className="tbal-data">
        <title> titleText={state.nomeEvento}</title>

      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            IdEvento
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Tipo do Evento
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Descrição
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Data do Evento
          </th>
        </tr>
      </thead>

      <p>{state.idEvento}</p>
      <p>{state.idTipoEvento.titulo}</p>
      <p>{state.descricao}</p>
      <p>{state.dataEvento}</p>
      
      </table>

      </Container>
    </MainContent>
    </>
  );
};

export default DetalhesEvento;
