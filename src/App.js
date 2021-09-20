import React ,{useEffect,useState}from "react";
import axios from "axios";
import './App.css'
import Header from "./component/ui/Header";
import CharacterGrid from "./component/Characters/CharacterGrid";
import Search from "./component/ui/Search";

const App=()=>{

  const [items,setItems]=useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(() => {
    
    const fetchItems= async ()=>{

      const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data);
      console.log(result);
      setIsLoding(false);

    }

    fetchItems();


    return () => {
      
    }
  }, [query])


  return (
    <div className="Container">

      <Header></Header>
      <Search getQuery={(q)=>setQuery(q)}/>
      <h1><center>Bad-💀-App</center></h1>
      <br>
      </br>
      <CharacterGrid
       isLoding={isLoding}
       items={items}
      ></CharacterGrid>
    
    
    </div>
  );
}

export default App;
