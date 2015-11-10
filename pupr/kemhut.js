/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Defines settings for the Heron App layout wihtin Layout.js.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) and GeoExt and Heron MC components.
 * For convenience specific settings within this layout are defined here
 * for structuring and reuse purposes.
 *
 **/

OpenLayers.Util.onImageLoadErrorColor = "transparent";
//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
//OpenLayers.ProxyHost = "/gisdephut/index.php/ajax/httpproxy/index/";
OpenLayers.ProxyHost = "/proxy/proxy.php?url=";
Ext.BLANK_IMAGE_URL = '/gisdephut/jslibs/extjs/3.4.1/resources/images/default/s.gif';


var hashArrayServiceURL = new Array(); //of object: {layername: "", serviceurl: ""}


/*
 * Common settings for MapPanel
 * These will be assigned as "hropts" within the MapPanel config
 */
Ext.namespace("Heron.options.map");

//var firstload;
//var oldlevel = 1;
//
//    var basemap = new OpenLayers.Layer.WMS("Peta Dasar",
//            ["/cgi-bin/tilecache.py?"],
//            {
//                layers: "gbasemap_1",
//                format: "agg/png",
//                transparent: "true"
//            }, {
//        tileSize: new OpenLayers.Size(256, 256)
//    }, {
//        buffer: 0
//    });
//    basemap.isBaseLayer = true;
//    basemap.setVisibility(false);


