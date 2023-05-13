import styled from "styled-components";
import { Link } from "react-router-dom";
import useInput from "../Hooks/useInput";

const SearchWrapper = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100vw;
  height: 100vh; */
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;

function Search(props) {
  const List = [
    "서울",
    "부산",
    "대구",
    "서산",
    "부천",
    "대전",
    "부에노스 아이레스",
    "울산",
  ];

  const [keyword, setKeyword] = useInput("");

  return (
    <>
      <SearchWrapper>
        <h1>도시</h1>
        <input
          value={keyword}
          onChange={setKeyword}
          placeholder="어느 도시가 궁금하세요?"
        />
        {keyword === ""
          ? null
          : List.filter((v) => v.includes(keyword.toLowerCase())).map(
              (v, i) => (
                <>
                  <Link to={`/place/${v}`} key={i}>
                    {v}
                  </Link>
                  <button onClick={() => props.setCities(v)}>+</button>
                </>
              )
            )}
        <hr />
      </SearchWrapper>
    </>
  );
}

export default Search;