# Cartography

## MATH


	var pi = Math.PI, pi05 = pi * 0.5, pi2 = pi + pi;
	var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians

	var sin = Math.sin;
	var cos = Math.cos;

	var v = new THREE.Vector3;
	var v = function ( x, y, z ){ return new THREE.Vector3( x, y, z ); };


	var cos = function ( a ){ return Math.cos( a ); }
	var sin = function ( a ){ return Math.sin( a ); }

	function cos( a ){ return Math.cos( a ); }
	function sin( a ){ return Math.sin( a ); }

	function pow( a, b ){ return Math.pow( a, b ); }
	function ran(){ return Math.random(); }

	v( x, y, z ) => new THREE.Vector3( x, y, z );
	v2( x, y ) => new THREE.Vector2( x, y );


## MapBox

https://api.mapbox.com/v4/mapbox.terrain-rgb/15/5242/12663.pngraw?access_token=pk.eyJ1IjoidGhlb2EiLCJhIjoiY2o1YXFra3V2MGIzbzJxb2lneDUzaWhtZyJ9.7bYFAQabMXiYmcqW8NLfwg

https://api.mapbox.com/v4/mapbox.terrain-rgb/0/0/0.pngraw?access_token=pk.eyJ1IjoidGhlb2EiLCJhIjoiY2o1YXFra3V2MGIzbzJxb2lneDUzaWhtZyJ9.7bYFAQabMXiYmcqW8NLfwg
https://api.mapbox.com/v4/mapbox.terrain-rgb/7/20/49.pngraw?access_token=pk.eyJ1IjoidGhlb2EiLCJhIjoiY2o1YXFra3V2MGIzbzJxb2lneDUzaWhtZyJ9.7bYFAQabMXiYmcqW8NLfwg


height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1)

key from https://www.mapbox.com/mapbox-gl-js/example/map-tiles/
http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/14/4823/6160.vector.pbf?access_token=pk.eyJ1IjoidGhlb2EiLCJhIjoiY2o1YXFra3V2MGIzbzJxb2lneDUzaWhtZyJ9.7bYFAQabMXiYmcqW8NLfwg

works!!!

pk.eyJ1IjoidGhlb2EiLCJhIjoiY2o1YXFra3V2MGIzbzJxb2lneDUzaWhtZyJ9.7bYFAQabMXiYmcqW8NLfwg

https://api.mapbox.com/v4/mapbox.streets/14/4823/6160.png?access_token=pk.eyJ1IjoidGhlb2EiLCJhIjoiY2o1YXFra3V2MGIzbzJxb2lneDUzaWhtZyJ9.7bYFAQabMXiYmcqW8NLfwg


http://tile.openstreetmap.org/7/20/49.png


## JSON
{
	"vicinity": "xxx",
	"latitude": 0,
	"longitude": 0,
	"zoom": 12,
	"tilesX": 3,
	"tilesY": 3,
	"samplesX": 510,
	"samplesY": 510,
	"ULtileX": xxx,
	"ULtileY": xxx,
	"plainOpacity" : 0.5,
	"verticalScale" : 0.00001,
	"fogNear" : 0.5,
	"fogFar" : 1,
	"elevations": [

]
}

// Interesting places. Possibly to add to gazetteer

// BGBW Narsarsuaq Airport
// EGNS / isle of Man
// PHOG hawaii


// San Francisco
	var latitude = 37.796;
	var longitude = -122.398;

// Paris
	var latitude = 48.8566;
	var longitude = 2.3522;
/*

// Igualada Spain
	var latitude = 41.5861554761;
	var longitude = 1.6519343471;

// VNLK
	var latitude = 27.71110193545;
	var longitude = 86.71228385040001;

// YGIL Gilgandra
	var latitude = -31.7276314069;
	var longitude = 148.63915118805;

// PHOG hawaii
	var latitude = 20.8968;
	var longitude = -156.4329;

*/

more nice lat lon

## FORM

			'<p>Latitude : <input id=inpLatitude size=12 placeholder=' + latitude + ' onchange=goIt(); ></p>' +
			'<p>Longitude: <input id=inpLongitude size=12 placeholder=' + longitude + ' onchange=goIt(); ></p>' +

## Links of Interest

* http://oms.wff.ch/calc.php?baseurl=cylce&lat=47.629000&long=7.262000&longto=7.906000&latto=47.354000
* https://stackoverflow.com/questions/23017766/google-maps-tile-url-for-hybrid-maptype-tiles


## Tile Servers

* http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
* http://wiki.openstreetmap.org/wiki/Tiles
* http://mc.bbbike.org/mc/?num=2&mt0=mapnik&mt1=public_transport_lines


## TMS

* Source http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29

	function lon2tile( lon, zoom ) {

		return Math.floor( ( lon + 180 ) / 360 * Math.pow( 2, zoom ) );

	}

	function lat2tile( lat, zoom ) {

		const pi = Math.PI;

		return Math.floor( ( 1 - Math.log( Math.tan( lat * pi / 180 ) + 1 / Math.cos( lat * pi / 180 ) ) / pi ) / 2 * Math.pow( 2, zoom ) );

	}


	function tile2lon( x, zoom ) {

		return ( x / Math.pow( 2, zoom ) * 360 - 180 );

	}

	function tile2lat( y, zoom ) {

		var pi = Math.PI
		var n = pi - 2 * pi * y / Math.pow( 2, zoom );
		return 180 / pi * Math.atan( 0.5 * ( Math.exp( n ) - Math.exp( -n ) ));

	}

http://wiki.openstreetmap.org/wiki/Zoom_levels

### Mercator

http://wiki.openstreetmap.org/wiki/Mercator

function y2lat( a ) { return 180 / Math.PI * ( 2 * Math.atan( Math.exp( a * Math.PI / 180 ) ) - Math.PI / 2 ); }

function lat2y( a ) { return 180 / Math.PI * Math.log( Math.tan( Math.PI / 4 + a * ( Math.PI / 180 ) / 2 ) ); }


## XYZ

// source http://en.wikipedia.org/wiki/Spherical_coordinate_system

	function convertPosition( lat, lon, radius ) {

		const d2r = pi / 180
		var rc = radius * Math.cos( lat * d2r );
		return new THREE.Vector3( rc * Math.cos( lon * d2r ), radius * Math.sin( lat * d2r ), rc * Math.sin( lon * d2r) );
	}

	function latLonToXYZ( radius, latitude, longitude ) {

		x = radius * Math.sin( latitude ) * Math.cos( longitude )
		y = radius * Math.sin( latitude ) * Math.sin( longitude )
		z = radius * Math.cos( latitude )

		return new THREE.Vector3( x, y, z );

	}


## Google Maps

Google Maps Time Zone API
* https://developers.google.com/maps/documentation/timezone/start
* https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000


h = roads only
m = standard roadmap
p = terrain
r = somehow altered roadmap
s = satellite only
t = terrain only
y = hybrid


## Bitmaps & Height Maps

* Calculate the lower zoom before the higher zoom - then easier to calculate the correct common top left

