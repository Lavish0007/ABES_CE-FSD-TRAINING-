
import './App.css'
import Card from './components/card'
import Nav from './components/Nav'

function App() {
  

  return (
    <div>
      <Nav/>
      <br />
      <Card name="Elon" comp="Tesla" img="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg"/>
      <br />
      <Card name="Jenseng" comp="Nvidia" img="https://cdn.britannica.com/60/257460-050-62FF74CB/NVIDIA-Jensen-Huang.jpg?w=385"/>
      <br />
      <Card name="Steve" comp="Apple" img="https://imageio.forbes.com/specials-images/imageserve/5b8576db31358e0429c734e3/0x0.jpg?format=jpg&crop=2170,2172,x211,y900,safe&height=416&width=416&fit=bounds"/>

    </div>
  )
}

export default App
