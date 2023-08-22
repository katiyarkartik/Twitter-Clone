import React from "react";
import axios from "axios";
const Commentslist = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
    
  const [coms, setcoms] = useState([{}]);
  useEffect(() => {
    axios
      .get("/getcoms")
      .then(({ data }) => {
        if (data) {
          return data;
        }
      })
      .then((result) => setcoms(result));
  }, []);
  return <div>

  </div>;
};

export default Commentslist;