//    var esri_world = registerArcGISCache(
//        'ESRI World Imagery',
//        'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
//        {"currentVersion":10.01,"serviceDescription":"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.  The map includes NASA Blue Marble: Next Generation 500m resolution imagery at small scales (above 1:1,000,000), i-cubed 15m eSAT imagery at medium-to-large scales (down to 1:70,000) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe.  In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, i-cubed Nationwide Prime, Getmapping, AeroGRID, IGN Spain, and IGP Portugal.  Additionally, imagery at different resolutions has been contributed by the GIS User Community. For more information on this map, including the terms of use, visit us \u003ca href=\"http://goto.arcgisonline.com/maps/World_Imagery \" target=\"_new\"\u003eonline\u003c/a\u003e.","mapName":"Layers","description":"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.  The map includes NASA Blue Marble: Next Generation 500m resolution imagery at small scales (above 1:1,000,000), i-cubed 15m eSAT imagery at medium-to-large scales (down to 1:70,000) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe.  In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, i-cubed Nationwide Prime, Getmapping, AeroGRID, IGN Spain, and IGP Portugal.  Additionally, imagery at different resolutions has been contributed by the GIS User Community. For more information on this map, including the terms of use, visit us online at http://goto.arcgisonline.com/maps/World_Imagery","copyrightText":"Source: Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community","layers":[{"id":0,"name":"World Imagery","parentLayerId":-1,"defaultVisibility":true,"subLayerIds":null,"minScale":0,"maxScale":0},{"id":1,"name":"Low Resolution 15m Imagery","parentLayerId":-1,"defaultVisibility":true,"subLayerIds":null,"minScale":0,"maxScale":0},{"id":2,"name":"High Resolution 60cm Imagery","parentLayerId":-1,"defaultVisibility":true,"subLayerIds":null,"minScale":0,"maxScale":0},{"id":3,"name":"High Resolution 30cm Imagery","parentLayerId":-1,"defaultVisibility":true,"subLayerIds":null,"minScale":0,"maxScale":0}],"tables":[],"spatialReference":{"wkid":102100},"singleFusedMapCache":true,"tileInfo":{"rows":256,"cols":256,"dpi":96,"format":"JPEG","compressionQuality":75,"origin":{"x":-20037508.342787,"y":20037508.342787},"spatialReference":{"wkid":102100},"lods":[
//                    {"level":0,"resolution":156543.033928,"scale":591657527.591555},{"level":1,"resolution":78271.5169639999,"scale":295828763.795777},{"level":2,"resolution":39135.7584820001,"scale":147914381.897889},{"level":3,"resolution":19567.8792409999,"scale":73957190.948944},{"level":4,"resolution":9783.93962049996,"scale":36978595.474472},{"level":5,"resolution":4891.96981024998,"scale":18489297.737236},{"level":6,"resolution":2445.98490512499,"scale":9244648.868618},{"level":7,"resolution":1222.99245256249,"scale":4622324.434309},{"level":8,"resolution":611.49622628138,"scale":2311162.217155},{"level":9,"resolution":305.748113140558,"scale":1155581.108577},{"level":10,"resolution":152.874056570411,"scale":577790.554289},{"level":11,"resolution":76.4370282850732,"scale":288895.277144},{"level":12,"resolution":38.2185141425366,"scale":144447.638572},{"level":13,"resolution":19.1092570712683,"scale":72223.819286},{"level":14,"resolution":9.55462853563415,"scale":36111.909643},{"level":15,"resolution":4.77731426794937,"scale":18055.954822},{"level":16,"resolution":2.38865713397468,"scale":9027.977411},{"level":17,"resolution":1.19432856685505,"scale":4513.988705},{"level":18,"resolution":0.597164283559817,"scale":2256.994353},{"level":19,"resolution":0.298582141647617,"scale":1128.497176}]},"initialExtent":{"xmin":-84503939.5387056,"ymin":-140839899.231176,"xmax":84503939.5387056,"ymax":140839899.231176,"spatialReference":{"wkid":102100}},"fullExtent":{"xmin":-20037507.2295943,"ymin":-19971868.8804086,"xmax":20037507.2295943,"ymax":19971868.8804086,"spatialReference":{"wkid":102100}},"units":"esriMeters","supportedImageFormatTypes":"PNG24,PNG,JPG,DIB,TIFF,EMF,PS,PDF,GIF,SVG,SVGZ,AI,BMP","documentInfo":{"Title":"World Imagery","Author":"Esri","Comments":"","Subject":"imagery, satellite, aerial, 500m (World), 15m (World)","Category":"imageryBaseMapsEarthCover (Imagery, basemaps, and land cover)","Keywords":"World, Global, United States","Credits":"Source: Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community"},"capabilities":"Map,Query,Data"},
//        {"currentVersion":10.01,"id":0,"name":"World Imagery","type":"Feature Layer","description":"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.  The map includes NASA Blue Marble: Next Generation 500m resolution imagery at small scales (above 1:1,000,000), i-cubed 15m eSAT imagery at medium-to-large scales (down to 1:70,000) for the world, and USGS 15m Landsat imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in parts of Western Europe from Digital Globe.  In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, i-cubed Nationwide Prime, Getmapping, AeroGRID, IGN Spain, and IGP Portugal.  Additionally, imagery at different resolutions has been contributed by the GIS User Community. For more information on this map, including the terms of use, visit us online at http://goto.arcgisonline.com/maps/World_Imagery","definitionExpression":"","geometryType":"esriGeometryPolygon","copyrightText":"Source: Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community","parentLayer":null,"subLayers":[],"minScale":0,"maxScale":0,"defaultVisibility":true,"extent":{"xmin":-20033368.0312332,"ymin":-7555723.80827944,"xmax":20033753.1642994,"ymax":11759592.6976152,"spatialReference":{"wkid":102100}},"hasAttachments":false,"htmlPopupType":"esriServerHTMLPopupTypeNone","drawingInfo":{"renderer":{"type":"simple","symbol":{"type":"esriSFS","style":"esriSFSSolid","color" : null,"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[110,110,110,255],"width":0}},"label":"","description":""},"transparency":0,"labelingInfo" : null},"displayField":"NICE_NAME","fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"Shape","type":"esriFieldTypeGeometry","alias":"Shape"},{"name":"SRC_DATE","type":"esriFieldTypeInteger","alias":"DATE (YYYYMMDD)"},{"name":"SRC_RES","type":"esriFieldTypeDouble","alias":"RESOLUTION (M)"},{"name":"SRC_ACC","type":"esriFieldTypeDouble","alias":"ACCURACY (M)"},{"name":"SRC_DESC","type":"esriFieldTypeString","alias":"DESCRIPTION","length":25},{"name":"NICE_NAME","type":"esriFieldTypeString","alias":"SOURCE_INFO","length":33},{"name":"NICE_DESC","type":"esriFieldTypeString","alias":"SOURCE","length":12}],"typeIdField" : null,"types" : null,"relationships":[],"capabilities":"Map,Query,Data"},
//        '',
//        false,
//        false
//    );
/*     var agcl_pelepasan = registerArcGISCache(
		'Pelepasan Kawasan Hutan',
		'Pelepasan_Kawasan_Hutan',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Pelepasan_Kawasan_Hutan/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Pelepasan_Kawasan_Hutan|MapServer',
        false,
        false   
    ); */
	 
	 
    var agcl_pinjam_pakai = registerArcGISCache(
        'Pinjam Pakai Kawasan Hutan',	
		'Pinjam_Pakai_Kawasan_Hutan',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Pinjam_Pakai_Kawasan_Hutan/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Pinjam_Pakai_Kawasan_Hutan|MapServer',
        false,
        false
    );

    var agcl_pemanfaatan_hutan_alam = registerArcGISCache(
		'Hutan Alam',
		'Pemanfaatan_Kawasan_Hutan_Alam',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Pemanfaatan_Kawasan_Hutan_Alam/MapServer',
		'/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Pemanfaatan_Kawasan_Hutan_Alam|MapServer',
        false,
        false
    );


    var agcl_pemanfaatan_hutan_tanaman = registerArcGISCache(
        'Hutan Tanaman Industri',
		'Hutan_Tanaman',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Hutan_Tanaman/MapServer',
		'/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Hutan_Tanaman|MapServer',
        false,
        false
    );

    var agcl_htr = registerArcGISCache(
		'Hutan Tanaman Rakyat',
		'Hutan_Tanaman_Rakyat',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Hutan_Tanaman_Rakyat/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Hutan_Tanaman_Rakyat|MapServer',
        false,
        false
    );

    var agcl_restorasi = registerArcGISCache(
        'Restorasi Ekosistem',
		'Restorasi_Ekosistem',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Restorasi_Ekosistem/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Restorasi_Ekosistem|MapServer',
		false,
        false
    );

    var agcl_hkm = registerArcGISCache(
        'Hutan Kemasyarakatan',
		'Hutan_Kemasyarakatan',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Hutan_Kemasyarakatan/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Hutan_Kemasyarakatan|MapServer',
        false,
        false
    );

    var agcl_jasa_lingkungan = registerArcGISCache(
        'Jasa Lingkungan',
		'Jasa_Lingkungan',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Jasa_Lingkungan/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Jasa_Lingkungan|MapServer',
        false,
        false
    );

  /*   var agcl_kph = registerArcGISCache(
        'KPH',
		'Kesatuan_Pengelolaan_Hutan',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Kesatuan_Pengelolaan_Hutan/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Kesatuan_Pengelolaan_Hutan|MapServer',
        false,
        false
    ); */
    
    var agcl_kphk_kphmodel = registerArcGISCache(
        'KPHK dan KPH Model',
		'KPHK_dan_KPHModel',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/KPHK_dan_KPHModel/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|KPHK_dan_KPHModel|MapServer',
        false,
        false
    );	

    var agcl_kphl_kphpprovinsi = registerArcGISCache(
        'KPHL dan KPHP Provinsi',
		'KPHL_dan_KPHP_Provinsi',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/KPHL_dan_KPHP_Provinsi/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|KPHL_dan_KPHP_Provinsi|MapServer',
        false,
        false
    );
	
	
    var agcl_landcover = registerArcGISCache(
        'Penutupan Lahan',
		'Penutupan_Lahan_2014',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Penutupan_Lahan_2014/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Penutupan_Lahan_2014|MapServer',
        false,
        false
    );

    var agcl_lahan_kritis = registerArcGISCache(
        'Lahan Kritis',
		'Lahan_Kritis',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Lahan_Kritis/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Lahan_Kritis|MapServer',
        false,
        false
    );


    var agcl_kawasan_hutan = registerArcGISCache(
        'Kawasan Hutan',
		'Kawasan_Hutan',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Kawasan_Hutan/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Kawasan_Hutan|MapServer',
        false,
        false
    );

    var agcl_deforestasi = registerArcGISCache(
        'Deforestasi 2012-2013',
		'Deforestasi_2012_2013',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Deforestasi_2012_2013/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Deforestasi_2012_2013|MapServer',
        false,
        false
    );
    var agcl_batas_das = registerArcGISCache(
        'Batas DAS',
		'Batas_DAS',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Batas_DAS/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Batas_DAS|MapServer',
        false,
        false
    );

    var agcl_landsat = registerArcGISCache(
        'Citra Landsat',
		'Landsat',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Landsat/MapServer',
        '',
        false,
        false
    );
	agcl_landsat.setOpacity(0.3);

    var agcl_mangrove = registerArcGISCache(
        'Mangrove',
		'Mangrove',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Mangrove/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Mangrove|MapServer',
        false,
        false
    );
    
    var agcl_hutandesa = registerArcGISCache(
        'Hutan Desa',
		'Hutan_Desa',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Hutan_Desa/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Hutan_Desa|MapServer',
        false,
        false
    );
    var agcl_landsat = registerArcGISCache(
        'Citra Landsat',
		'Landsat',
        'http://webgis.dephut.go.id/ArcGIS/rest/services/Landsat/MapServer',
        '',
        false,
        false
    );
	agcl_landsat.setOpacity(0.3);
	
	
	//Start Penambahan Layer Map
	    var agcl_rlh_2010 = registerArcGISCache(
        'RHL 2010',	
		'RHL_2010',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/RHL_2010/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|RHL_2010|MapServer',
        false,
        false
    );
	var agcl_rlh_2011 = registerArcGISCache(
        'RHL 2011',	
		'RHL_2011',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/RHL_2011/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|RHL_2011|MapServer',
        false,
        false
    );
	var agcl_rlh_2012 = registerArcGISCache(
        'RHL 2012',	
		'RHL_2012',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/RHL_2012/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|RHL_2012|MapServer',
        false,
        false
    );
	var agcl_rlh_2013 = registerArcGISCache(
        'RHL 2013',	
		'RHL_2013',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/RHL_2013/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|RHL_2013|MapServer',
        false,
        false
    );
		var agcl_rlh_2014 = registerArcGISCache(
        'RHL 2014',	
		'RHL_2014',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/RHL_2014/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|RHL_2014|MapServer',
        false,
        false
    );
	    var agcl_zona_benih = registerArcGISCache(
        'Zona Benih Tanaman Hutan',	
		'Zona_Benih_Tanaman_Hutan_Indonesia',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Zona_Benih_Tanaman_Hutan_Indonesia/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Zona_Benih_Tanaman_Hutan_Indonesia|MapServer',
        false,
        false
    );	
	
	    var agcl_pemanfaatan_bukan_kayu = registerArcGISCache(
        'Pemanfaatan Bukan Kayu pada Hutan Tanaman',	
		'Pemanfaatan_Bukan_Kayu_pada_Hutan_Tanaman',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Pemanfaatan_Bukan_Kayu_pada_Hutan_Tanaman/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Pemanfaatan_Bukan_Kayu_pada_Hutan_Tanaman|MapServer',
        false,
        false
    );		

		var agcl_pelepasan_khkebun = registerArcGISCache(
        'Pelepasan Kawasan Hutan Kebun',	
		'Pelepasan_KH_Kebun',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Pelepasan_KH_Kebun/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Pelepasan_KH_Kebun|MapServer',
        false,
        false
    );	

		var agcl_pelepasan_khtrans = registerArcGISCache(
        'Pelepasan Kawasan Hutan Transmigrasi',	
		'Pelepasan_KH_Trans',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Pelepasan_KH_Trans/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Pelepasan_KH_Trans|MapServer',
        false,
        false
    );	
		var agcl_pippib_viii = registerArcGISCache(
        'PIPPIB VIII',	
		'PIPPIB_VIII',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/PIPPIB_VIII/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|PIPPIB_VIII|MapServer',
        false,
        false
    );	
