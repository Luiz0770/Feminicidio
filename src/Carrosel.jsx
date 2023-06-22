import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/769767224911069236/1121241830474924164/Sem_Titulo-2.jpg"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;