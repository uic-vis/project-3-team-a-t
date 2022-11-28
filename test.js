function createMap() {
	var map = L.map('map').setView([41.85,-87.7],11);

	var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
		maxZoom: 22,
		}).addTo(map);
	var geoJson = L.geoJson(zipData,{onEachFeature: onEachFeature}).addTo(map);
	
	function onEachFeature(feature, layer) {
        popupItem = {maxWidth: 200};
        layer.bindPopup(
        	"Zipcode: " + feature.properties["ZIP Code"] 
        	+ "<br>Total Cases: " 
        	+ feature.properties["Cases - Cumulative"]+"</br>"
        ,popupItem);
    }
}


function init() {
	createMap();
}

window.onload = init;

var zipData = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.687011,41.88004 ]
    },
    "properties": {
    "FIELD1":2340,
    "ZIP Code":60612,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":28,
    "Cases - Cumulative":9531,
    "Case Rate - Weekly":82,
    "Case Rate - Cumulative":27778.3,
    "Tests - Weekly":1134,
    "Tests - Cumulative":219950,
    "Test Rate - Weekly":3305,
    "Test Rate - Cumulative":641048.1,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":107,
    "Death Rate - Weekly":2.9,
    "Death Rate - Cumulative":311.9,
    "Population":34311,
    "Row ID":"60612-2022-40",
    "ZIP Code Location":"POINT (-87.687011 41.88004)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.602725,41.801993 ]
    },
    "properties": {
    "FIELD1":2341,
    "ZIP Code":60615,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":53,
    "Cases - Cumulative":8844,
    "Case Rate - Weekly":128,
    "Case Rate - Cumulative":21278.5,
    "Tests - Weekly":1233,
    "Tests - Cumulative":224956,
    "Test Rate - Weekly":2967,
    "Test Rate - Cumulative":541241,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":77,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":185.3,
    "Population":41563,
    "Row ID":"60615-2022-40",
    "ZIP Code Location":"POINT (-87.602725 41.801993)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.556897,41.721257 ]
    },
    "properties": {
    "FIELD1":2342,
    "ZIP Code":60617,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":66,
    "Cases - Cumulative":18561,
    "Case Rate - Weekly":80,
    "Case Rate - Cumulative":22488.9,
    "Tests - Weekly":2209,
    "Tests - Cumulative":317797,
    "Test Rate - Weekly":2676,
    "Test Rate - Cumulative":385049.8,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":252,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":305.3,
    "Population":82534,
    "Row ID":"60617-2022-40",
    "ZIP Code Location":"POINT (-87.556897 41.721257)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.625473,41.880112 ]
    },
    "properties": {
    "FIELD1":2343,
    "ZIP Code":60603,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":1,
    "Cases - Cumulative":390,
    "Case Rate - Weekly":85,
    "Case Rate - Cumulative":33219.8,
    "Tests - Weekly":24,
    "Tests - Cumulative":11440,
    "Test Rate - Weekly":2044,
    "Test Rate - Cumulative":974446.3,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":0,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":0,
    "Population":1174,
    "Row ID":"60603-2022-40",
    "ZIP Code Location":"POINT (-87.625473 41.880112)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.703343,41.946699 ]
    },
    "properties": {
    "FIELD1":2344,
    "ZIP Code":60618,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":87,
    "Cases - Cumulative":23192,
    "Case Rate - Weekly":92,
    "Case Rate - Cumulative":24569.1,
    "Tests - Weekly":1880,
    "Tests - Cumulative":423817,
    "Test Rate - Weekly":1992,
    "Test Rate - Cumulative":448982.5,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":175,
    "Death Rate - Weekly":1.1,
    "Death Rate - Cumulative":185.4,
    "Population":94395,
    "Row ID":"60618-2022-40",
    "ZIP Code Location":"POINT (-87.703343 41.946699)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.60569,41.744737 ]
    },
    "properties": {
    "FIELD1":2345,
    "ZIP Code":60619,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":61,
    "Cases - Cumulative":13381,
    "Case Rate - Weekly":100,
    "Case Rate - Cumulative":21843.7,
    "Tests - Weekly":2562,
    "Tests - Cumulative":296270,
    "Test Rate - Weekly":4182,
    "Test Rate - Cumulative":483643,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":229,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":373.8,
    "Population":61258,
    "Row ID":"60619-2022-40",
    "ZIP Code Location":"POINT (-87.60569 41.744737)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.651656,41.740873 ]
    },
    "properties": {
    "FIELD1":2346,
    "ZIP Code":60620,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":55,
    "Cases - Cumulative":14673,
    "Case Rate - Weekly":81,
    "Case Rate - Cumulative":21547.5,
    "Tests - Weekly":2315,
    "Tests - Cumulative":322351,
    "Test Rate - Weekly":3400,
    "Test Rate - Cumulative":473377.3,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":281,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":412.7,
    "Population":68096,
    "Row ID":"60620-2022-40",
    "ZIP Code Location":"POINT (-87.651656 41.740873)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.681818,41.902762 ]
    },
    "properties": {
    "FIELD1":2347,
    "ZIP Code":60622,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":32,
    "Cases - Cumulative":14154,
    "Case Rate - Weekly":61,
    "Case Rate - Cumulative":26810.4,
    "Tests - Weekly":1065,
    "Tests - Cumulative":268878,
    "Test Rate - Weekly":2017,
    "Test Rate - Cumulative":509306.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":101,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":191.3,
    "Population":52793,
    "Row ID":"60622-2022-40",
    "ZIP Code Location":"POINT (-87.681818 41.902762)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.629029,41.878153 ]
    },
    "properties": {
    "FIELD1":2348,
    "ZIP Code":60604,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":0,
    "Cases - Cumulative":434,
    "Case Rate - Weekly":0,
    "Case Rate - Cumulative":55498.7,
    "Tests - Weekly":39,
    "Tests - Cumulative":15105,
    "Test Rate - Weekly":4987,
    "Test Rate - Cumulative":1931586,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":0,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":0,
    "Population":782,
    "Row ID":"60604-2022-40",
    "ZIP Code Location":"POINT (-87.629029 41.878153)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.717446,41.850321 ]
    },
    "properties": {
    "FIELD1":2349,
    "ZIP Code":60623,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":87,
    "Cases - Cumulative":22489,
    "Case Rate - Weekly":101,
    "Case Rate - Cumulative":26156.4,
    "Tests - Weekly":2895,
    "Tests - Cumulative":351288,
    "Test Rate - Weekly":3367,
    "Test Rate - Cumulative":408574.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":331,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":385,
    "Population":85979,
    "Row ID":"60623-2022-40",
    "ZIP Code Location":"POINT (-87.717446 41.850321)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.701816,41.971155 ]
    },
    "properties": {
    "FIELD1":2350,
    "ZIP Code":60625,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":64,
    "Cases - Cumulative":19788,
    "Case Rate - Weekly":81,
    "Case Rate - Cumulative":24971.3,
    "Tests - Weekly":2506,
    "Tests - Cumulative":430688,
    "Test Rate - Weekly":3162,
    "Test Rate - Cumulative":543502.9,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":250,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":315.5,
    "Population":79243,
    "Row ID":"60625-2022-40",
    "ZIP Code Location":"POINT (-87.701816 41.971155)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.63676,41.882634 ]
    },
    "properties": {
    "FIELD1":2351,
    "ZIP Code":60606,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":10,
    "Cases - Cumulative":1110,
    "Case Rate - Weekly":322,
    "Case Rate - Cumulative":35794.9,
    "Tests - Weekly":80,
    "Tests - Cumulative":31454,
    "Test Rate - Weekly":2580,
    "Test Rate - Cumulative":1014318,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":9,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":290.2,
    "Population":3101,
    "Row ID":"60606-2022-40",
    "ZIP Code Location":"POINT (-87.63676 41.882634)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.669834,42.009469 ]
    },
    "properties": {
    "FIELD1":2352,
    "ZIP Code":60626,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":62,
    "Cases - Cumulative":11766,
    "Case Rate - Weekly":125,
    "Case Rate - Cumulative":23659.8,
    "Tests - Weekly":2930,
    "Tests - Cumulative":355306,
    "Test Rate - Weekly":5892,
    "Test Rate - Cumulative":714470.1,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":208,
    "Death Rate - Weekly":2,
    "Death Rate - Cumulative":418.3,
    "Population":49730,
    "Row ID":"60626-2022-40",
    "ZIP Code Location":"POINT (-87.669834 42.009469)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.621537,41.694192 ]
    },
    "properties": {
    "FIELD1":2353,
    "ZIP Code":60628,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":63,
    "Cases - Cumulative":14839,
    "Case Rate - Weekly":94,
    "Case Rate - Cumulative":22239.4,
    "Tests - Weekly":1997,
    "Tests - Cumulative":288935,
    "Test Rate - Weekly":2993,
    "Test Rate - Cumulative":433030.1,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":315,
    "Death Rate - Weekly":1.5,
    "Death Rate - Cumulative":472.1,
    "Population":66724,
    "Row ID":"60628-2022-40",
    "ZIP Code Location":"POINT (-87.621537 41.694192)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.670366,41.849879 ]
    },
    "properties": {
    "FIELD1":2354,
    "ZIP Code":60608,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":59,
    "Cases - Cumulative":18825,
    "Case Rate - Weekly":74,
    "Case Rate - Cumulative":23767.4,
    "Tests - Weekly":2014,
    "Tests - Cumulative":338441,
    "Test Rate - Weekly":2543,
    "Test Rate - Cumulative":427297.5,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":200,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":252.5,
    "Population":79205,
    "Row ID":"60608-2022-40",
    "ZIP Code Location":"POINT (-87.670366 41.849879)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.759611,41.971261 ]
    },
    "properties": {
    "FIELD1":2355,
    "ZIP Code":60630,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":51,
    "Cases - Cumulative":15063,
    "Case Rate - Weekly":89,
    "Case Rate - Cumulative":26267.8,
    "Tests - Weekly":1114,
    "Tests - Cumulative":234415,
    "Test Rate - Weekly":1943,
    "Test Rate - Cumulative":408787.3,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":192,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":334.8,
    "Population":57344,
    "Row ID":"60630-2022-40",
    "ZIP Code Location":"POINT (-87.759611 41.971261)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.711251,41.810038 ]
    },
    "properties": {
    "FIELD1":2356,
    "ZIP Code":60632,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":53,
    "Cases - Cumulative":24284,
    "Case Rate - Weekly":58,
    "Case Rate - Cumulative":26674.3,
    "Tests - Weekly":3261,
    "Tests - Cumulative":358641,
    "Test Rate - Weekly":3582,
    "Test Rate - Cumulative":393942.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":260,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":285.6,
    "Population":91039,
    "Row ID":"60632-2022-40",
    "ZIP Code Location":"POINT (-87.711251 41.810038)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.556037,41.653147 ]
    },
    "properties": {
    "FIELD1":2357,
    "ZIP Code":60633,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":7,
    "Cases - Cumulative":3009,
    "Case Rate - Weekly":54,
    "Case Rate - Cumulative":23378.1,
    "Tests - Weekly":298,
    "Tests - Cumulative":49189,
    "Test Rate - Weekly":2315,
    "Test Rate - Cumulative":382169.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":27,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":209.8,
    "Population":12871,
    "Row ID":"60633-2022-40",
    "ZIP Code Location":"POINT (-87.556037 41.653147)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.797373,41.944967 ]
    },
    "properties": {
    "FIELD1":2358,
    "ZIP Code":60634,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":64,
    "Cases - Cumulative":23184,
    "Case Rate - Weekly":84,
    "Case Rate - Cumulative":30507.3,
    "Tests - Weekly":1538,
    "Tests - Cumulative":334362,
    "Test Rate - Weekly":2024,
    "Test Rate - Cumulative":439978.9,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":251,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":330.3,
    "Population":75995,
    "Row ID":"60634-2022-40",
    "ZIP Code Location":"POINT (-87.797373 41.944967)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.668597,41.77599 ]
    },
    "properties": {
    "FIELD1":2359,
    "ZIP Code":60636,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":33,
    "Cases - Cumulative":7885,
    "Case Rate - Weekly":102,
    "Case Rate - Cumulative":24485.3,
    "Tests - Weekly":1424,
    "Tests - Cumulative":168578,
    "Test Rate - Weekly":4422,
    "Test Rate - Cumulative":523485.4,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":166,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":515.5,
    "Population":32203,
    "Row ID":"60636-2022-40",
    "ZIP Code Location":"POINT (-87.668597 41.77599)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.604053,41.780991 ]
    },
    "properties": {
    "FIELD1":2360,
    "ZIP Code":60637,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":66,
    "Cases - Cumulative":11491,
    "Case Rate - Weekly":139,
    "Case Rate - Cumulative":24215,
    "Tests - Weekly":2340,
    "Tests - Cumulative":362466,
    "Test Rate - Weekly":4931,
    "Test Rate - Cumulative":763826,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":100,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":210.7,
    "Population":47454,
    "Row ID":"60637-2022-40",
    "ZIP Code Location":"POINT (-87.604053 41.780991)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.771902,41.787032 ]
    },
    "properties": {
    "FIELD1":2361,
    "ZIP Code":60638,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":44,
    "Cases - Cumulative":17236,
    "Case Rate - Weekly":75,
    "Case Rate - Cumulative":29314.4,
    "Tests - Weekly":1296,
    "Tests - Cumulative":225786,
    "Test Rate - Weekly":2204,
    "Test Rate - Cumulative":384009.4,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":190,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":323.1,
    "Population":58797,
    "Row ID":"60638-2022-40",
    "ZIP Code Location":"POINT (-87.771902 41.787032)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.653382,41.812017 ]
    },
    "properties": {
    "FIELD1":2362,
    "ZIP Code":60609,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":52,
    "Cases - Cumulative":15759,
    "Case Rate - Weekly":85,
    "Case Rate - Cumulative":25626.5,
    "Tests - Weekly":2723,
    "Tests - Cumulative":279032,
    "Test Rate - Weekly":4428,
    "Test Rate - Cumulative":453747.5,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":226,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":367.5,
    "Population":61495,
    "Row ID":"60609-2022-40",
    "ZIP Code Location":"POINT (-87.653382 41.812017)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.75531,41.920609 ]
    },
    "properties": {
    "FIELD1":2363,
    "ZIP Code":60639,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":73,
    "Cases - Cumulative":27477,
    "Case Rate - Weekly":81,
    "Case Rate - Cumulative":30355.6,
    "Tests - Weekly":2397,
    "Tests - Cumulative":392145,
    "Test Rate - Weekly":2648,
    "Test Rate - Cumulative":433228,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":310,
    "Death Rate - Weekly":1.1,
    "Death Rate - Cumulative":342.5,
    "Population":90517,
    "Row ID":"60639-2022-40",
    "ZIP Code Location":"POINT (-87.75531 41.920609)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.63581,41.90455 ]
    },
    "properties": {
    "FIELD1":2364,
    "ZIP Code":60610,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":29,
    "Cases - Cumulative":10294,
    "Case Rate - Weekly":74,
    "Case Rate - Cumulative":26382,
    "Tests - Weekly":928,
    "Tests - Cumulative":199952,
    "Test Rate - Weekly":2378,
    "Test Rate - Cumulative":512447.8,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":55,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":141,
    "Population":39019,
    "Row ID":"60610-2022-40",
    "ZIP Code Location":"POINT (-87.63581 41.90455)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.746791,41.946682 ]
    },
    "properties": {
    "FIELD1":2365,
    "ZIP Code":60641,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":54,
    "Cases - Cumulative":19974,
    "Case Rate - Weekly":76,
    "Case Rate - Cumulative":28123.3,
    "Tests - Weekly":1898,
    "Tests - Cumulative":331653,
    "Test Rate - Weekly":2672,
    "Test Rate - Cumulative":466965.6,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":195,
    "Death Rate - Weekly":1.4,
    "Death Rate - Cumulative":274.6,
    "Population":71023,
    "Row ID":"60641-2022-40",
    "ZIP Code Location":"POINT (-87.746791 41.946682)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.657821,41.899935 ]
    },
    "properties": {
    "FIELD1":2366,
    "ZIP Code":60642,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":12,
    "Cases - Cumulative":5297,
    "Case Rate - Weekly":59,
    "Case Rate - Cumulative":26221.5,
    "Tests - Weekly":245,
    "Tests - Cumulative":86407,
    "Test Rate - Weekly":1213,
    "Test Rate - Cumulative":427736.3,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":31,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":153.5,
    "Population":20201,
    "Row ID":"60642-2022-40",
    "ZIP Code Location":"POINT (-87.657821 41.899935)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.662381,41.700445 ]
    },
    "properties": {
    "FIELD1":2367,
    "ZIP Code":60643,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":27,
    "Cases - Cumulative":12099,
    "Case Rate - Weekly":54,
    "Case Rate - Cumulative":24261.1,
    "Tests - Weekly":2104,
    "Tests - Cumulative":292183,
    "Test Rate - Weekly":4219,
    "Test Rate - Cumulative":585889.3,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":208,
    "Death Rate - Weekly":2,
    "Death Rate - Cumulative":417.1,
    "Population":49870,
    "Row ID":"60643-2022-40",
    "ZIP Code Location":"POINT (-87.662381 41.700445)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.695049,42.008927 ]
    },
    "properties": {
    "FIELD1":2368,
    "ZIP Code":60645,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":37,
    "Cases - Cumulative":12689,
    "Case Rate - Weekly":78,
    "Case Rate - Cumulative":26583.8,
    "Tests - Weekly":1794,
    "Tests - Cumulative":245381,
    "Test Rate - Weekly":3758,
    "Test Rate - Cumulative":514080.7,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":154,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":322.6,
    "Population":47732,
    "Row ID":"60645-2022-40",
    "ZIP Code Location":"POINT (-87.695049 42.008927)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.661343,41.953742 ]
    },
    "properties": {
    "FIELD1":2369,
    "ZIP Code":60613,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":35,
    "Cases - Cumulative":12373,
    "Case Rate - Weekly":70,
    "Case Rate - Cumulative":24690.2,
    "Tests - Weekly":1000,
    "Tests - Cumulative":252195,
    "Test Rate - Weekly":1996,
    "Test Rate - Cumulative":503252.6,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":64,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":127.7,
    "Population":50113,
    "Row ID":"60613-2022-40",
    "ZIP Code Location":"POINT (-87.661343 41.953742)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.571522,41.762202 ]
    },
    "properties": {
    "FIELD1":2370,
    "ZIP Code":60649,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":23,
    "Cases - Cumulative":9573,
    "Case Rate - Weekly":50,
    "Case Rate - Cumulative":20800,
    "Tests - Weekly":1854,
    "Tests - Cumulative":238831,
    "Test Rate - Weekly":4028,
    "Test Rate - Cumulative":518927.1,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":220,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":478,
    "Population":46024,
    "Row ID":"60649-2022-40",
    "ZIP Code Location":"POINT (-87.571522 41.762202)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.741017,41.901964 ]
    },
    "properties": {
    "FIELD1":2371,
    "ZIP Code":60651,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":35,
    "Cases - Cumulative":16494,
    "Case Rate - Weekly":55,
    "Case Rate - Cumulative":26090.7,
    "Tests - Weekly":1847,
    "Tests - Cumulative":276771,
    "Test Rate - Weekly":2922,
    "Test Rate - Cumulative":437804.1,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":184,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":291.1,
    "Population":63218,
    "Row ID":"60651-2022-40",
    "ZIP Code Location":"POINT (-87.741017 41.901964)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.652064,41.922605 ]
    },
    "properties": {
    "FIELD1":2372,
    "ZIP Code":60614,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":59,
    "Cases - Cumulative":17807,
    "Case Rate - Weekly":83,
    "Case Rate - Cumulative":24972,
    "Tests - Weekly":1135,
    "Tests - Cumulative":373073,
    "Test Rate - Weekly":1592,
    "Test Rate - Cumulative":523185.3,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":117,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":164.1,
    "Population":71308,
    "Row ID":"60614-2022-40",
    "ZIP Code Location":"POINT (-87.652064 41.922605)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.620291,41.894734 ]
    },
    "properties": {
    "FIELD1":2373,
    "ZIP Code":60611,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":35,
    "Cases - Cumulative":8274,
    "Case Rate - Weekly":108,
    "Case Rate - Cumulative":25516.6,
    "Tests - Weekly":434,
    "Tests - Cumulative":156898,
    "Test Rate - Weekly":1338,
    "Test Rate - Cumulative":483864.8,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":28,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":86.4,
    "Population":32426,
    "Row ID":"60611-2022-40",
    "ZIP Code Location":"POINT (-87.620291 41.894734)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.714238,41.745398 ]
    },
    "properties": {
    "FIELD1":2374,
    "ZIP Code":60652,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":55,
    "Cases - Cumulative":12077,
    "Case Rate - Weekly":125,
    "Case Rate - Cumulative":27505.9,
    "Tests - Weekly":1422,
    "Tests - Cumulative":192257,
    "Test Rate - Weekly":3239,
    "Test Rate - Cumulative":437873.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":139,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":316.6,
    "Population":43907,
    "Row ID":"60652-2022-40",
    "ZIP Code Location":"POINT (-87.714238 41.745398)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.622844,41.886262 ]
    },
    "properties": {
    "FIELD1":2375,
    "ZIP Code":60601,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":5,
    "Cases - Cumulative":5204,
    "Case Rate - Weekly":34,
    "Case Rate - Cumulative":35461.7,
    "Tests - Weekly":167,
    "Tests - Cumulative":99984,
    "Test Rate - Weekly":1138,
    "Test Rate - Cumulative":681322,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":13,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":88.6,
    "Population":14675,
    "Row ID":"60601-2022-40",
    "ZIP Code Location":"POINT (-87.622844 41.886262)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.636354,41.892485 ]
    },
    "properties": {
    "FIELD1":2376,
    "ZIP Code":60654,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":8,
    "Cases - Cumulative":5647,
    "Case Rate - Weekly":42,
    "Case Rate - Cumulative":29511.4,
    "Tests - Weekly":236,
    "Tests - Cumulative":98325,
    "Test Rate - Weekly":1233,
    "Test Rate - Cumulative":513849,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":8,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":41.8,
    "Population":19135,
    "Row ID":"60654-2022-40",
    "ZIP Code Location":"POINT (-87.636354 41.892485)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.629531,41.844869 ]
    },
    "properties": {
    "FIELD1":2377,
    "ZIP Code":60616,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":42,
    "Cases - Cumulative":11250,
    "Case Rate - Weekly":77,
    "Case Rate - Cumulative":20655.8,
    "Tests - Weekly":1437,
    "Tests - Cumulative":235723,
    "Test Rate - Weekly":2638,
    "Test Rate - Cumulative":432805.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":139,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":255.2,
    "Population":54464,
    "Row ID":"60616-2022-40",
    "ZIP Code Location":"POINT (-87.629531 41.844869)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.623449,41.867824 ]
    },
    "properties": {
    "FIELD1":2378,
    "ZIP Code":60605,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":26,
    "Cases - Cumulative":6883,
    "Case Rate - Weekly":94,
    "Case Rate - Cumulative":25011.8,
    "Tests - Weekly":441,
    "Tests - Cumulative":127587,
    "Test Rate - Weekly":1602,
    "Test Rate - Cumulative":463632.4,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":15,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":54.5,
    "Population":27519,
    "Row ID":"60605-2022-40",
    "ZIP Code Location":"POINT (-87.623449 41.867824)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.652727,41.876104 ]
    },
    "properties": {
    "FIELD1":2379,
    "ZIP Code":60607,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":27,
    "Cases - Cumulative":8410,
    "Case Rate - Weekly":91,
    "Case Rate - Cumulative":28420.8,
    "Tests - Weekly":744,
    "Tests - Cumulative":179712,
    "Test Rate - Weekly":2514,
    "Test Rate - Cumulative":607319.8,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":18,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":60.8,
    "Population":29591,
    "Row ID":"60607-2022-40",
    "ZIP Code Location":"POINT (-87.652727 41.876104)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.638812,41.776931 ]
    },
    "properties": {
    "FIELD1":2380,
    "ZIP Code":60621,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":28,
    "Cases - Cumulative":6420,
    "Case Rate - Weekly":96,
    "Case Rate - Cumulative":22105.9,
    "Tests - Weekly":1554,
    "Tests - Cumulative":148207,
    "Test Rate - Weekly":5351,
    "Test Rate - Cumulative":510319.5,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":147,
    "Death Rate - Weekly":3.4,
    "Death Rate - Cumulative":506.2,
    "Population":29042,
    "Row ID":"60621-2022-40",
    "ZIP Code Location":"POINT (-87.638812 41.776931)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.703266,41.990803 ]
    },
    "properties": {
    "FIELD1":2381,
    "ZIP Code":60659,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":26,
    "Cases - Cumulative":10741,
    "Case Rate - Weekly":63,
    "Case Rate - Cumulative":26154.2,
    "Tests - Weekly":844,
    "Tests - Cumulative":200318,
    "Test Rate - Weekly":2055,
    "Test Rate - Cumulative":487771.5,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":127,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":309.2,
    "Population":41068,
    "Row ID":"60659-2022-40",
    "ZIP Code Location":"POINT (-87.703266 41.990803)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.722735,41.879417 ]
    },
    "properties": {
    "FIELD1":2382,
    "ZIP Code":60624,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":18,
    "Cases - Cumulative":8448,
    "Case Rate - Weekly":50,
    "Case Rate - Cumulative":23364.1,
    "Tests - Weekly":1517,
    "Tests - Cumulative":186181,
    "Test Rate - Weekly":4196,
    "Test Rate - Cumulative":514909.6,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":116,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":320.8,
    "Population":36158,
    "Row ID":"60624-2022-40",
    "ZIP Code Location":"POINT (-87.722735 41.879417)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.711565,41.777061 ]
    },
    "properties": {
    "FIELD1":2383,
    "ZIP Code":60629,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":87,
    "Cases - Cumulative":32217,
    "Case Rate - Weekly":78,
    "Case Rate - Cumulative":28803.8,
    "Tests - Weekly":3164,
    "Tests - Cumulative":443530,
    "Test Rate - Weekly":2829,
    "Test Rate - Cumulative":396540,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":349,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":312,
    "Population":111850,
    "Row ID":"60629-2022-40",
    "ZIP Code Location":"POINT (-87.711565 41.777061)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.813371,41.995019 ]
    },
    "properties": {
    "FIELD1":2384,
    "ZIP Code":60631,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":32,
    "Cases - Cumulative":8831,
    "Case Rate - Weekly":108,
    "Case Rate - Cumulative":29906.2,
    "Tests - Weekly":715,
    "Tests - Cumulative":146660,
    "Test Rate - Weekly":2421,
    "Test Rate - Cumulative":496664.3,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":123,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":416.5,
    "Population":29529,
    "Row ID":"60631-2022-40",
    "ZIP Code Location":"POINT (-87.813371 41.995019)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.662232,41.971888 ]
    },
    "properties": {
    "FIELD1":2385,
    "ZIP Code":60640,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":49,
    "Cases - Cumulative":15241,
    "Case Rate - Weekly":70,
    "Case Rate - Cumulative":21861.9,
    "Tests - Weekly":2493,
    "Tests - Cumulative":364228,
    "Test Rate - Weekly":3576,
    "Test Rate - Cumulative":522452.8,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":191,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":274,
    "Population":69715,
    "Row ID":"60640-2022-40",
    "ZIP Code Location":"POINT (-87.662232 41.971888)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.666362,41.991062 ]
    },
    "properties": {
    "FIELD1":2386,
    "ZIP Code":60660,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":46,
    "Cases - Cumulative":9461,
    "Case Rate - Weekly":106,
    "Case Rate - Cumulative":21879.2,
    "Tests - Weekly":1639,
    "Tests - Cumulative":237172,
    "Test Rate - Weekly":3790,
    "Test Rate - Cumulative":548476,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":101,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":233.6,
    "Population":43242,
    "Row ID":"60660-2022-40",
    "ZIP Code Location":"POINT (-87.666362 41.991062)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.644283,41.882786 ]
    },
    "properties": {
    "FIELD1":2387,
    "ZIP Code":60661,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":2,
    "Cases - Cumulative":2820,
    "Case Rate - Weekly":20,
    "Case Rate - Cumulative":28410.2,
    "Tests - Weekly":73,
    "Tests - Cumulative":47527,
    "Test Rate - Weekly":735,
    "Test Rate - Cumulative":478813.2,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":2,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":20.1,
    "Population":9926,
    "Row ID":"60661-2022-40",
    "ZIP Code Location":"POINT (-87.644283 41.882786)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.756863,41.881113 ]
    },
    "properties": {
    "FIELD1":2388,
    "ZIP Code":60644,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":33,
    "Cases - Cumulative":11237,
    "Case Rate - Weekly":69,
    "Case Rate - Cumulative":23551.7,
    "Tests - Weekly":2202,
    "Tests - Cumulative":267697,
    "Test Rate - Weekly":4615,
    "Test Rate - Cumulative":561068.5,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"1",
    "Deaths - Cumulative":214,
    "Death Rate - Weekly":2.1,
    "Death Rate - Cumulative":448.5,
    "Population":47712,
    "Row ID":"60644-2022-40",
    "ZIP Code Location":"POINT (-87.756863 41.881113)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.761826,41.993931 ]
    },
    "properties": {
    "FIELD1":2389,
    "ZIP Code":60646,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":34,
    "Cases - Cumulative":7909,
    "Case Rate - Weekly":122,
    "Case Rate - Cumulative":28259.5,
    "Tests - Weekly":940,
    "Tests - Cumulative":135770,
    "Test Rate - Weekly":3359,
    "Test Rate - Cumulative":485118.1,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":96,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":343,
    "Population":27987,
    "Row ID":"60646-2022-40",
    "ZIP Code Location":"POINT (-87.761826 41.993931)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.701101,41.921058 ]
    },
    "properties": {
    "FIELD1":2391,
    "ZIP Code":60647,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":71,
    "Cases - Cumulative":22239,
    "Case Rate - Weekly":81,
    "Case Rate - Cumulative":25413.4,
    "Tests - Weekly":1995,
    "Tests - Cumulative":422306,
    "Test Rate - Weekly":2280,
    "Test Rate - Cumulative":482585.8,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":191,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":218.3,
    "Population":87509,
    "Row ID":"60647-2022-40",
    "ZIP Code Location":"POINT (-87.701101 41.921058)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.611244,41.819261 ]
    },
    "properties": {
    "FIELD1":2392,
    "ZIP Code":60653,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":47,
    "Cases - Cumulative":7862,
    "Case Rate - Weekly":147,
    "Case Rate - Cumulative":24590.3,
    "Tests - Weekly":1530,
    "Tests - Cumulative":171838,
    "Test Rate - Weekly":4785,
    "Test Rate - Cumulative":537464,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":101,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":315.9,
    "Population":31972,
    "Row ID":"60653-2022-40",
    "ZIP Code Location":"POINT (-87.611244 41.819261)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.701434,41.696456 ]
    },
    "properties": {
    "FIELD1":2393,
    "ZIP Code":60655,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":9,
    "Cases - Cumulative":8115,
    "Case Rate - Weekly":31,
    "Case Rate - Cumulative":28173.2,
    "Tests - Weekly":419,
    "Tests - Cumulative":112723,
    "Test Rate - Weekly":1455,
    "Test Rate - Cumulative":391345,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":54,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":187.5,
    "Population":28804,
    "Row ID":"60655-2022-40",
    "ZIP Code Location":"POINT (-87.701434 41.696456)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.658216,41.939715 ]
    },
    "properties": {
    "FIELD1":2394,
    "ZIP Code":60657,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":51,
    "Cases - Cumulative":18030,
    "Case Rate - Weekly":73,
    "Case Rate - Cumulative":25738,
    "Tests - Weekly":1137,
    "Tests - Cumulative":347658,
    "Test Rate - Weekly":1623,
    "Test Rate - Cumulative":496285.6,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":64,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":91.4,
    "Population":70052,
    "Row ID":"60657-2022-40",
    "ZIP Code Location":"POINT (-87.658216 41.939715)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.817934,41.974566 ]
    },
    "properties": {
    "FIELD1":2395,
    "ZIP Code":60656,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":21,
    "Cases - Cumulative":7829,
    "Case Rate - Weekly":76,
    "Case Rate - Cumulative":28387.5,
    "Tests - Weekly":408,
    "Tests - Cumulative":101812,
    "Test Rate - Weekly":1479,
    "Test Rate - Cumulative":369164.9,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0.1,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":80,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":290.1,
    "Population":27579,
    "Row ID":"60656-2022-40",
    "ZIP Code Location":"POINT (-87.817934 41.974566)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.896371,41.979511 ]
    },
    "properties": {
    "FIELD1":2397,
    "ZIP Code":60666,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":0,
    "Cases - Cumulative":11,
    "Case Rate - Weekly":0,
    "Case Rate - Cumulative":0,
    "Tests - Weekly":0,
    "Tests - Cumulative":0,
    "Test Rate - Weekly":0,
    "Test Rate - Cumulative":0,
    "Percent Tested Positive - Weekly":0,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":0,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":0,
    "Population":0,
    "Row ID":"60666-2022-40",
    "ZIP Code Location":"POINT (-87.896371 41.979511)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.628309,41.883136 ]
    },
    "properties": {
    "FIELD1":2399,
    "ZIP Code":60602,
    "Week Number":40,
    "Week Start":"10/2/2022",
    "Week End":"10/8/2022",
    "Cases - Weekly":6,
    "Cases - Cumulative":439,
    "Case Rate - Weekly":482,
    "Case Rate - Cumulative":35289.4,
    "Tests - Weekly":50,
    "Tests - Cumulative":11734,
    "Test Rate - Weekly":4019,
    "Test Rate - Cumulative":943247.6,
    "Percent Tested Positive - Weekly":0.1,
    "Percent Tested Positive - Cumulative":0,
    "Deaths - Weekly":"0",
    "Deaths - Cumulative":3,
    "Death Rate - Weekly":0,
    "Death Rate - Cumulative":241.2,
    "Population":1244,
    "Row ID":"60602-2022-40",
    "ZIP Code Location":"POINT (-87.628309 41.883136)"
    }
  }
]
};