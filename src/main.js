function initMap() {
    var myLatLng = { lat: 50.42496555405263, lng: 30.53408527758109 };
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 10 
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'GoIT' 
    });
}

 