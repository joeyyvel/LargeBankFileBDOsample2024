import "../apply/SearchStyle.css";
import searchPic from "../../images/search-icon.png";
const Search = () => {
  return (
    <>
      <body id="search">
        <div className="searchDiv">
          <img src={searchPic} width={29} height={29} alt="" />
          <input type="search" id="mySearch" />
        </div>
      </body>
    </>
  );
};

export default Search;
