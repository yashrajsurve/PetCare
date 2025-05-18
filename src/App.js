
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstraoDemoPage from './BootstraoDemoPage';
import BasicExample from './componet/Cards';
// import NavScrollExample from './'
import IndividualIntervalsExample from './componet/Carosouel';
import ControlledCarousel from './componet/Carosouel';
import Navbar from './componet/Navbar'
// import NavScrollExample from '.';
import Vacation from'./componet/Vacation';
import PetCareSection from './componet/PetCareSection';
import PetServices from './componet/PetServices';
import SpecialCareOnPets from './componet/SpecialCareOnPets';
import Pricecard from './componet/Pricecard';
import ImgCard from './componet/ImgCard';
import Client  from './componet/Client';
import PetBio from './componet/PetBio';
import Footer from './componet/Footer';
function App() {
  return (
    <div className="App">
       {/* <BootstraoDemoPage/>  */}
      {/* <ResponsiveExample/>*/}
      {/* <ControlledCarousel/>  */}
      {/* <BasicExample/> */}
      {/* <NavScrollExample/>  */}
      <Navbar/>
      <IndividualIntervalsExample/>
      <Vacation/>
      <PetCareSection/>
      <PetServices/>
      <SpecialCareOnPets/>
      <Pricecard/>
      <ImgCard/>
      <Client/>
      <PetBio/>
      <Footer/>
     
    </div>
  );
}

export default App;