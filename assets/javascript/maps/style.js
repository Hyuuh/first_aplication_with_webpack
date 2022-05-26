const MINTLEAF = '#00b894';
const ROBINSEGGBLUE = '#00cec9';
const ELECTRONBLUE = '#0984e3';
const EXODUSFRUIT = '';
const SOOTHINGBREEZE = '#b2bec3';
const SOURLEMON = '#ffeaa7';
const FIRSTDATE = '#fab1a0';
const PINKGLAMOUR = '#ff7675';
const PICOPINK = '#fd79a8';
const AMERICANRIVER = '#636e72';
const BRIGHTYARROW = '#fdcb6e';
const ORANGEVILLE = '#e17055';
const CHIGONG = '#d63031';

const styles = [
  {
    elementType: 'geometry',
    stylers: [{ color: BRIGHTYARROW }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: CHIGONG }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: PICOPINK }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: EXODUSFRUIT }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: PICOPINK }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: MINTLEAF }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: PICOPINK }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: AMERICANRIVER }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: SOOTHINGBREEZE }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: PICOPINK }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: PINKGLAMOUR }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: PINKGLAMOUR }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: PICOPINK }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: ORANGEVILLE }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: BRIGHTYARROW }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: ELECTRONBLUE }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: ROBINSEGGBLUE }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: CHIGONG }],
  },
];

export default styles;