//Finish Penambahan Layer Map
	
/*     var agcl_kantorkemenhut = registerArcGIS(
        'Kantor Kemenhut',
        'Kantor_Kemenhut',
		'http://webgis.dephut.go.id/ArcGIS/rest/services/Kantor_Kemenhut/MapServer',
        '/gisdephut/index.php/ajax/legendtool/index/webgis.dephut.go.id|arcgis|services|Kantor_Kemenhut|MapServer',
        false,
        false
    ); */
    var userCoordLayer = new OpenLayers.Layer.Vector("usercoordlayer");
    userCoordLayer.setVisibility(true);
    userCoordLayer.displayInLayerSwitcher = false;


function hideAllLayers() {
    agcl_landsat.setVisibility(true);
    agcl_kawasan_hutan.setVisibility(true);
    agcl_batas_das.setVisibility(false);
    agcl_lahan_kritis.setVisibility(false);
    agcl_landcover.setVisibility(false);
    agcl_kph.setVisibility(false); 
    agcl_jasa_lingkungan.setVisibility(false);
    agcl_hkm.setVisibility(false);
    agcl_restorasi.setVisibility(false);
    agcl_htr.setVisibility(false);
    agcl_pemanfaatan_hutan_tanaman.setVisibility(false);
    agcl_pemanfaatan_hutan_alam.setVisibility(false);
    agcl_pinjam_pakai.setVisibility(false);
    agcl_mangrove.setVisibility(false);
    agcl_hutandesa.setVisibility(false);
    agcl_rlh_2014.setVisibility(false);
    agcl_zona_benih.setVisibility(false);
    agcl_pemanfaatan_bukan_kayu.setVisibility(false);
    agcl_kphk_kphmodel.setVisibility(false);
    agcl_kphl_kphpprovinsi.setVisibility(false);
    agcl_pelepasan_khkebun.setVisibility(false);
    agcl_pelepasan_khtrans.setVisibility(false);
	agcl_deforestasi.setVisibility(false);
	agcl_pippib_viii.setVisibility(false);
    /* agcl_kantorkemenhut.setVisibility(false); */
}


