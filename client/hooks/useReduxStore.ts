import { useSelector } from "react-redux";

const useReduxStore = () => {
  return useSelector((store) => store);
};

/*
EXAMPLE FOR A SELECTOR THAT GETS SOMETHING SPECIFIC

const useUser = () => {
  return useSelector(store => store.user)
}
*/

export default useReduxStore;
