import '/style.css';
import {Map, Tile, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js';
import { Group, Layer } from 'ol/layer';
import { XYZ } from 'ol/source';
const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([-101.7165358,21.1501622]),
      zoom: 14
    })
  });