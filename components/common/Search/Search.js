import Styles from "./Search.module.css";
import Image from "next/image";
import SearchIcon from "../../../public/Assets/SearchIcon.png";
import { useHomePageContext } from "@/contexts/HomePageContext";
import { filterData } from "../Filter/Filter";
import { Array } from "@/components/HomePageComponents/Menu/Menu";

const Search = () => {
  const { SetfilteredArray } = useHomePageContext();
  const { searchText, SetsearchText } = useHomePageContext();
  const handleChange = (e) => {
    const updatedData = filterData(e.target.value, Array);
    SetfilteredArray(updatedData);
  };
  return (
    <div className={Styles.searchContainer}>
      <Image className={Styles.searchIcon} src={SearchIcon} />
      <input
        className={Styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          SetsearchText(e.target.value);
          handleChange(e);
        }}
      />
    </div>
  );
};

export default Search;
