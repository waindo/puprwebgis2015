Ext.namespace("Heron.options");
Ext.namespace("Heron.scratch");
OpenLayers.Util.onImageLoadErrorColor = "transparent";
OpenLayers.ProxyHost = "heron/cgi-bin/proxy.cgi?url=";
OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;

Ext.BLANK_IMAGE_URL = 'http://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';

Ext.namespace("Heron.options.map");
Ext.namespace("Heron.PDOK");


// Heron.options.serverResolutions = {
//     zoom_0_12: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840],
//     zoom_0_13: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420],
//     zoom_0_14: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210],
//     zoom_0_15: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105],
//     zoom_0_16: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.0525]
// };


Heron.options.map.settings = {
    projection: 'EPSG:900913',
    displayProjection: new OpenLayers.Projection("EPSG:4326"),
    units: 'm',
    //resolutions: Heron.options.serverResolutions.zoom_0_16,
    // maxExtent: '-285401.920, 22598.080, 595401.920, 903401.920',
    maxExtent: '-20037508.34, -20037508.34, 20037508.34, 20037508.34',
    // center: '155000,463000',
    center:'13099666, -33921',
    maxResolution: 'auto',
    xy_precision: 2,
    zoom: 5,
    theme: null
};

Heron.scratch.urls = {

	PDOK: 'http://192.168.0.5:8080/geoserver'
};


Heron.PDOK.urls = {

	PDOKTMS: Heron.scratch.urls.PDOK + '/tms/',
	NATURA2000: Heron.scratch.urls.PDOK + '/natura2000/wms?',
	INDONESIA: Heron.scratch.urls.PDOK + '/pupr2015/wms?'
};

Ext.namespace("Heron.options.wfs");
Heron.options.wfs.downloadFormats = [
    {
        name: 'CSV',
        outputFormat: 'csv',
        fileExt: '.csv'
    },
    {
        name: 'GML (version 2.1.2)',
        outputFormat: 'text/xml; subtype=gml/2.1.2',
        fileExt: '.gml'
    },
    {
        name: 'ESRI Shapefile (zipped)',
        outputFormat: 'SHAPE-ZIP',
        fileExt: '.zip'
    },
    {
        name: 'GeoJSON',
        outputFormat: 'json',
        fileExt: '.json'
    }
];

Ext.namespace("Heron.options.worklayers");
Heron.options.worklayers = {
    editor: new OpenLayers.Layer.Vector('Editor', {
        displayInLayerSwitcher: true, visibility: false}),


    scratch: new OpenLayers.Layer.Vector('Scratch', {
        displayInLayerSwitcher: true, visibility: false})
};


