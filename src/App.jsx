import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css'
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'

function App() {

  let markIcon = new Icon({iconUrl:"/marker.png",iconSize: [38, 95]})
  let handlePosition = () => {
    if (navigator) {
    console.log(navigator)
    console.log(navigator.geolocation)
    console.log(navigator.geolocation.getCurrentPosition((a)=>console.log(a)))
  }
}

async function fetchLocation() {
  try {
    navigator.geolocation.getCurrentPosition(successCallback);
  } catch (error) {
    // handle error
    console.error(error);
  }
}

function successCallback(position) {
  // setLat(position.coords.latitude);
  // setLong(position.coords.longitude);
  console.log(position.coords)
  console.log(position)
  // fetchWeather();
}

  return (

<button onClick={fetchLocation}>
  get position
</button>

  )
}

export default App
