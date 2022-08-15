import './App.css';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/useAxios';
import { createContext } from 'react';

// Creating Context
export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron > 
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
