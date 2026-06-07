window.addEventListener("load", function() {
    
    var webMap = L.map("map-wrapper", {
        center: [51.952490, 7.551301],
        zoom: 17
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        attribution: '© <a href="https://www.openstreetmap.ocopyright">OpenStreetMap</a> contributors'
    }).addTo(webMap);

    var webIcon = L.icon( {
        iconUrl: "img/mapIcon.png"
    });

    var webMarker = L.marker([51.952490, 7.551301], {
        icon: webIcon
    }).addTo(webMap);

    webMarker.bindPopup("Mug of Coffee");

});