//    var agcl_landuse = registerArcGISCache(
//        'Penggunaan Lahan',
//        'http://webgis.dephut.go.id/ArcGIS/rest/services/PL/MapServer',
//        {"serviceDescription": "", "mapName": "layers", "description": "Walidata DIREKTORAT JENDERAL BINA PENGELOLAAN DAERAH ALIRAN SUNGAI DAN PERHUTANAN SOSIAL ", "copyrightText": "Copyright 2011, Direktorat Jenderal Planologi Kehutanan, Kementerian Kehutanan", "layers": [{"id": 0, "name": "BAPLAN_HTR", "parentLayerId": -1, "defaultVisibility": true, "subLayerIds": null}], "spatialReference": {"wkid": 102113}, "singleFusedMapCache": true, "tileInfo": {"rows": 256, "cols": 256, "dpi": 96, "format": "PNG8", "compressionQuality": 0, "origin": {"x": -20037508.342787, "y": 20037508.342787}, "spatialReference": {"wkid": 102113}, "lods": [{"level": 0, "resolution": 19567.8792409999, "scale": 73957190.948944}, {"level": 1, "resolution": 9783.93962049996, "scale": 36978595.474472}, {"level": 2, "resolution": 4891.96981024998, "scale": 18489297.737236}, {"level": 3, "resolution": 2445.98490512499, "scale": 9244648.868618}, {"level": 4, "resolution": 1222.99245256249, "scale": 4622324.434309}, {"level": 5, "resolution": 611.49622628138, "scale": 2311162.217155}, {"level": 6, "resolution": 305.748113140558, "scale": 1155581.108577}, {"level": 7, "resolution": 152.874056570411, "scale": 577790.554289}, {"level": 8, "resolution": 76.4370282850732, "scale": 288895.277144}]}, "initialExtent": {"xmin": 9095088.2139932, "ymin": -2615383.55589937, "xmax": 17177711.2565542, "ymax": 2012232.22753583, "spatialReference": {"wkid": 102113}}, "fullExtent": {"xmin": 10371313.4214113, "ymin": -2615383.55589937, "xmax": 15901486.0491361, "ymax": 2012232.22753583, "spatialReference": {"wkid": 102113}}, "units": "esriMeters", "documentInfo": {"Title": "lokal", "Author": "Copyright 2011, Direktorat Jenderal Planologi Kehutanan, Kementerian Kehutanan", "Comments": "Walidata DIREKTORAT JENDERAL BINA PENGELOLAAN DAERAH ALIRAN SUNGAI DAN PERHUTANAN SOSIAL ", "Subject": "", "Category": "", "Keywords": ""}},
//        false,
//        false
//    );




