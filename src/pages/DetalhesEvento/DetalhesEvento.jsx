import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import "./DetalhesEvento.css";
import api, { eventsResource } from "../../Services/Service";
import Title from "../../components/Title/Title";
import NextEvent from "../../components/NextEvent/NextEvent";

const DetalhesEvento = () => {
  const { idEvento } = useParams();

  const [eventoBuscado, setEventoBuscado] = useState({});

  async function getEvento() {
    const promise = await api.get(`${eventsResource}/${idEvento}`);
    setEventoBuscado(promise.data);
  }

  useEffect(() => {
    getEvento();
  }, []);
  return (
    <MainContent>
      <Container>
      <Title titleText={"Detalhes Evento"} />

      <NextEvent
        key={eventoBuscado.idEvento}
        title={eventoBuscado.nomeEvento}
        description={eventoBuscado.descricao}
        eventDate={eventoBuscado.dataEvento}
        idEvent={eventoBuscado.idEvento}
      />
      </Container>
    </MainContent>
  );
};

export default DetalhesEvento;
