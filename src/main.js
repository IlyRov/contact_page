
function initMap() {
    var myLatLng = { lat: 50.42496555405263, lng: 30.53408527758109 }; // Замените этими координатами на нужные вам
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 10 // Установите желаемый масштаб карты
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Моя метка' // Замените это на нужный вам заголовок метки
    });
}

 