//function mapMoveEnd(a) {
//    if (a.type === "moveend") {
////        updateMapIndex();
//    }
//}
//function mapMoveStart(a) {
//    if (a.type === "movestart") {
//
//    }
//}
//function mapZoomEnd(d) {
//    if (d.type === "zoomend") {
//        
//        var xmap = Heron.App.getMap();
//
////        if (asdfadded == 1) {
////            alert('mau nambah layer');
//////            alert(xmap.layers.length);
////            if (typeof(xmap != 'undefined')) {
////                xmap.addLayers([aglayer]);
////                alert(xmap.layers.length);
////                asdfadded = 2;
////            }
////        }
//        
////        alert('layer: ' + xmap.layers.length);
////        alert('jumlah: ' + xmap.getNumLayers());
////        alert('zoom: ' + xmap.getZoom());
//        
////        alert(map);
//        
////        alert(JSON.stringify(map));
////        alert(map.toSource());
//        
//        var e = xmap.getZoom();
//        var c = new Date();
//        var a = "" + c.getTime();
//        if (e !== oldlevel) {
//            var b = "/cgi-bin/tilecache.py?layers=gbasemap_" + e + "&ep=" + a;
//            basemap.setUrl(b);
//            basemap.addOptions({
//                buffer: 0
//            });
//            basemap.redraw();
//        }
//        oldlevel = e;
////        updateMapIndex();
//    }
//}
//


