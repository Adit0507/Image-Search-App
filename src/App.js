import './App.css';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/useAxios';

function App() {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response)
  return (
    <>
      <Jumbutron > 
        <SearchField />
      </Jumbutron>
      <Images />
    </>
  );
}

export default App;
