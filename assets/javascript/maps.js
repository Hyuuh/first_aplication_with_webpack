import styles from './maps/style';

function initMap() {
  const coordinates = {
    lat: 19.446220,
    lng: -99.150909,
  };

  const map = new google.maps.Map(document.getElementById('mapa'), {
    center: coordinates,
    zoom: 19,
    styles,
  });

  const marker = new google.maps.Marker({
    position: coordinates,
    map,
    title: 'Biblioteca Vasconcelos',
  });
}

initMap();
