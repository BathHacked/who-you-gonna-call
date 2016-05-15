'use strict'

window.onload = function() {
  cartodb.createVis('map', 'https://bathhacked.cartodb.com/api/v2/viz/7403bcd8-1a8c-11e6-a1f0-0e3ff518bd15/viz.json',
    {
      mobile_layout: true
    });
}