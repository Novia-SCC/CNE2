var wms_layers = [];

var format_MunicipaltyinUusimaa_0 = new ol.format.GeoJSON();
var features_MunicipaltyinUusimaa_0 = format_MunicipaltyinUusimaa_0.readFeatures(json_MunicipaltyinUusimaa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipaltyinUusimaa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipaltyinUusimaa_0.addFeatures(features_MunicipaltyinUusimaa_0);
var lyr_MunicipaltyinUusimaa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipaltyinUusimaa_0, 
                style: style_MunicipaltyinUusimaa_0,
                popuplayertitle: 'Municipalty in Uusimaa',
                interactive: true,
    title: 'Municipalty in Uusimaa<br />\
    <img src="styles/legend/MunicipaltyinUusimaa_0_0.png" /> Destination Marketing Organization participating in CNE2.0 project<br />\
    <img src="styles/legend/MunicipaltyinUusimaa_0_1.png" /> Not in the CNE 2.0 project<br />' });
var format_Nationallyvaluablelandscapes_1 = new ol.format.GeoJSON();
var features_Nationallyvaluablelandscapes_1 = format_Nationallyvaluablelandscapes_1.readFeatures(json_Nationallyvaluablelandscapes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nationallyvaluablelandscapes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nationallyvaluablelandscapes_1.addFeatures(features_Nationallyvaluablelandscapes_1);
var lyr_Nationallyvaluablelandscapes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nationallyvaluablelandscapes_1, 
                style: style_Nationallyvaluablelandscapes_1,
                popuplayertitle: 'Nationally valuable landscapes',
                interactive: true,
                title: '<img src="styles/legend/Nationallyvaluablelandscapes_1.png" /> Nationally valuable landscapes'
            });
var format_Roadway_2 = new ol.format.GeoJSON();
var features_Roadway_2 = format_Roadway_2.readFeatures(json_Roadway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadway_2.addFeatures(features_Roadway_2);
var lyr_Roadway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadway_2, 
                style: style_Roadway_2,
                popuplayertitle: 'Roadway',
                interactive: false,
                title: '<img src="styles/legend/Roadway_2.png" /> Roadway'
            });
var format_Railway_3 = new ol.format.GeoJSON();
var features_Railway_3 = format_Railway_3.readFeatures(json_Railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_3.addFeatures(features_Railway_3);
var lyr_Railway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_3, 
                style: style_Railway_3,
                popuplayertitle: 'Railway',
                interactive: false,
                title: '<img src="styles/legend/Railway_3.png" /> Railway'
            });
var format_Bikeway_4 = new ol.format.GeoJSON();
var features_Bikeway_4 = format_Bikeway_4.readFeatures(json_Bikeway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikeway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikeway_4.addFeatures(features_Bikeway_4);
var lyr_Bikeway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikeway_4, 
                style: style_Bikeway_4,
                popuplayertitle: 'Bikeway',
                interactive: true,
                title: '<img src="styles/legend/Bikeway_4.png" /> Bikeway'
            });
var format_Pointofinterestidentifiedbysofttransportationusers_5 = new ol.format.GeoJSON();
var features_Pointofinterestidentifiedbysofttransportationusers_5 = format_Pointofinterestidentifiedbysofttransportationusers_5.readFeatures(json_Pointofinterestidentifiedbysofttransportationusers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointofinterestidentifiedbysofttransportationusers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointofinterestidentifiedbysofttransportationusers_5.addFeatures(features_Pointofinterestidentifiedbysofttransportationusers_5);
var lyr_Pointofinterestidentifiedbysofttransportationusers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointofinterestidentifiedbysofttransportationusers_5, 
                style: style_Pointofinterestidentifiedbysofttransportationusers_5,
                popuplayertitle: 'Point of interest identified by soft transportation users',
                interactive: true,
                title: '<img src="styles/legend/Pointofinterestidentifiedbysofttransportationusers_5.png" /> Point of interest identified by soft transportation users'
            });