Heron.options.map.settings = {
    
    maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
    minExtent: new OpenLayers.Bounds(-1, -1, -1, -1),
//    restrictedExtent: new OpenLayers.Bounds(7000000,-4500000,19000000,4000000),
    restrictedExtent: new OpenLayers.Bounds(10000000,-1500000,16000000,1000000),

    resolutions: [
        19567.8792409999,
        9783.93962049996,
        4891.96981024998,
        2445.98490512499,
        1222.99245256249,
        611.49622628138,
        305.748113140558,
        152.874056570411,
        76.4370282850732
//        19567.8792409999,
//        9783.939619140625,
//        4891.9698095703125,
//        2445.9849047851562,
//        1222.9924523925781,
//        611.4962261962891,
//        305.74811309814453,
//        152.87405654907226,
//        76.43702827453613
        ],
    projection: "EPSG:102113",
    displayProjection: new OpenLayers.Projection("EPSG:4326"),
    units: "meters",
//    tileSize: new OpenLayers.Size(256, 256),
    // numZoomLevels: 9,
    numZoomLevels: 22,
//    eventListeners: {
//        //                "movestart": mapMoveStart,
//        //                "moveend": mapMoveEnd,
//        "zoomend": mapZoomEnd
//        //                "move": mapZooming,
//        //                //"changelayer": mapLayerChanged,
//        //                "changebaselayer": mapBaseLayerChanged
//    },
    // minResolution: "auto",
    // maxResolution: 19567.8792409999,
    // minZoomLevel: 3,
    // maxZoomLevel: 11,
    // minResolution: "auto",
    maxResolution: 19567.8792409999,
    minZoomLevel: 3,
    maxZoomLevel: 11,
    permalinks: {
        /** The prefix to be used for parameters, e.g. map_x, default is 'map' */
        paramPrefix: 'map',

        /** Encodes values of permalink parameters ? default false*/
        encodeType: false,
        /** Use Layer names i.s.o. OpenLayers-generated Layer Id's in Permalinks */
        prettyLayerNames: true
    },
	controls : [
        new OpenLayers.Control.PanZoomBar()
//        new OpenLayers.Control.LayerSwitcher()
//        new OpenLayers.Control.Attribution(),
//        new OpenLayers.Control.ZoomBox(),
//        new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}}),
//        new OpenLayers.Control.LoadingPanel(),
//        new OpenLayers.Control.PanPanel(),
//        new OpenLayers.Control.ZoomPanel(),
//        new OpenLayers.Control.OverviewMap(),
//        new OpenLayers.Control.ScaleLine({geodesic: true, maxWidth: 200})
   ] 
};

// TODO see how we can set/override Map OpenLayers Controls
//Heron.options.map.controls = [new OpenLayers.Control.ZoomBox(),
//			new OpenLayers.Control.ScaleLine({geodesic: true, maxWidth: 200})];
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



//alert('mau assign layer');
/*
 * Layers to be added to the map.
 * Syntax is defined in OpenLayers Layer API.
 * ("isBaseLayer: true" means the layer will be added as base/background layer).
 */
