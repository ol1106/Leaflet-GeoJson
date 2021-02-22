import { Component,AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'map3';
  private map: L.map;
  private json;
  
  constructor(private http: HttpClient) { }
  
  ngAfterViewInit(): void {

   this.initMap();
var geojson;
this.http.get("assets/usdata.json").subscribe((json: any) => {
  //this.json = L.geoJSON(json, {
    geojson= L.geoJSON(json,{
    style: function (feature) {
      switch (feature.properties.County) {
       
        case "Richmond":                    //"0.353482":
          return {
            color: "red",
            fillColor: "red",
            fillOpacity: 3  
          };
        case "Ulster":                               //"0.433675":
          return {
            color: "yellow",
            fillColor: "yellow",
            fillOpacity: 3
          };
        case"New York":                                    //"0.355155":
          return {
            color: "orange",
            fillColor: "orange",
            fillOpacity: 3
          };
        case"Hudson":                                      //"0.325783":
          return {
            color: "green",
            fillColor: "green",
            fillOpacity: 3
          };
        case"Dutchess":                              //"0.329976":
          return {
            color: "blue",
            fillColor: "blue",
            fillOpacity: 3
          };

          case"Kings":                              //"0.329976":
          return {
            color: "#103a6b",
            //fillColor: "blue",
            fillOpacity: 3
          };
          case"Westchester":                              //"0.329976":
          return {
            color: "#b01bb3",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Nassau":                              //"0.329976":
          return {
            color: "#997c17",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Queens":                              //"0.329976":
          return {
            color: "#ee8f9c",
            //fillColor: "blue",
            fillOpacity: 3
          };

          
          case"Rockland":                              //"0.329976":
          return {
            color: "#FF007F",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Suffolk":                              //"0.329976":
          return {
            color: "#00FF7F",
            //fillColor: "blue",
            fillOpacity: 3
          };

          
          case"Sullivan":                              //"0.329976":
          return {
            color: "#FF7F00",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Putnam":                              //"0.329976":
          return {
            color: " #7F00FF",
            //fillColor: "blue",
            fillOpacity: 3
          };

          
          case"Orange":                              //"0.329976":
          return {
            color: " #00FFFE",
            //fillColor: "blue",
            fillOpacity: 3
          };


          case"Bronx":                              //"0.329976":
          return {
            color: "#00FF7F",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Fairfield":                              //"0.329976":
          return {
            color: "#0000FF",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Litchfield":                              //"0.329976":
          return {
            color: "#5F3000",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"New Haven":                              //"0.329976":
          return {
            color: "#ff0080",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Hudson":                              //"0.329976":
          return {
            color: "#ffd8b1",
            //fillColor: "blue",
            fillOpacity: 3
          };
          case"Somerset":                              //"0.329976":
          return {
            color: "#a77f58",
            //fillColor: "blue",
            fillOpacity: 3
          };
          
          case"Morris":                              //"0.329976":
          return {
            color: "#d19f11",
            //fillColor: "blue",
            fillOpacity: 3
          };

           
          case"Warren":                              //"0.329976":
          return {
            color: "#d19f22",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Bergen":                              //"0.329976":
          return {
            color: "#d19f33",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Mercer":                              //"0.329976":
          return {
            color: "#d19f44",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Monmouth":                              //"0.329976":
          return {
            color: "#d19f44",
            //fillColor: "blue",
            fillOpacity: 3
          };


      
          case"Passaic":                              //"0.329976":
          return {
            color: "#db99a3",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Essex":                              //"0.329976":
          return {
            color: "#d19f55",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Hunterdon":                              //"0.329976":
          return {
            color: "#d19f66",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Somerset":                              //"0.329976":
          return {
            color: "#d19f77",
            //fillColor: "blue",
            fillOpacity: 3
          };

          
          case"Ocean":                              //"0.329976":
          return {
            color: "#d19f88",
            //fillColor: "blue",
            fillOpacity: 3
          };

          case"Union":                              //"0.329976":
          return {
            color: "#d19f99",
            //fillColor: "blue",
            fillOpacity: 3
          };
          case"Middlesex":                              //"0.329976":
          return {
            color: "#d19f20",
            //fillColor: "blue",
            fillOpacity: 3
          };
          
      }
    },


    // d === 'Richmond'  ? '#de2d26' :
    //         d === 'Ulster'  ? '#377eb8' :
    //         d === 'New York' ? '#4daf4a' :
    //         d === 'Dutchess' ? '#984ea3' :
    //          d === 'Kings' ? '#103a6b' :
    //          d === 'Westchester' ? '#b01bb3' :
    //          d === 'Nassau' ? '#997c17' :
    //          d === 'Queens' ? '#ee8f9c' :
                        //  "#ff7f00";
    onEachFeature: function onEachFeature(feature, layer: L.Layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
       // click: zoomToFeature
      });
    }
  }).addTo(this.map);
});

let info;

info = new L.Control();

info.onAdd = function () {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props: any) {
  this._div.innerHTML =
  '<h4>US Country Name</h4>' +  (props ?
    '<b>' + props.County + '</b><br />' + props.Region + ' people / mi<sup>2</sup>'
    : 'Hover over a state');
};

info.addTo(this.map);

function highlightFeature(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
   dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.edge&& !L.Browser.opera) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
 
}

// var geojson;
function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
  // this.json.resetStyle(e.target);
  // info.update();
}

function zoomToFeature(e) {
  this.map.fitBounds(e.target.getBounds());
}


}
 private initMap(): void{

  this.map = L.map('map').setView([37.8, -96], 8);
  var mapboxAccessToken = "pk.eyJ1Ijoib2x0amFuYSIsImEiOiJja2tvODY2ajExNTZhMndycWRoYmxnOGZpIn0.rez78eWf1Xp-kIRsrH6ueA";
  const tiles =  L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png' , { 
          id: 'mapbox/light-v9',
           maxZoom:20,
           attribution: 'Map data © OpenStreetMap contributors',
            
        });
        tiles.addTo(this.map);



        var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
    labels = ['<strong>Categories</strong>'],
    categories = ['Richmond','Ulster','New York','Dutchess','Other'];

    for (var i = 0; i < categories.length; i++) {
            div.innerHTML += 
            labels.push(
                '<i class="circle" style="background:' + getColor1(categories[i]) + '"></i> ' +
            (categories[i] ? categories[i] : '+'));
          }
        div.innerHTML = labels.join('<br>');
    return div;
    };
    legend.addTo(this.map);

    function getColor1(d) {
      return d === 'Richmond'  ? '#de2d26' :
            d === 'Ulster'  ? '#377eb8' :
            d === 'New York' ? '#4daf4a' :
            d === 'Dutchess' ? '#984ea3' :
             d === 'Kings' ? '#103a6b' :
             d === 'Westchester' ? '#b01bb3' :
             d === 'Nassau' ? '#997c17' :
             d === 'Queens' ? '#ee8f9c' :
                          "#ff7f00";
    };
}
  
    onMapReady(map: L.Map) {
      this.http.get("assets/usdata.json").subscribe((json: any) => {
        console.log(json);
        this.json = json;
        L.geoJSON(this.json).addTo(this.map);
      });
    } 


  //    getColor(d) {
  //     return d < 0.3 ? '#800026' :
  //            d < 0.4  ? '#BD0026' :
  //            d < 0.5  ? '#E31A1C' :
  //            d < 0.7  ? '#FC4E2A' :
  //            d > 0.8   ? '#FD8D3C' :
             
  //            d > 20   ? '#FEB24C' :
  //            d > 10   ? '#FED976' :
  //                        '#FFEDA0';
  // }

//   style(json) {
//     return {
//         fillColor: this.getColor(this.json.features.properties.SV_Index2),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '3',
//         fillOpacity: 0.7
//     };
// }





}

