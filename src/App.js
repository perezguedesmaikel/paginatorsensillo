import React, {useState} from "react";
import './App.css';
import Wraper from "./components/Wraper";
const datos_api=Array.from({length:60},(value,index)=>{
  return{id:index,title:`Item #${index}`}
});
const item_per_page=10;
function App() {
  const [datosfapi,setDatosfapi]=useState(datos_api);
  const [items,setItems]=useState([...datosfapi].splice(0,item_per_page));
  const [currentpage,setCurrentpage]=useState(0);
  //console.log(datos_api);
  function alante() {
    const totalelementos=datosfapi.length;
    const nexpage=currentpage+1;
    const firstindex=nexpage*item_per_page;
   if(firstindex>=totalelementos)return;
   setItems([...datosfapi].splice(firstindex,item_per_page))
    setCurrentpage(nexpage);
  }
  function atras() {
    const prevPage=currentpage-1;
    if(currentpage<=0)return;
    const firstindex=prevPage*item_per_page;
    setItems([...datosfapi].splice(firstindex,item_per_page))
    setCurrentpage(prevPage);
  }
  return (
    <div className="App">
    <Wraper currentPage={currentpage} alante={alante} atras={atras} datos_api={items}/>
    </div>
  );
}
export default App;
