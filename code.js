function init() {
    let map = document.getElementById('map');
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
    let map = document.getElementById('coords');
    let x = eventObj.pageX;
    let y = eventObj.pageY;
    map.innerHTML = 'Map coordinates: ' + x + ', ' + y;
}

window.onload = init;