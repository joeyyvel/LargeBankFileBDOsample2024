import PersonalMainPage from "../../routes/PersonalMainPage";
import AccountsPic from "../images/Accounts Overview Banner.png";
import "./AccountsStyle.css";
const Accounts = () => {
  return (
    <>
      <PersonalMainPage />
      <body id="accounts">
        <div className="leftPanel">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            laborum ad maiores, ratione facere corrupti omnis, asperiores vel
            similique exercitationem quibusdam ut minus cupiditate fuga. Libero
            eius qui quam at, quas sunt non necessitatibus fugit sapiente
            voluptates magni aspernatur nihil, cumque odio optio obcaecati quod
            cum corrupti, voluptate ab nisi.
          </p>
        </div>
        <div className="rightPanel">
          <img src={AccountsPic} alt="" />
        </div>
      </body>
    </>
  );
};

export default Accounts;
