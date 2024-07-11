// api.js
import useFetch from "../Hook/useFetch";

const useFetchData = () => {
  return useFetch("http://192.168.100.2:1337/api/halaman-depans?populate=*");
};

export default useFetchData;
