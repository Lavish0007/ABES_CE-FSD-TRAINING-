
import './App.css'
import Card from './Components/Card'
import Footr from './Components/Footr'
import Nav from './Components/Nav'
import Welc from './Components/Welc'


function App() {
  

  return (
    <div>
      <Nav/>
      <br />
      <Welc/>
      <br />
      <div class="card-row">
        <br />
        <Card name="Pizza" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_841144.JPG" comp="Rate - 450"/>
        <br />
        <Card name="Burger" img="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg" comp="Rate - 250"/>
        <br />
        <Card name="Coke" img="https://cdn.uengage.io/uploads/18085/image-179182-1711711756.jpeg" comp="Rate - 50"/>

      </div>
      <br />
      <Footr/>
      


      
    </div>
  )
}

export default App
