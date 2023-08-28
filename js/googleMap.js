import { Loader } from "@googlemaps/js-api-loader";

// AIzaSyCbtA7nVsCm13Z94dGA5IsxKtts5ytsjAw
const loader = new Loader({
  apiKey: "AIzaSyCbtA7nVsCm13Z94dGA5IsxKtts5ytsjAw",
  version: "weekly",
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");
  const lang = { lat: 35.671377, lng: 139.747018 };
  const map = new Map(document.getElementById("map"), {
    center: lang,
    zoom: 17,
    styles: [
      {
        stylers: [
          { hue: "#1f1407" },
          { saturation: "-41" },
          { lightness: "0" },
          { visibility: "undefined" },
          { invert_lightness: false },
        ],
      },
    ],
  });

  const marker = new Marker({
    position: lang,
    map: map,
    title: "KAZAN KAIKAN",
  });
});