var format_Railwaystation_6 = new ol.format.GeoJSON();
var features_Railwaystation_6 = format_Railwaystation_6.readFeatures(json_Railwaystation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railwaystation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railwaystation_6.addFeatures(features_Railwaystation_6);
var lyr_Railwaystation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railwaystation_6, 
                style: style_Railwaystation_6,
                popuplayertitle: 'Railway station',
                interactive: true,
                title: '<img src="styles/legend/Railwaystation_6.png" /> Railway station'
            });
var format_CompanyintheSTFprogram_7 = new ol.format.GeoJSON();
var features_CompanyintheSTFprogram_7 = format_CompanyintheSTFprogram_7.readFeatures(json_CompanyintheSTFprogram_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompanyintheSTFprogram_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompanyintheSTFprogram_7.addFeatures(features_CompanyintheSTFprogram_7);
cluster_CompanyintheSTFprogram_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CompanyintheSTFprogram_7
});
var lyr_CompanyintheSTFprogram_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CompanyintheSTFprogram_7, 
                style: style_CompanyintheSTFprogram_7,
                popuplayertitle: 'Company in the STF program',
                interactive: true,
    title: 'Company in the STF program<br />\
    <img src="styles/legend/CompanyintheSTFprogram_7_0.png" /> Sustainable Travel Finland<br />\
    <img src="styles/legend/CompanyintheSTFprogram_7_1.png" /> On the path to STF<br />' });
var format_CompanyparticipatinginCNE20project_8 = new ol.format.GeoJSON();
var features_CompanyparticipatinginCNE20project_8 = format_CompanyparticipatinginCNE20project_8.readFeatures(json_CompanyparticipatinginCNE20project_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompanyparticipatinginCNE20project_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompanyparticipatinginCNE20project_8.addFeatures(features_CompanyparticipatinginCNE20project_8);
var lyr_CompanyparticipatinginCNE20project_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CompanyparticipatinginCNE20project_8, 
                style: style_CompanyparticipatinginCNE20project_8,
                popuplayertitle: 'Company participating in CNE 2.0 project',
                interactive: true,
    title: 'Company participating in CNE 2.0 project<br />\
    <img src="styles/legend/CompanyparticipatinginCNE20project_8_0.png" /> CNE 2.0 destination network<br />\
    <img src="styles/legend/CompanyparticipatinginCNE20project_8_1.png" /> Participant to workshop<br />' });
var format_City_9 = new ol.format.GeoJSON();
var features_City_9 = format_City_9.readFeatures(json_City_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_City_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_City_9.addFeatures(features_City_9);
var lyr_City_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_City_9, 
                style: style_City_9,
                popuplayertitle: 'City',
                interactive: false,
                title: '<img src="styles/legend/City_9.png" /> City'
            });

