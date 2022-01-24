import { Box, SvgIcon } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import Cards from "./card";
import Cards2 from "./card2";

const Usefetch = () => {
  const [monacemebi, setMonacemebi] = useState(null);
  const [page, setPage] = useState(1);
  const [array, setArray] = useState([]);
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMonacemebi(data);
        console.log(data);
      });
  }, []);
  const remove = (id) => {
    const x = array.filter((e) => e.id !== id);
    setArray(x);
  };
  const addItem = (object, count) => {
    let isInArray = false;
    console.log(array);
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === object.id) {
          array[i].raodenoba = count;

          isInArray = true;
          console.log(count);
        }
      }
    }
    if (!isInArray) {
      setArray((a) => [...a, { ...object, raodenoba: count }]); //dzvel arrays davamatot axali arai a inaxavs arrays monacemebs
    }
    console.log("ელემენტი დაემატა");
  };
  return (
    <>
      <Box>
        <HomeIcon onClick={() => setPage(1)} />
        <ShoppingCartIcon onClick={() => setPage(2)} />
      </Box>
      <>
        {monacemebi && (
          <>
            {page === 1 &&
              monacemebi.map((e) => (
                <Cards
                  key={e.id}
                  object={e}
                  setArray={setArray}
                  addItem={addItem}
                />
              ))}
            {page === 2 && array.length > 0
              ? array.map((e) => (
                  <Cards2
                    key={e.id}
                    object={e}
                    setArray={setArray}
                    remove={remove}
                  />
                ))
              : "ცარიელია"}
          </>
        )}
      </>
    </>
  );
};
export default Usefetch;
