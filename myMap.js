var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AoFNrLtToRt5Vh7DHxkyIXnyb94nNvn0NHwy0GvRJ4PUkYXYB3nMBmtQ20AyttMe'
    });
    add_pokemon_layer();
}

// 1. Define pokemon data format, create mock pokemon data 
map_items = [
    {
      "pokemon_id" : 12,
      "expire" : 1476589403,
      "longitude" : -73.8800345,
      "latitude" : 40.7596651,
    }
]

// 2. create pokemon image on map
function get_pokemon_layer_from_map_items(map_items){
    var layer = new Microsoft.Maps.Layer();
    var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
    layer.add(pushpins);
    return layer;
}

function add_pokemon_layer(){
    var pokemon_layer = get_pokemon_layer_from_map_items(map_items);
    map.layers.insert(pokemon_layer);
}

