import styled from "styled-components"

export const Carta = ({name, topics, description, link}) => {

  return (
      <CartaContainer
        href={link}
      >
        <img src="https://i.redd.it/zw7bn5g9nsq51.jpg" alt="pollo" />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div>
          {
            topics.map((topic,i)=>(
              <p key={i}>{topic}</p>

            ))
          }
        </div>
      </CartaContainer>
  )
}

const CartaContainer = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  border-radius: 5px;
  overflow: hidden;

  transition: all 0.1s ease-in-out 0s;
  cursor: pointer;
  text-decoration: none;
  color: var(--white);
  img {
    width:100%;
    height: 200px;
    object-fit: cover;
    
  }
  div:first-of-type {
    padding: 10px;
    h3 {
      font-size: 1.8rem;
    }
    p {
      margin-top: 10px;
      font-weight: 300;
      text-align: justify;
      font-size: 1.2rem;
    }
  }
  div:last-of-type {
    display: flex;
    padding: 10px;
    justify-content: start;
    gap: 10px;
    p {
      background-color: var(--amethyst);
      font-weight: 300;
      border-radius: 5px;
      padding: 5px;
      font-size: 1.2rem;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
`;