Heron.options.map.layers = [

	new OpenLayers.Layer.OSM("OPEN STREET"),

    new OpenLayers.Layer.WMS(
            "World image",
            'http://www2.demis.nl/wms/wms.ashx?WMS=BlueMarble',
            {layers: "Earth Image", format: 'image/png'},
            {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true}
    ),

    new OpenLayers.Layer.WMS(
            "BATAS PROVINSI",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "indonesia_prop", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "WILAYAH SUNGAI",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "ws_kalimantan", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: true, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

    new OpenLayers.Layer.WMS(
            "DAERAH ALIRAN SUNGAI",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "das_kalimantan", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

    new OpenLayers.Layer.WMS(
            "SUNGAI",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "sungai_kalimantan_250k", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

    new OpenLayers.Layer.WMS(
            "BADAN SUNGAI",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraBadanSungai", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BANGUNAN PENGATUR ARUS SUNGAI/KRIB",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraKrib", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

    new OpenLayers.Layer.WMS(
            "BANGUNAN PENGENDALI PASANG SURUT",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraPengendaliPasut", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BANGUNAN POMPA",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraPompa", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BANGUNAN DRAINASE",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraDrainase", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

    new OpenLayers.Layer.WMS(
            "BANGUNAN PENGEMBALIAN/INTAKE FACILITIES",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraInteke", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BANGUNAN PENGENDALI SENDIMEN/CHECK DAM",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraCekdam", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BANGUNAN PENGENDALI LAHAR/SABO DAM",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraSaboDam", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BENDUNG",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraBendung", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

    new OpenLayers.Layer.WMS(
            "BENDUNGAN",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraBendungan", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


     new OpenLayers.Layer.WMS(
            "PARAPET",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraParapet", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


     new OpenLayers.Layer.WMS(
            "PENGARAH ALIRAN/GROUNDSILL",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraGroundsill", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


      new OpenLayers.Layer.WMS(
            "PINTU PENGENDALI BANJIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraPengendaliBanjir", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


      new OpenLayers.Layer.WMS(
            "PINTU PENGATUR/FLAP GATE",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraFlapgate", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


       new OpenLayers.Layer.WMS(
            "TANGGUL",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraTanggul", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "BANGUNAN PERKUATAN TEBING/REVETMENT",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraRevertment", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


     new OpenLayers.Layer.WMS(
            "TALANG",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraTalang", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


     new OpenLayers.Layer.WMS(
            "WADUK PENGENDALI BANJIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraWaduk", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "SIPHON",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraSiphon", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "JETTY",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PraJetty", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "PETA BANJIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PetaBanjir", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    

     new OpenLayers.Layer.WMS(
            "POS BANJIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PosBanjir", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "POS DUGA AIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PosDugaAir", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "POS HUJAN",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PosHujan", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "POS HIDROKLIMATOLOGI",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PosKlimatologi", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "POS PENGAMATAN BANJIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "PosPengamatBanjir", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    new OpenLayers.Layer.WMS(
            "RAWAN BANJIR",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "RawanBanjir", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


     new OpenLayers.Layer.WMS(
            "Tahun 2014",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "2014", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),

      new OpenLayers.Layer.WMS(
            "Tahun 2015",
            'http://192.168.0.5:8080/geoserver/pupr2015/wms?',
            {layers: "2015", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'pupr2015',
                    featureNS: 'http://www.opengeospatial.net/pupr2015',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),


    Heron.options.worklayers.editor,
    Heron.options.worklayers.scratch
];


Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = [
	{
		text: 'Basemap', expanded: false, children: [
		{nodeType: "gx_layer", layer: "OPEN STREET", text: "OPEN STREET" }
        // ,{nodeType: "gx_layer", layer: "World image", text: "World image" }
    ]
	},
    {
		text: 'Layer Admin', expanded: false, children: [
        {nodeType: "gx_layer", layer: "BATAS PROVINSI", text: "BATAS PROVINSI" },
        {nodeType: "gx_layer", layer: "WILAYAH SUNGAI", text: "WILAYAH SUNGAI" },
        {nodeType: "gx_layer", layer: "DAERAH ALIRAN SUNGAI", text: "DAERAH ALIRAN SUNGAI" },
        {nodeType: "gx_layer", layer: "SUNGAI", text: "SUNGAI" }
    ]
	},
    {
        text: 'Layar Prasarana', expanded: false, children: [
        {nodeType: "gx_layer", layer: "BADAN SUNGAI", text: "BADAN SUNGAI" },
        {nodeType: "gx_layer", layer: "BANGUNAN PENGATUR ARUS SUNGAI/KRIB", text: "BANGUNAN PENGATUR ARUS SUNGAI/KRIB" },
        {nodeType: "gx_layer", layer: "BANGUNAN PENGENDALI PASANG SURUT", text: "BANGUNAN PENGENDALI PASANG SURUT" },
        {nodeType: "gx_layer", layer: "BANGUNAN POMPA", text: "BANGUNAN POMPA" },
        {nodeType: "gx_layer", layer: "BANGUNAN DRAINASE", text: "BANGUNAN DRAINASE" },
        {nodeType: "gx_layer", layer: "BANGUNAN PENGEMBALIAN/INTAKE FACILITIES", text: "BANGUNAN PENGEMBALIAN/INTAKE FACILITIES" },
        {nodeType: "gx_layer", layer: "BANGUNAN PENGENDALI SENDIMEN/CHECK DAM", text: "BANGUNAN PENGENDALI SENDIMEN/CHECK DAM" },
        {nodeType: "gx_layer", layer: "BANGUNAN PENGENDALI LAHAR/SABO DAM", text: "BANGUNAN PENGENDALI LAHAR/SABO DAM" },
        {nodeType: "gx_layer", layer: "BENDUNG", text: "BENDUNG" },
        {nodeType: "gx_layer", layer: "BENDUNGAN", text: "BENDUNGAN" },
        {nodeType: "gx_layer", layer: "PARAPET", text: "PARAPET" },
        {nodeType: "gx_layer", layer: "PENGARAH ALIRAN/GROUNDSILL", text: "PENGARAH ALIRAN/GROUNDSILL" },
        {nodeType: "gx_layer", layer: "PINTU PENGENDALI BANJIR", text: "PINTU PENGENDALI BANJIR" },
        {nodeType: "gx_layer", layer: "PINTU PENGATUR/FLAP GATE", text: "PINTU PENGATUR/FLAP GATE" },
        {nodeType: "gx_layer", layer: "TANGGUL", text: "TANGGUL" },
        {nodeType: "gx_layer", layer: "BANGUNAN PERKUATAN TEBING/REVETMENT", text: "BANGUNAN PERKUATAN TEBING/REVETMENT" },
        {nodeType: "gx_layer", layer: "TALANG", text: "TALANG" },
        {nodeType: "gx_layer", layer: "WADUK PENGENDALI BANJIR", text: "WADUK PENGENDALI BANJIR" },
        {nodeType: "gx_layer", layer: "SIPHON", text: "SIPHON" },
        {nodeType: "gx_layer", layer: "JETTY", text: "JETTY" }
    ]
    },
    {
        text: 'Layer Banjir', expanded: false, children: [
        {nodeType: "gx_layer", layer: "PETA BANJIR", text: "PETA BANJIR" },
        {nodeType: "gx_layer", layer: "POS BANJIR", text: "POS BANJIR" },
        {nodeType: "gx_layer", layer: "POS DUGA AIR", text: "POS DUGA AIR" },
        {nodeType: "gx_layer", layer: "POS HUJAN", text: "POS HUJAN" },
        {nodeType: "gx_layer", layer: "POS HIDROKLIMATOLOGI", text: "POS HIDROKLIMATOLOGI" },
        {nodeType: "gx_layer", layer: "POS PENGAMATAN BANJIR", text: "POS PENGAMATAN BANJIR" },
        {nodeType: "gx_layer", layer: "RAWAN BANJIR", text: "RAWAN BANJIR" }
    ]
    },
    {
        text: 'Tematik Bancana Banjir', expanded: true, children: [
        {nodeType: "gx_layer", layer: "Tahun 2014", text: "Tahun 2014 (Sebelum Penanganan)" },
        {nodeType: "gx_layer", layer: "Tahun 2015", text: "Tahun 2015 (Sesudah Penanganan)" }
    ]
    }

];


Heron.options.searchPanelConfig = {
    xtype: 'hr_multisearchcenterpanel',
    height: 600,
    hropts: [
        {
            searchPanel: {
                xtype: 'hr_searchbydrawpanel',
                name: __('Search by Drawing'),
                description: 'Kies een laag en een tekentool. Teken een geometrie om objecten daarbinnen te zoeken.',
                header: false,
                downloadFormats: [
                    {
                        name: 'CSV',
                        outputFormat: 'csv',
                        fileExt: '.csv'
                    },
                    {
                        name: 'GML (version 2.1.2)',
                        outputFormat: 'text/xml; subtype=gml/2.1.2',
                        fileExt: '.gml'
                    },
                    {
                        name: 'ESRI Shapefile (zipped)',
                        outputFormat: 'SHAPE-ZIP',
                        fileExt: '.zip'
                    },
                    {
                        name: 'GeoJSON',
                        outputFormat: 'json',
                        fileExt: '.json'
                    }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                autoConfig: true,
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
        },
        {
            searchPanel: {
                xtype: 'hr_gxpquerypanel',
                name: 'Maak eigen zoekopdrachten',
                description: 'Zoek objecten binnen kaart-extent en/of eigen zoek-criteria',
                header: false,
                border: false,
                caseInsensitiveMatch: true,
                autoWildCardAttach: true,
                downloadFormats: [
                    {
                        name: 'CSV',
                        outputFormat: 'csv',
                        fileExt: '.csv'
                    },
                    {
                        name: 'GML (version 2.1.2)',
                        outputFormat: 'text/xml; subtype=gml/2.1.2',
                        fileExt: '.gml'
                    },
                    {
                        name: 'ESRI Shapefile (zipped)',
                        outputFormat: 'SHAPE-ZIP',
                        fileExt: '.zip'
                    },
                    {
                        name: 'GeoJSON',
                        outputFormat: 'json',
                        fileExt: '.json'
                    }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                border: false,
                autoConfig: true,
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: true
                }
            }
        },
        {
            searchPanel: {
                xtype: 'hr_searchbyfeaturepanel',
                name: 'Zoeken via object-selectie',
                description: 'Selecteer objecten uit een laag en gebruik hun geometrieën om in een andere laag te zoeken',
                header: false,
                border: false,
                bodyStyle: 'padding: 6px',
                style: {
                    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                    fontSize: '12px'
                },
                downloadFormats: [
                    {
                        name: 'CSV',
                        outputFormat: 'csv',
                        fileExt: '.csv'
                    },
                    {
                        name: 'GML (version 2.1.2)',
                        outputFormat: 'text/xml; subtype=gml/2.1.2',
                        fileExt: '.gml'
                    },
                    {
                        name: 'ESRI Shapefile (zipped)',
                        outputFormat: 'SHAPE-ZIP',
                        fileExt: '.zip'
                    },
                    {
                        name: 'GeoJSON',
                        outputFormat: 'json',
                        fileExt: '.json'
                    }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                border: false,
                autoConfig: true,
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
        }
    ]
};

Heron.options.map.toolbar = [
    {type: "scale"},
    
    {type: "featureinfo", options: {
        popupWindow: {
            width: 360,
            height: 200,
            featureInfoPanel: {
                showTopToolbar: true,
                displayPanels: ['Table'],
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
                maxFeatures: 10,
                discardStylesForDups: true
            }
        }
    }},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {type: "measurelength", options: {geodesic: false}},
    {type: "measurearea", options: {geodesic: false}},
    {type: "-"},
    {type: "printdialog", options: {url: 'http://kademo.nl/print/pdf28992.kadviewer'}},
    {type: "-"},
    {type: "oleditor", options: {
        pressed: false,
        olEditorOptions: {
            editLayer: Heron.options.worklayers.editor,
            activeControls: ['UploadFeature', 'DownloadFeature', 'Separator', 'Navigation', 'DeleteAllFeatures', 'DeleteFeature', 'DragFeature', 'SelectFeature', 'Separator', 'ModifyFeature', 'Separator'],
            featureTypes: ['text', 'polygon', 'path', 'point'],
            language: 'en',
            DownloadFeature: {
                url: Heron.globals.serviceUrl,
                formats: [
                    {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
                    {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: new OpenLayers.Format.GML.v2({featureType: 'oledit', featureNS: 'http://geops.de'})},
                    {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                    {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                    {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')}
                ],
                fileProjection: new OpenLayers.Projection('EPSG:28992')
            },
            UploadFeature: {
                url: Heron.globals.serviceUrl,
                formats: [
                    {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
                    {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML'},
                    {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                    {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                    {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                    {name: 'CSV (alleen RD-punten, moet X,Y kolom hebben)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:28992')},
                    {name: 'CSV (idem, punten in WGS84)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                    {name: 'ESRI Shapefile (1 laag, gezipped in RD)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                    {name: 'ESRI Shapefile (1 laag, gezipped in WGS84)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')}
                ],
                fileProjection: new OpenLayers.Projection('EPSG:28992')
            }
        }
    }
    },
    {type: "upload", options: {
        upload: {
            layerName: 'Scratch',
            url: Heron.globals.serviceUrl,
            formats: [
                {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
                {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML'},
                {name: 'Geographic Markup Language - v3 (GML3)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML.v3'},
                {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                {name: 'CSV (alleen RD-punten, moet X,Y kolom hebben)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:28992')},
                {name: 'CSV (idem, punten in WGS84)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                {name: 'ESRI Shapefile (1 laag, gezipped in RD)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                {name: 'ESRI Shapefile (1 laag, gezipped in WGS84)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')}
            ],
            fileProjection: new OpenLayers.Projection('EPSG:28992')
        }
    }},
    {type: "-"},
    {type: "coordinatesearch", options: {
        formWidth: 320, formPageX: 15, formPageY: 100
        , titleDescription: 'Kies eventueel een projectie systeem.<br>Voer dan X/Y-coordinaten (RD) of Lon/Lat-waarden in.<br>&nbsp;<br>', titleDescriptionStyle: 'font-size:11px; color:dimgrey;', bodyBaseCls: 'x-form-back', bodyItemCls: 'hr-html-panel-font-size-11', bodyCls: 'hr-html-panel-font-size-11', fieldMaxWidth: 200, fieldLabelWidth: 80, fieldStyle: 'color: red;', fieldLabelStyle: 'color: darkblue', layerName: 'Locatie NL - RD', onProjectionIndex: 1, onZoomLevel: -1, showProjection: true, showZoom: true, showAddMarkers: true, checkAddMarkers: true, showHideMarkers: true, checkHideMarkers: false, removeMarkersOnClose: true, showRemoveMarkersBtn: true, buttonAlign: 'center'		// left, center, right
        , hropts: [
            {
                projEpsg: 'EPSG:4326', projDesc: 'EPSG:4326 - WGS 84', fieldLabelX: 'Lon [Graden]', fieldLabelY: 'Lat [Graden]', fieldEmptyTextX: 'Voer lengtegraad (x.yz) in...', fieldEmptyTextY: 'Voer breedtegraad (x.yz) in...', fieldMinX: 3.3700, fieldMinY: 50.7500, fieldMaxX: 7.2100, fieldMaxY: 53.4700, iconWidth: 32, iconHeight: 32, localIconFile: 'bluepin.png', iconUrl: null
            },
            {
                projEpsg: 'EPSG:28992', projDesc: 'EPSG:28992 - Amersfoort / RD New', fieldLabelX: 'X [m]', fieldLabelY: 'Y [m]', fieldEmptyTextX: 'Voer X-coordinaat in...', fieldEmptyTextY: 'Voer Y-coordinaat in...', fieldMinX: -285401.920, fieldMinY: 22598.080, fieldMaxX: 595401.920, fieldMaxY: 903401.920, iconWidth: 32, iconHeight: 32, localIconFile: 'redpin.png', iconUrl: null
            }

        ]
    }},
    {
        type: "searchcenter",
        // Options for SearchPanel window
        options: {
            show: false,

            searchWindow: {
                title: null, //__('Multiple Searches'),
                x: 100,
                y: undefined,
                width: 360,
                height: 440,
                items: [
                    Heron.options.searchPanelConfig
                ]
            }
        }
    },
    {
        type: "namesearch",
        // Optional options, see OpenLSSearchCombo.js
        options: {
            xtype: 'hr_openlssearchcombo',
            id: "pdoksearchcombo",
            width: 240,
            listWidth: 400,
            minChars: 4,
            queryDelay: 200,
            zoom: 11,
            emptyText: 'Zoek adres met PDOK GeoCoder',
            tooltip: 'Zoek adres met PDOK GeoCoder',
            url: 'http://geodata.nationaalgeoregister.nl/geocoder/Geocoder?max=10'
        }
    },
    {type: "addbookmark"}
];

Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks =
[
    {
        id: 'degrift',
        name: 'Kadaster - De Grift',
        desc: 'Vestiging De Grift Apeldoorn',
        layers: ['BRT Achtergrondkaart'],
        x: 194322,
        y: 469474,
        zoom: 13
    },
    {
        id: 'debrug',
        name: 'Kadaster - De Brug',
        desc: 'Vestiging De Brug Apeldoorn',
        layers: ['Luchtfoto (PDOK)'],
        x: 194194,
        y: 465873,
        zoom: 13
    }
];