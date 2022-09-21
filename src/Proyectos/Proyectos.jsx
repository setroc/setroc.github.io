import { useEffect, useState } from "react";
import styled from "styled-components"
import { Carta } from "./Carta";

const api = `https://api.github.com/users/setroc/repos`;

export const Proyectos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
      fetch(api)
        .then(body  => body.json())
        .then(data => setRepos(data));
  }, []);
  
  if ( !repos.length ) {
    return <Cargando />
  }

  return (
    <Container>
      <div>
        <Button>Todos ({repos.length})</Button>
      </div>
      <div>
        {
          repos.map(repo=>(
            <Carta 
              key={repo.id} 
              name={repo.name}
              topics={repo.topics}  
              description={repo.description}
              link={repo.html_url}
            />
          ))
        }
      </div>
    </Container>
  )
}

const Cargando = () => {
  return (
    <div>
      <h2>Cargando ...</h2>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: var(--amethyst--very--darken);
  color: white;
  padding: 20px;
  height: 80%;
  overflow-y: scroll;

  >div:first-of-type {
    margin-bottom: 30px;
  }
  >div:last-of-type {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: var(--amethyst);
  color: var(--white);
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;