Heron.options.map.layers = [

    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */

//    basemap,

//    esri_world,

    new OpenLayers.Layer.Bing({
        name: "Bing Road",
        key:  'AmNNcTz0Uyete6Wtxi5oy2Id6V0T6Jp_T7DPeb7vt9OH-INf_hBrGFZOYLWqeWtF',
        type: "Road",
        maxResolution: 19567.8792409999,
        numZoomLevels: 19,
        resolutions: [
            19567.8792409999,
            9783.93962049996,
            4891.96981024998,
            2445.98490512499,
            1222.99245256249,
            611.49622628138,
            305.748113140558,
            152.874056570411,
            76.4370282850732,
//                19567.87923828125, 
//                9783.939619140625, 
//                4891.9698095703125,
//                2445.9849047851562, 
//                1222.9924523925781, 
//                611.4962261962891,
//                305.74811309814453, 
//                152.87405654907226, 
//                76.43702827453613,
           38.218514137268066, 
           19.109257068634033, 
           9.554628534317017,
           4.777314267158508, 
           2.388657133579254, 
           1.194328566789627,
           0.5971642833948135, 
           0.29858214169740677, 
           0.14929107084870338,
           0.07464553542435169
       ]
    }),

    new OpenLayers.Layer.Bing({
        name: "Bing Hybrid",
        key:  'AmNNcTz0Uyete6Wtxi5oy2Id6V0T6Jp_T7DPeb7vt9OH-INf_hBrGFZOYLWqeWtF',
        type: "AerialWithLabels",
        maxResolution: 19567.8792409999,
        numZoomLevels: 19,
        resolutions: [
            19567.8792409999,
            9783.93962049996,
            4891.96981024998,
            2445.98490512499,
            1222.99245256249,
            611.49622628138,
            305.748113140558,
            152.874056570411,
            76.4370282850732,
//                19567.87923828125, 
//                9783.939619140625, 
//                4891.9698095703125,
//                2445.9849047851562, 
//                1222.9924523925781, 
//                611.4962261962891,
//                305.74811309814453, 
//                152.87405654907226, 
//                76.43702827453613,
           38.218514137268066, 
           19.109257068634033, 
           9.554628534317017,
           4.777314267158508, 
           2.388657133579254, 
           1.194328566789627,
           0.5971642833948135, 
           0.29858214169740677, 
           0.14929107084870338,
           0.07464553542435169
       ]
    }),

    new OpenLayers.Layer.Bing({
        name: "Bing Aerial",
        key:  'AmNNcTz0Uyete6Wtxi5oy2Id6V0T6Jp_T7DPeb7vt9OH-INf_hBrGFZOYLWqeWtF',
        type: "Aerial",
        maxResolution: 19567.8792409999,
        numZoomLevels: 19,
        resolutions: [
            19567.8792409999,
            9783.93962049996,
            4891.96981024998,
            2445.98490512499,
            1222.99245256249,
            611.49622628138,
            305.748113140558,
            152.874056570411,
            76.4370282850732,
           38.218514137268066, 
           19.109257068634033, 
           9.554628534317017,
           4.777314267158508, 
           2.388657133579254, 
           1.194328566789627,
           0.5971642833948135, 
           0.29858214169740677, 
           0.14929107084870338,
           0.07464553542435169
       ]
        
    }),


    new OpenLayers.Layer.OSM(
        "OpenStreetMap",
        "",
        {
            isBaseLayer:true,
            displayInLayerSwitcher:true,
            zoomOffset: 3,
             resolutions: [
                 19567.8792409999,
                 9783.93962049996,
                 4891.96981024998,
                 2445.98490512499,
                 1222.99245256249,
                 611.49622628138,
                 305.748113140558,
                 152.874056570411,
                 76.4370282850732,
//                19567.87923828125, 
//                9783.939619140625, 
//                4891.9698095703125,
//                2445.9849047851562, 
//                1222.9924523925781, 
//                611.4962261962891,
//                305.74811309814453, 
//                152.87405654907226, 
//                76.43702827453613,
                38.218514137268066, 
                19.109257068634033, 
                9.554628534317017,
                4.777314267158508, 
                2.388657133579254, 
                1.194328566789627,
                0.5971642833948135, 
                0.29858214169740677, 
                0.14929107084870338,
                0.07464553542435169
            ]
        }
    ),      
    
    new OpenLayers.Layer.Google(
            "Google Streets", // the default
            {type: google.maps.MapTypeId.ROADMAP, visibility: false},
            {singleTile: false, buffer: 0, isBaseLayer: true}
    ),

    new OpenLayers.Layer.Google(
            "Google Hybrid", // the default
            {type: google.maps.MapTypeId.HYBRID, visibility: false},
            {singleTile: false, buffer: 0, isBaseLayer: true}
    ),

    new OpenLayers.Layer.Google(
            "Google Satellite",
            {type: google.maps.MapTypeId.SATELLITE, visibility: true},
            {singleTile: false, buffer: 0, isBaseLayer: true}

    ),

    new OpenLayers.Layer.Google(
            "Google Terrain",
            {type: google.maps.MapTypeId.TERRAIN, visibility: false},
            {singleTile: false, buffer: 0, isBaseLayer: true}
    )

	//    new OpenLayers.Layer.Yahoo(
//        "Yahoo Street",
//        {sphericalMercator: true}
//    ),
//
//    new OpenLayers.Layer.Yahoo(
//        "Yahoo Satellite",
//        {'type': YAHOO_MAP_SAT, sphericalMercator: true}
//    ),
//
//    new OpenLayers.Layer.Yahoo(
//        "Yahoo Hybrid",
//        {'type': YAHOO_MAP_HYB, sphericalMercator: true}
//    ),


    /*
     * ==================================
     *            Overlays
     * ==================================
     */
    
/*    
    agcl_landsat
    , agcl_mangrove
    , agcl_batas_das
    , agcl_lahan_kritis
    , agcl_jasa_lingkungan
    , agcl_hutandesa
    , agcl_hkm
    , agcl_restorasi
    , agcl_htr
    , agcl_pemanfaatan_hutan_tanaman
    , agcl_pemanfaatan_hutan_alam
    , agcl_pinjam_pakai
    , agcl_pelepasan
    , agcl_kph
    , agcl_landcover
    , agcl_kawasan_hutan
    , agcl_pippib_viii
	
    , userCoordLayer
*/

];


