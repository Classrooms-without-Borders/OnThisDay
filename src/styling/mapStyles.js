export const mapStyles = [
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "road", stylers: [{ visibility: "off" }] },
    { featureType: "administrative.locality", elementType: "labels", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { hue: "#ffa200" },
        { lightness: -20 }
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        { hue: "#ff9100" },
        { lightness: 52 }
      ],
    }
  ]