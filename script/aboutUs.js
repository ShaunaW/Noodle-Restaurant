window.onload = init();
function init() {

    var myLatlng = new qq.maps.LatLng(22.522410,113.992793);
    var myOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: qq.maps.MapTypeId.ROADMAP
    }
    var map = new qq.maps.Map(document.getElementById("container"), myOptions); 
    var marker = new qq.maps.Marker({
        position: myLatlng,
        map: map
    });      
}

   