lyr_MunicipaltyinUusimaa_0.setVisible(true);lyr_Nationallyvaluablelandscapes_1.setVisible(true);lyr_Roadway_2.setVisible(true);lyr_Railway_3.setVisible(true);lyr_Bikeway_4.setVisible(true);lyr_Pointofinterestidentifiedbysofttransportationusers_5.setVisible(true);lyr_Railwaystation_6.setVisible(true);lyr_CompanyintheSTFprogram_7.setVisible(true);lyr_CompanyparticipatinginCNE20project_8.setVisible(true);lyr_City_9.setVisible(true);
var layersList = [lyr_MunicipaltyinUusimaa_0,lyr_Nationallyvaluablelandscapes_1,lyr_Roadway_2,lyr_Railway_3,lyr_Bikeway_4,lyr_Pointofinterestidentifiedbysofttransportationusers_5,lyr_Railwaystation_6,lyr_CompanyintheSTFprogram_7,lyr_CompanyparticipatinginCNE20project_8,lyr_City_9];
lyr_MunicipaltyinUusimaa_0.set('fieldAliases', {'id': 'id', 'gml_id': 'gml_id', 'natcode': 'natcode', 'Name (FIN)': 'Name (FIN)', 'Name (SWE)': 'Name (SWE)', 'landarea': 'landarea', 'freshwarea': 'freshwarea', 'seawarea': 'seawarea', 'totalarea': 'totalarea', 'destinatio': 'destinatio', 'accred': 'accred', 'STF': 'STF', 'Emissions': 'Emissions', 'status': 'status', 'Footprint': 'Footprint', 'URL': 'URL', 'Pop(2024)': 'Pop(2024)', });
lyr_Nationallyvaluablelandscapes_1.set('fieldAliases', {'ID': 'ID', 'Name (FIN)': 'Name (FIN)', 'Name (SW)': 'Name (SW)', 'Descriptio': 'Descriptio', 'Area numbe': 'Area numbe', 'MuutosPvm': 'MuutosPvm', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Roadway_2.set('fieldAliases', {'internal_i': 'internal_i', 'osoite3': 'osoite3', 'tie': 'tie', 'ajorata': 'ajorata', 'osa': 'osa', 'vuosi': 'vuosi', 'ely': 'ely', 'ajr_pituus': 'ajr_pituus', });
lyr_Railway_3.set('fieldAliases', {'fid': 'fid', 'mtk_id': 'mtk_id', 'sijaintita': 'sijaintita', 'korkeustar': 'korkeustar', 'aineistola': 'aineistola', 'alkupvm': 'alkupvm', 'kulkutapa': 'kulkutapa', 'kohderyhma': 'kohderyhma', 'kohdeluokk': 'kohdeluokk', 'tasosijain': 'tasosijain', 'sahkoisyys': 'sahkoisyys', 'valmiusast': 'valmiusast', 'layer': 'layer', 'path': 'path', });
lyr_Bikeway_4.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Descriptio': 'Descriptio', 'URL': 'URL', 'Layer': 'Layer', 'Length-km': 'Length-km', });
lyr_Pointofinterestidentifiedbysofttransportationusers_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'typeText': 'typeText', 'Website': 'Website', });
lyr_Railwaystation_6.set('fieldAliases', {'name': 'name', 'state': 'state', 'another_na': 'another_na', 'municipali': 'municipali', 'private_tr': 'private_tr', 'rail_yard_': 'rail_yard_', 'commission': 'commission', 'decommissi': 'decommissi', 'freight_tr': 'freight_tr', 'commercial': 'commercial', 'owner': 'owner', 'locationtr': 'locationtr', 'routenumbe': 'routenumbe', 'km': 'km', 'm': 'm', });
lyr_CompanyintheSTFprogram_7.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Municipali': 'Municipali', 'Main indus': 'Main indus', 'STF status': 'STF status', 'Other labe': 'Other labe', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Website': 'Website', 'Comments': 'Comments', 'Notes': 'Notes', 'Source': 'Source', });
lyr_CompanyparticipatinginCNE20project_8.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Municipali': 'Municipali', 'Main indus': 'Main indus', 'STF path': 'STF path', 'Other labe': 'Other labe', 'latitude': 'latitude', 'longitude': 'longitude', 'Role': 'Role', 'Status (in': 'Status (in', 'Status (_1': 'Status (_1', 'Emissions': 'Emissions', 'Footprint': 'Footprint', 'Contact': 'Contact', 'Email': 'Email', 'Website': 'Website', 'in STF fil': 'in STF fil', 'Other': 'Other', 'Source fil': 'Source fil', 'field_20': 'field_20', });
lyr_City_9.set('fieldAliases', {'city': 'city', 'lat': 'lat', 'lng': 'lng', 'country': 'country', 'iso2': 'iso2', 'admin_name': 'admin_name', 'capital': 'capital', 'population': 'population', 'populati_1': 'populati_1', });
lyr_MunicipaltyinUusimaa_0.set('fieldImages', {'id': 'TextEdit', 'gml_id': 'TextEdit', 'natcode': 'TextEdit', 'Name (FIN)': 'TextEdit', 'Name (SWE)': 'TextEdit', 'landarea': 'TextEdit', 'freshwarea': 'TextEdit', 'seawarea': 'TextEdit', 'totalarea': 'TextEdit', 'destinatio': 'TextEdit', 'accred': 'TextEdit', 'STF': 'TextEdit', 'Emissions': 'TextEdit', 'status': 'TextEdit', 'Footprint': 'TextEdit', 'URL': 'TextEdit', 'Pop(2024)': 'TextEdit', });
lyr_Nationallyvaluablelandscapes_1.set('fieldImages', {'ID': 'TextEdit', 'Name (FIN)': 'TextEdit', 'Name (SW)': 'TextEdit', 'Descriptio': 'TextEdit', 'Area numbe': 'TextEdit', 'MuutosPvm': 'DateTime', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Roadway_2.set('fieldImages', {'internal_i': 'TextEdit', 'osoite3': 'TextEdit', 'tie': 'TextEdit', 'ajorata': 'TextEdit', 'osa': 'TextEdit', 'vuosi': 'TextEdit', 'ely': 'TextEdit', 'ajr_pituus': 'TextEdit', });
lyr_Railway_3.set('fieldImages', {'fid': 'TextEdit', 'mtk_id': 'TextEdit', 'sijaintita': 'TextEdit', 'korkeustar': 'TextEdit', 'aineistola': 'TextEdit', 'alkupvm': 'DateTime', 'kulkutapa': 'TextEdit', 'kohderyhma': 'TextEdit', 'kohdeluokk': 'TextEdit', 'tasosijain': 'TextEdit', 'sahkoisyys': 'TextEdit', 'valmiusast': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bikeway_4.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Descriptio': 'TextEdit', 'URL': 'TextEdit', 'Layer': 'TextEdit', 'Length-km': 'TextEdit', });
lyr_Pointofinterestidentifiedbysofttransportationusers_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'typeText': 'TextEdit', 'Website': 'TextEdit', });
lyr_Railwaystation_6.set('fieldImages', {'name': 'TextEdit', 'state': 'TextEdit', 'another_na': 'TextEdit', 'municipali': 'TextEdit', 'private_tr': 'TextEdit', 'rail_yard_': 'TextEdit', 'commission': 'TextEdit', 'decommissi': 'TextEdit', 'freight_tr': 'TextEdit', 'commercial': 'TextEdit', 'owner': 'TextEdit', 'locationtr': 'TextEdit', 'routenumbe': 'TextEdit', 'km': 'TextEdit', 'm': 'TextEdit', });
lyr_CompanyintheSTFprogram_7.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Municipali': '', 'Main indus': '', 'STF status': 'TextEdit', 'Other labe': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Website': 'TextEdit', 'Comments': 'TextEdit', 'Notes': 'TextEdit', 'Source': 'TextEdit', });
lyr_CompanyparticipatinginCNE20project_8.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Municipali': '', 'Main indus': '', 'STF path': 'TextEdit', 'Other labe': '', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Role': 'TextEdit', 'Status (in': 'TextEdit', 'Status (_1': 'TextEdit', 'Emissions': 'TextEdit', 'Footprint': 'TextEdit', 'Contact': 'TextEdit', 'Email': 'TextEdit', 'Website': 'TextEdit', 'in STF fil': 'TextEdit', 'Other': 'TextEdit', 'Source fil': 'TextEdit', 'field_20': 'TextEdit', });
lyr_City_9.set('fieldImages', {'city': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'country': 'TextEdit', 'iso2': 'TextEdit', 'admin_name': 'TextEdit', 'capital': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', });
lyr_MunicipaltyinUusimaa_0.set('fieldLabels', {'id': 'hidden field', 'gml_id': 'hidden field', 'natcode': 'hidden field', 'Name (FIN)': 'inline label - always visible', 'Name (SWE)': 'inline label - always visible', 'landarea': 'hidden field', 'freshwarea': 'hidden field', 'seawarea': 'hidden field', 'totalarea': 'hidden field', 'destinatio': 'hidden field', 'accred': 'hidden field', 'STF': 'inline label - always visible', 'Emissions': 'inline label - visible with data', 'status': 'hidden field', 'Footprint': 'inline label - visible with data', 'URL': 'hidden field', 'Pop(2024)': 'hidden field', });
lyr_Nationallyvaluablelandscapes_1.set('fieldLabels', {'ID': 'hidden field', 'Name (FIN)': 'no label', 'Name (SW)': 'no label', 'Descriptio': 'no label', 'Area numbe': 'no label', 'MuutosPvm': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_Roadway_2.set('fieldLabels', {'internal_i': 'hidden field', 'osoite3': 'hidden field', 'tie': 'hidden field', 'ajorata': 'no label', 'osa': 'no label', 'vuosi': 'no label', 'ely': 'no label', 'ajr_pituus': 'no label', });
lyr_Railway_3.set('fieldLabels', {'fid': 'hidden field', 'mtk_id': 'hidden field', 'sijaintita': 'hidden field', 'korkeustar': 'hidden field', 'aineistola': 'hidden field', 'alkupvm': 'hidden field', 'kulkutapa': 'hidden field', 'kohderyhma': 'hidden field', 'kohdeluokk': 'hidden field', 'tasosijain': 'hidden field', 'sahkoisyys': 'hidden field', 'valmiusast': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Bikeway_4.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - always visible', 'Descriptio': 'inline label - always visible', 'URL': 'inline label - always visible', 'Layer': 'hidden field', 'Length-km': 'inline label - always visible', });
lyr_Pointofinterestidentifiedbysofttransportationusers_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'typeText': 'hidden field', 'Website': 'inline label - always visible', });
lyr_Railwaystation_6.set('fieldLabels', {'name': 'inline label - always visible', 'state': 'inline label - always visible', 'another_na': 'hidden field', 'municipali': 'hidden field', 'private_tr': 'hidden field', 'rail_yard_': 'hidden field', 'commission': 'hidden field', 'decommissi': 'hidden field', 'freight_tr': 'hidden field', 'commercial': 'hidden field', 'owner': 'hidden field', 'locationtr': 'hidden field', 'routenumbe': 'hidden field', 'km': 'hidden field', 'm': 'hidden field', });
lyr_CompanyintheSTFprogram_7.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - always visible', 'Municipali': 'inline label - always visible', 'Main indus': 'inline label - always visible', 'STF status': 'hidden field', 'Other labe': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Website': 'inline label - visible with data', 'Comments': 'hidden field', 'Notes': 'no label', 'Source': 'hidden field', });
lyr_CompanyparticipatinginCNE20project_8.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - always visible', 'Municipali': 'inline label - always visible', 'Main indus': 'inline label - always visible', 'STF path': 'inline label - always visible', 'Other labe': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Role': 'hidden field', 'Status (in': 'hidden field', 'Status (_1': 'hidden field', 'Emissions': 'inline label - visible with data', 'Footprint': 'inline label - visible with data', 'Contact': 'hidden field', 'Email': 'hidden field', 'Website': 'inline label - visible with data', 'in STF fil': 'hidden field', 'Other': 'hidden field', 'Source fil': 'hidden field', 'field_20': 'hidden field', });
lyr_City_9.set('fieldLabels', {'city': 'inline label - always visible', 'lat': 'hidden field', 'lng': 'hidden field', 'country': 'hidden field', 'iso2': 'hidden field', 'admin_name': 'hidden field', 'capital': 'hidden field', 'population': 'hidden field', 'populati_1': 'hidden field', });
lyr_City_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});