let marker, map

function initMap () {
  const position = {
    lat: -34.397,
    lng: 150.644
  }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: position
  })
  //   chinchetas en china
  const marker = new google.maps.Marker({
    position: {
      lat: -12.0464,
      lng: -77.0428
    },
    map: map,
    title: 'Peru'
  })

  const marker = new google.maps.Marker({
    position: {
      lat: 64.01264208638193,
      lng: -16.41897698205608
    },
    map: map,
    title: 'Islandia'
  })
  const marker = new google.maps.Marker({
    position: {
      lat: 40.7127281,
      lng: -74.0060152
    },
    map: map,
    title: 'Nueva York'
  })

  geoPosition()
}

function geoPosition () {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 }
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert('Geolocalizacion ""No soportado""')
  }
}

function centraMapa (position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  console.log(nuevaPos)
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}
function onError (Error) {
  console.log(Error)
}
