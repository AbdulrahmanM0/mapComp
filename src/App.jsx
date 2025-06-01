import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css'
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'

function App() {

  let markIcon = new Icon({iconUrl:"/marker.png",iconSize: [38, 95]})
  let handlePosition = () => {
    if (navigator) {
    console.log(navigator)
  }
}
console.log(navigator)



  return (

<button onClick={handlePosition}>
  get position
</button>

  )
}

export default App
