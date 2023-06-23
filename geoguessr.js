let previousMarker = null;
function initialize() {
    const lieuxExplorables = [
      { nom: "La Tour Eiffel", coordonnees: { lat: 48.8583701, lng: 2.2944813 } },
      { nom: "Le Colisée", coordonnees: { lat: 41.8902142, lng: 12.4922309 } },
      { nom: "Le Taj Mahal", coordonnees: { lat: 27.1750151, lng: 78.0421552 } },
      { nom: "Le Machu Picchu", coordonnees: { lat: -13.1631412, lng: -72.5449629 } },
      { nom: "La Grande Muraille de Chine", coordonnees: { lat: 40.4319084, lng: 116.5703749 } },
      { nom: "Times Square", coordonnees: { lat: 40.758895, lng: -73.985131 } },
      { nom: "Le Kremlin", coordonnees: { lat: 55.751999, lng: 37.617734 } },
      { nom: "La Cité interdite", coordonnees: { lat: 39.916345, lng: 116.397155 } },
      { nom: "Le Palais de Buckingham", coordonnees: { lat: 51.501364, lng: -0.141889 } },
      { nom: "La Pyramide de Gizeh", coordonnees: { lat: 29.9792345, lng: 31.1342026 } },
      { nom: "Le Grand Canyon", coordonnees: { lat: 36.1007195, lng: -112.109202 } },
      { nom: "La Basilique Saint-Pierre", coordonnees: { lat: 41.9021673, lng: 12.4539427 } },
      { nom: "La Statue de la Liberté", coordonnees: { lat: 40.6892494, lng: -74.0445004 } },
      { nom: "Le Parc national de Yellowstone", coordonnees: { lat: 44.4279635, lng: -110.5884551 } },
      { nom: "La Place Rouge", coordonnees: { lat: 55.7539303, lng: 37.620795 } },
      { nom: "La Muraille d'Hadrien", coordonnees: { lat: 55.0167666, lng: -2.3902845 } },
      { nom: "Le Mont Everest", coordonnees: { lat: 27.9881198, lng: 86.9252771 } },
      { nom: "Le Parc national de Banff", coordonnees: { lat: 51.4968464, lng: -115.928056 } },
      { nom: "Le Palais de l'Alhambra", coordonnees: { lat: 37.1760873, lng: -3.5894957 } },
      { nom: "La Plage de Copacabana", coordonnees: { lat: -22.9671555, lng: -43.183699 } },
      { nom: "Chichén Itzá", coordonnees: { lat: 20.682867, lng: -88.568645 } },
      { nom: "Teotihuacan", coordonnees: { lat: 19.692594, lng: -98.844100 } },
      { nom: "Tulum", coordonnees: { lat: 20.211418, lng: -87.465350 } },
      { nom: "Palenque", coordonnees: { lat: 17.483618, lng: -92.045156 } },
      { nom: "12 rue Julien Fenaux", coordonnees: { lat: 49.4050041, lng: 3.9676285 } }
    ];
  
    // Choix aléatoire d'un lieu
    const lieuAleatoire = lieuxExplorables[Math.floor(Math.random() * lieuxExplorables.length)];
    
  
    const location = {
      lat: lieuAleatoire.coordonnees.lat,
      lng: lieuAleatoire.coordonnees.lng
    };
    const center = {
      lat:0,
      lng:0
    }
  
    const map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 0,
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      addressControl: false,
      mapTypeControl: false,
    });
    const panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"),{
        position: location,
        pov: {
          heading: 34,
          pitch: 10,
        },
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        addressControl: false,
        mapTypeControl: false,
        panControl: false,
      }
    );
  
    map.setStreetView(panorama);
    initMap(map);
}

function initMap(map) {
  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    if (previousMarker) {
      previousMarker.setMap(null);}
    addMarker(event.latLng, map);
    
  })
}

// Adds a marker to the map.
function addMarker(location, map) {
  if (previousMarker) {
    previousMarker.setMap(null);
  }

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
 // Affiche le bouton "Valider" lorsque le marqueur est ajouté
  const validerBtn = document.getElementById("validerBtn");
  validerBtn.style.display = "block";

  previousMarker = marker;
}

function addValidateButton(map) {
  const validateButton = document.createElement("button");
  validateButton.innerText = "Valider";
  validateButton.addEventListener("click", () => {
    if (previousMarker) {
      // Récupérer les coordonnées du marqueur valide
      const lat = previousMarker.getPosition().lat();
      const lng = previousMarker.getPosition().lng();
      console.log("Coordonnées validées : ", lat, lng);
    } else {
      console.log("Aucun marqueur à valider.");
    }
  });

  const container = document.getElementById("container");
  container.appendChild(validateButton);
}
function showHello() {
  console.log("Hello World");
}



window.initialize = initialize