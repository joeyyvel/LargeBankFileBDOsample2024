import PersonalMainPage from "../../routes/PersonalMainPage";
import piaPicture from "../images/Pia Website_Cards Page Masthead.png";
import "./CardsStyle.css";
const Cards = () => {
  return (
    <>
      <PersonalMainPage />
      <body
        id="cards"
        style={{
          zIndex: "-1",
          position: "inherit",
        }}
      >
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fugit
            unde maxime nihil minus enim rem, odit laudantium obcaecati! Eius
            possimus praesentium ab quia aut dolore, nesciunt harum molestiae
            repellendus modi, magnam, reiciendis rerum quibusdam impedit?
            Perferendis magni, velit recusandae nobis maiores temporibus
            voluptatibus. Minima saepe id eligendi tenetur illo.
          </p>
        </div>
        <div>
          <img src={piaPicture} alt="" />
        </div>
      </body>
    </>
  );
};

export default Cards;
