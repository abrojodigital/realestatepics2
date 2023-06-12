export const MAPS_API_KEY = "AIzaSyAlSD5v6-Zd4YVBSvLB5NR74_M5IFeMM44";

export const URL_MAPS = (lat, lng, zoom = 14) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${MAPS_API_KEY}`;

export const URL_GEOCODING = (lat, lng) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`;