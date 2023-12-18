import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import "./DetalhesEvento.css";
import api, { commentaryEventResource, eventsResource } from "../../Services/Service";
import Title from "../../components/Title/Title";
import NextEvent from "../../components/NextEvent/NextEvent";
import Table from "../../pages/DetalhesEvento/TableComments/TableComments";
import { UserContext } from "../../context/AuthContext";



const DetalhesEvento = () => {

  const { idEvento } = useParams();

  const {userData} = useContext(UserContext);

  const [eventoBuscado, setEventoBuscado] = useState([]);

  const [commentaries, setCommentaries] = useState([]);

  const [todosComentariosListados, setTodosComentariosListados] = useState([]);

  const [comentariosAdmListados, setComentariosAdmListados] = useState([]);


  async function getEvento() {
    const promise = await api.get(`${eventsResource}/${idEvento}`);
    setEventoBuscado(promise.data);
    console.log("Evento: " + promise.data);
    if (userData.role === "Administrador") {
      console.log(idEvento);
      const promise = await api.get(`/ComentariosEvento?id=${idEvento}`);
      setCommentaries(promise.data);
      console.log("comentario");
      console.log(promise.data);
    }
    if (userData.role === "Comum") {
      const promise2 = await api.get(`${commentaryEventResource}?id=${idEvento}`)
      setCommentaries(promise2.data);
     
      console.log(promise2.data);
    }
  }

  // async function getEvento() {
   
  // }

  async function allComentaries () {
    const promise = await api.get(commentaryEventResource + `?id=` +  idEvento);
    const dados = promise.data;

    setTodosComentariosListados(dados);
  }

  // async function admComentaries () {
  //   const promise = await api.get(comentariosAdmListados + "?id=" + idEvento);
  //   const dados = promise.data;

  //   setComentariosAdmListados(dados);
  // }

  useEffect(() => {

    getEvento();
    allComentaries();
    // admComentaries();

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

      <section className="lista-eventos-section">
        <Container>
          <Title
            additionalClass="comments-evento-section"
            titleText={"Comentários"}
            color={"white"}
          />

          <Table 

           dados={commentaries} 
          
          />  
        </Container>
      </section>

    </MainContent>
  );
};

export default DetalhesEvento;
