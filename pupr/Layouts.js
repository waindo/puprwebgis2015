
Ext.namespace("Heron");
Ext.namespace("Heron.options");

Heron.layout = {
	xtype: 'panel',
	id: 'hr-container-main',
    layout: 'border',

	items: [
		{
			xtype: 'panel',

			id: 'hr-menu-left-container',
			layout: 'accordion',
			region: "west",
			width: 240,
			collapsible: true,
			split: true,
			border: false,
			items: [
				{
					xtype: 'hr_layertreepanel',

                    contextMenu: [
                         {
                             xtype: 'hr_layernodemenulayerinfo'
                         },
                         {
                             xtype: 'hr_layernodemenuzoomextent'
                         },
                         {
                             xtype: 'hr_layernodemenuopacityslider'
                         }
                     ]
				},

				{
					xtype: 'hr_htmlpanel',
					id: 'hr-info-west',
					html: Heron.options.info.html,
					preventBodyReset: true,
					title: 'Info'
				},
				{
					xtype: 'hr_bookmarkspanel',
					id: 'hr-bookmarks',
					hropts: Heron.options.bookmarks
				}
			]
		},
		{
			xtype: 'panel',

			id: 'hr-map-and-info-container',
			layout: 'border',
			region: 'center',
			width: '100%',
			// collapsible: true,
			split	: true,
			border: false,
			items: [
				{
					// The Map
					xtype: 'hr_mappanel',
					id: 'hr-map',
					region: 'center',
					collapsible: false,
					border: false,
					hropts: Heron.options.map
				}

			]
		},
		{
			xtype: 'panel',

			id: 'hr-menu-right-container',
			layout: 'accordion',
			region: "east",
			width: 200,
			collapsible: true,
			collapsed: false,
			split: true,
			border: false,
			items: [
				{
					xtype: 'hr_layerlegendpanel',

                    bodyStyle: 'padding:10px 10px',
                    border: false,
					defaults: {
						// see GeoExt
						labelCls: 'hr-legend-panel-header',
	 	 				useScaleParameter: true,
		 				baseParams: {
			 				FORMAT: 'image/png',

			 				LEGEND_OPTIONS: 'forceLabels:on;fontName=Verdana;fontSize:11'
		 				}
	 				},
					hropts: {
						prefetchLegends: false
					}
				}
			]
		}
	]
};
