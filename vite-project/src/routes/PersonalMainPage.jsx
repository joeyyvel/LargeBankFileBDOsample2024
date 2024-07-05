import personalPic from "../components/images/welcomeToBDOpersonal.png";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";

const PersonalMainPage = () => {
  return (
    <>
      <NavbarOne />
      <NavbarTwo />
      <div>PersonalMainPage</div>
      <div>
        <img src={personalPic} alt="" />
      </div>
    </>
  );
};

export default PersonalMainPage;
