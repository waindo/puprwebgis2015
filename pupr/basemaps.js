
Ext.namespace("Heron.options.map");
Heron.options.map.settings = {
    projection: 'EPSG:900913',
    units: 'dd',
    // resolutions: [860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.0525],
    maxExtent: '-180.0, -90.0, 180.0, 90.0',
    center:'13099666, -33921',
    maxResolution: 'auto',
    xy_precision: 2,
    max_features: 10,
    zoom: 5,
    theme: null
};


Heron.options.map.layers = [


    new OpenLayers.Layer.OSM("OPEN STREET"),

    new OpenLayers.Layer.WMS("Global Imagery",
        "http://maps.opengeo.org/geowebcache/service/wms",
        {layers: "bluemarble"},
        {singleTile: false, isBaseLayer: true, visibility: false, noLegend: true}),

    new OpenLayers.Layer.WMS(
            "World image",
            'http://www2.demis.nl/wms/wms.ashx?WMS=BlueMarble',
            {layers: "Earth Image", format: 'image/png'},
            {singleTile: true, isBaseLayer: true, visibility: true, noLegend: true}
    ),

    new OpenLayers.Layer.WMS(
            "World schematic",
            'http://www2.demis.nl/wms/wms.ashx?WMS=WorldMap',
            {layers: "Countries,Borders,Coastlines", format: 'image/png'},
            {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true}
    ),

    /*
     * ==================================
     *            Overlays
     * ==================================
     */
    new OpenLayers.Layer.WMS(
            "World Soil Resources (FAO)",
            'http://data.fao.org/geoserver/ows?',
            {layers: "GEONETWORK:wsres25_1111", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false}
    ),
    new OpenLayers.Layer.WMS(
            "Global Ecological Zones (FAO)",
            'http://data.fao.org/geoserver/ows?',
            {layers: "GEONETWORK:eco_zone_1255", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false}
    ),
    new OpenLayers.Layer.WMS(
            "World Cities (FAO)",
            'http://data.fao.org/geoserver/ows?',
            {layers: "GEONETWORK:esri_cities_12764", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: "application/vnd.ogc.gml"}
    )
];


Heron.options.map.toolbar = [
    {type: "scale", options: {width: 110}},
    {type: "-"} ,
    {type: "featureinfo", options: {popupWindow: {}}},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {type: "measurelength", options: {geodesic: true}},
    {type: "measurearea", options: {geodesic: true}}
];


Ext.namespace("Heron.options.info");
Heron.options.info.html =
        '<div class="hr-html-panel-body">' +
                '<p>This is a demo app of the <a href="http://heron-mc.org" target="_new">Heron Mapping Client</a>.</p>' +
                '<p>A complete configuration is defined via two JS files: </p>' +
                '<ul>' +
                '<li><a href="Layout.js" target="_new">Layout.js</a> : defines this page layout and its panels/widgets</li>' +
                '<li><a href="Options.js" target="_new">Options.js</a> : defines options like Layers for that page layout</li>' +
                '</ul>' +
                '<p>This split (into layout/options) is just an example for a convenient way to structure a Heron layout.</p>' +
                '<p>Different (CSS) styles and languages for this same demo app can also be defined by overruling the default style and language. Examples:</p>' +
                '<ul>' +
                '<li><a href="index.html">Default style: blue with English Language</a></li>' +
                '<li><a href="index-de-blue.html">Same blue style with German Language</a></li>' +
                '<li><a href="index-nl-blue.html">Same blue style with Dutch Language</a></li>' +
                '<li><a href="index-en-gray.html">Gray style with English Language (red headings)</a></li>' +
                '</ul>' +
                '<p>Note: Feature Info, "I" button in toolbar, is only available for World Cities Layer.</p>' +
                '<p>Base WMS Layers provided by the <a href="http://www.demis.nl" target="_new">Demis (NL)</a></p>' +
                '<p>Overlay WMS Layers provided by the <a href="http://www.fao.org" target="_new">FAO</a></p>' +
                '<p><i>Thanks to Wolfram Winter from <a href="http://www.bahn.de" target="_new">Deutsche Bahn</a> for providing the initial version and drive for this demo.</i></p>' +
                '</div>';

Ext.namespace("Heron.options");
Heron.options.bookmarks =
        [
            {
                id: 'id_world_europe',
                name: 'World image - Europe',
                desc: 'Europe',
                layers: ['World image'],
                x: 9.272,
                y: 50.142,
                zoom: 4
            },
            {
                id: 'id_world_northamerica',
                name: 'World image - North America',
                desc: 'North America',
                layers: ['World image'],
                x: -96.328,
                y: 47.461,
                zoom: 2
            }
        ];
