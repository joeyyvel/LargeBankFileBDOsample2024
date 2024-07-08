import "../apply/SearchStyle.css";
import searchPic from "../../images/search.png";
import NavbarOne from "../../NavbarOne";
import NavbarTwo from "../../NavbarTwo";
const Search = () => {
  return (
    <>
      <body id="search">
        <NavbarOne />
        <NavbarTwo />
        <div className="searchDiv">
          <img src={searchPic} width={30} height={30} alt="" />
          <input
            type="search"
            placeholder="How can we help you?"
            id="mySearch"
            className="mySearchClass"
          />
        </div>
      </body>
    </>
  );
};

export default Search;