if (agcl_landsat) Heron.options.map.layers.push(agcl_landsat);
if (agcl_mangrove) Heron.options.map.layers.push(agcl_mangrove);
if (agcl_batas_das) Heron.options.map.layers.push(agcl_batas_das);
if (agcl_lahan_kritis) Heron.options.map.layers.push(agcl_lahan_kritis);
if (agcl_jasa_lingkungan) Heron.options.map.layers.push(agcl_jasa_lingkungan);
if (agcl_hutandesa) Heron.options.map.layers.push(agcl_hutandesa);
if (agcl_hkm) Heron.options.map.layers.push(agcl_hkm);
if (agcl_restorasi) Heron.options.map.layers.push(agcl_restorasi);
if (agcl_htr) Heron.options.map.layers.push(agcl_htr);
if (agcl_pemanfaatan_hutan_tanaman) Heron.options.map.layers.push(agcl_pemanfaatan_hutan_tanaman);
if (agcl_pemanfaatan_hutan_alam) Heron.options.map.layers.push(agcl_pemanfaatan_hutan_alam);
if (agcl_pinjam_pakai) Heron.options.map.layers.push(agcl_pinjam_pakai);
/* if (agcl_pelepasan) Heron.options.map.layers.push(agcl_pelepasan); */
/* if (agcl_kph) Heron.options.map.layers.push(agcl_kph); */
if (agcl_landcover) Heron.options.map.layers.push(agcl_landcover);
if (agcl_kawasan_hutan) Heron.options.map.layers.push(agcl_kawasan_hutan);
if (agcl_rlh_2010) Heron.options.map.layers.push(agcl_rlh_2010);
if (agcl_rlh_2011) Heron.options.map.layers.push(agcl_rlh_2011);
if (agcl_rlh_2012) Heron.options.map.layers.push(agcl_rlh_2012);
if (agcl_rlh_2013) Heron.options.map.layers.push(agcl_rlh_2013);
if (agcl_rlh_2014) Heron.options.map.layers.push(agcl_rlh_2014);
if (agcl_zona_benih) Heron.options.map.layers.push(agcl_zona_benih);
if (agcl_pemanfaatan_bukan_kayu) Heron.options.map.layers.push(agcl_pemanfaatan_bukan_kayu);
if (agcl_kphk_kphmodel) Heron.options.map.layers.push(agcl_kphk_kphmodel);
if (agcl_kphl_kphpprovinsi) Heron.options.map.layers.push(agcl_kphl_kphpprovinsi);
if (agcl_pelepasan_khkebun) Heron.options.map.layers.push(agcl_pelepasan_khkebun);
if (agcl_pelepasan_khtrans) Heron.options.map.layers.push(agcl_pelepasan_khtrans);
if (agcl_deforestasi) Heron.options.map.layers.push(agcl_deforestasi);
if (agcl_pippib_viii) Heron.options.map.layers.push(agcl_pippib_viii);
/* if (agcl_kantorkemenhut) Heron.options.map.layers.push(agcl_kantorkemenhut); */



if (agcl_landsat) Heron.options.map.layers.push(userCoordLayer);

/* if (agcl_kantorkemenhut) Heron.options.map.layers.push(userCoordLayer); */




// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. "-" denotes a separator item.
Heron.options.map.toolbar = [
   {type: "scale", options: {width: 110}},
    {type: "-"} ,
    {type: "featureinfo", options: {
        popupWindow: {
            width: 360,
            height: 200,
            featureInfoPanel: {
                showTopToolbar: true,

                // Option values are 'Grid', 'Tree' and 'XML', default is 'Grid' (results in no display menu)
                // displayPanels: ['Grid', 'XML', 'Tree'], DEPRECATED
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText'],
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                // exportFormats: ['CSV', 'XLS'],
                maxFeatures: 10
            }
        }
    }},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "coordinatesearch", options: {onSearchCompleteZoom: 8, fieldLabelX: 'lon', fieldLabelY: 'lat'}},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {type: "measurelength", options: {geodesic: true}},
    {type: "measurearea", options: {geodesic: true}},
    {type: "-"},
    {type: "addbookmark"}
];

// The content of the HTML info panel.
Ext.namespace("Heron.options.info");
Heron.options.info.html =
        '<div id="info_panel" class="hr-html-panel-body">' +
        '</div>';

/*
 * Values for BookmarksPanel (bookmarks to jump to specific
 * layers/zoom/center on map. 
 */
Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks =
        [
            {
                id: 'id_indonesia',
                name: 'Wilayah Indonesia',
                desc: 'Indonesia',
                layers: ['Google Streets'],
                x: 13100000,
                y: -340399,
                zoom: 1
            },
            {
                id: 'id_poldametro',
                name: 'DKI Jakarta',
                desc: 'DKI Jakarta',
                layers: ['Google Streets'],
                x: 11892889,
                y: -691966,
                zoom: 8
            }
            , {
                id: 'id_poldajabar',
                name: 'Jawa Barat',
                desc: 'Jawa Barat',
                layers: ['Google Streets'],
                x: 11985341,
                y: -780000,
                zoom:6
            }

        ];
