import styled from "styled-components"

export const Sobremi = () => {
  return (
    <Container>
      <img src="https://fancueva.com/wp-content/uploads/2009/01/shinjiikari01.jpg" alt="shinji"/>
      <div>
        <h2>Isaac Godínez Cortés</h2>
        <p>⚛️ React frontend developer, backend en NodeJS.</p>
        <div className="iconos">
          <a href="https://www.linkedin.com/in/isaac-god%C3%ADnez-cort%C3%A9s-44ba75188/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/setroc">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
      <div>
        <h2>Sobre mi</h2>
        <p>Soy Isaac como lo menciono más arriba 😜, tengo 23 años, originario de México 🇲🇽, actualmente estudiando ingeniería en sistemas computacionales, me encanta el desarrollo de software y el poder que da para solucionar problemas, no me enfrazco con un lenguaje de programación pues le doy más importancia a cómo resolver problemas que con qué, pero me gustan y tengo experiencia en lenguajes como C++, JavaScript y Python.</p>
        <p>En mis tiempos libres me gusta salir con mis amigos, escuchar música, leer y ver series/películas, me agrada bastante el género de terror, ciencia ficción y policiaco/asesinos seriales.</p>
      </div>
      
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: var(--amethyst--very--darken);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  color: white;
  padding: 20px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
  >div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: end;
    .iconos {
      margin-top: 10px;
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }
    .iconos i {
      font-size: 3rem;
      color: var(--amethyst);
      cursor: pointer;
    }
  }
  >div:last-of-type {
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  h2 {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
  p {
    font-size: 1.6rem;
    font-weight: 300;
    text-align: justify;
  }
`;