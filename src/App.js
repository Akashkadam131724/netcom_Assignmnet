import { useState, useEffect } from 'react'
import './App.css';
import CourseCard from './componenets/CourseCard/CourseCard';
import Mobile from './componenets/Mobile/Mobile';
import Products from './componenets/Products/Products';
import ResultCard from './componenets/ResultCard/ResultCard';
function App() {
  const [ncomData, setNcomData] = useState([])
  const [modules, setModules] = useState([])
  const [products, setProducts] = useState([])
  const [roles, setRoles] = useState([])
  const [levels, setLevels] = useState([])
  const [types, setTypes] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  
  const fetchData = () => {
    fetch("https://docs.microsoft.com/api/learn/catalog/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNcomData([...data.modules,...data.learningPaths])
        setModules(data.modules);
        setProducts(data.products);
        setRoles(data.roles)
        setLevels(data.levels)
        setTypes(data.types)
      });
  };
  const  updateMyBtn = (valuefromchilld) =>{
    return setIsOpen(valuefromchilld)
  }
  const updateNcomData = (valuefromChild) =>{
    return setNcomData(valuefromChild)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
     {
       isOpen &&  (<div className='mobile mobile_productList'>
       <Mobile products={products} roles={roles} levels={levels} updateMyBtn = {updateMyBtn}  isOpen={isOpen} />
  </div>)
     }
      <div className='container'>
        <div className='ms_learn_catalog'>
          <Products products={products} roles={roles} levels={levels} updateNcomData={updateNcomData} ncomData={ncomData} />
         <CourseCard ncomData={ncomData} setNcomData={setNcomData} updateMyBtn = {updateMyBtn}  isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
export default App;
