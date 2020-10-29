
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "buildingsAOI0_0": {
            "type": "geojson",
            "data": json_buildingsAOI0_0
        }
                    ,
        "drainage_features_1": {
            "type": "geojson",
            "data": json_drainage_features_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#000000"
            }
        },
        {
            "id": "lyr_buildingsAOI0_0_0",
            "type": "fill",
            "source": "buildingsAOI0_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e77148'}
        }
,
        {
            "id": "lyr_drainage_features_1_0",
            "type": "line",
            "source": "drainage_features_1",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'blockage_m'], 'concrete'], 4.5, ['==', ['get', 'blockage_m'], 'dirt'], 4.5, ['==', ['get', 'blockage_m'], 'dirty'], 4.5, ['==', ['get', 'blockage_m'], 'grass or plant'], 4.5, ['==', ['get', 'blockage_m'], 'grass or plants'], 4.5, ['==', ['get', 'blockage_m'], 'grass_or_plants'], 4.5, ['==', ['get', 'blockage_m'], 'metal'], 4.5, ['==', ['get', 'blockage_m'], 'rubish or solid_waste'], 4.5, ['==', ['get', 'blockage_m'], 'rubish_or_solid_waste'], 4.5, ['==', ['get', 'blockage_m'], 'solid waste or rubbish'], 4.5, ['==', ['get', 'blockage_m'], 'solid_waste'], 4.5, 0], 'line-opacity': ['case', ['==', ['get', 'blockage_m'], 'concrete'], 1.0, ['==', ['get', 'blockage_m'], 'dirt'], 1.0, ['==', ['get', 'blockage_m'], 'dirty'], 1.0, ['==', ['get', 'blockage_m'], 'grass or plant'], 1.0, ['==', ['get', 'blockage_m'], 'grass or plants'], 1.0, ['==', ['get', 'blockage_m'], 'grass_or_plants'], 1.0, ['==', ['get', 'blockage_m'], 'metal'], 1.0, ['==', ['get', 'blockage_m'], 'rubish or solid_waste'], 1.0, ['==', ['get', 'blockage_m'], 'rubish_or_solid_waste'], 1.0, ['==', ['get', 'blockage_m'], 'solid waste or rubbish'], 1.0, ['==', ['get', 'blockage_m'], 'solid_waste'], 1.0, 0], 'line-color': ['case', ['==', ['get', 'blockage_m'], 'concrete'], '#85b66f', ['==', ['get', 'blockage_m'], 'dirt'], '#f3ee45', ['==', ['get', 'blockage_m'], 'dirty'], '#ede61c', ['==', ['get', 'blockage_m'], 'grass or plant'], '#dfd621', ['==', ['get', 'blockage_m'], 'grass or plants'], '#eded1f', ['==', ['get', 'blockage_m'], 'grass_or_plants'], '#eee01a', ['==', ['get', 'blockage_m'], 'metal'], '#85b66f', ['==', ['get', 'blockage_m'], 'rubish or solid_waste'], '#f70b3a', ['==', ['get', 'blockage_m'], 'rubish_or_solid_waste'], '#f70b3a', ['==', ['get', 'blockage_m'], 'solid waste or rubbish'], '#f70b3a', ['==', ['get', 'blockage_m'], 'solid_waste'], '#f70b3a', '#ffffff']}
        }
],
}