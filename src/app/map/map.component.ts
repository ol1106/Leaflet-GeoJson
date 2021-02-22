import { ShapeService } from './../services/shape.service';
import { MarkerService } from './../services/marker.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map:L.map;
  private states;

  constructor(private markerService: MarkerService,
    private shapeService: ShapeService) { }

  ngOnInit(): void {
    this.initMap();
    this.shapeService.getStateShapes().subscribe(states => {
  this.states = states;
  this.initStatesLayer();
  console.log(states);
});
  }
  private initMap(): void{
  var mapboxAccessToken = "pk.eyJ1Ijoib2x0amFuYSIsImEiOiJja2tvODY2ajExNTZhMndycWRoYmxnOGZpIn0.rez78eWf1Xp-kIRsrH6ueA";
  var map = L.map('map').setView([37.8, -96], 4);

 const tiles = L.tileLayer(//'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1, 
    attribution: 'Map data © OpenStreetMap contributors',
    center: L.latLng(47.482019, -1)

}).addTo(map);

 }

 private initStatesLayer() {
  const stateLayer = L.geoJSON(this.states, {
    style: (feature) => ({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B'
    })
  });

  this.map.addLayer(stateLayer);
 }

}
