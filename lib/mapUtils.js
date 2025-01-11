function getGoogleMapsUrl(location) {
    // For demonstration, using a free alternative map embed service
    return `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
  
  export { getGoogleMapsUrl };
  
  