ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2499486.680548, 8330167.288912, 3020414.530845, 8602856.378736]);
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
    <img src="styles/legend/MunicipaltyinUusimaa_0_0.png" /> DMO in the CNE 2.0 project<br />\
    <img src="styles/legend/MunicipaltyinUusimaa_0_1.png" /> DMO not in the CNE 2.0 project<br />' });
var format_Nationallyvaluablelandscape_1 = new ol.format.GeoJSON();
var features_Nationallyvaluablelandscape_1 = format_Nationallyvaluablelandscape_1.readFeatures(json_Nationallyvaluablelandscape_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nationallyvaluablelandscape_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nationallyvaluablelandscape_1.addFeatures(features_Nationallyvaluablelandscape_1);
var lyr_Nationallyvaluablelandscape_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nationallyvaluablelandscape_1, 
                style: style_Nationallyvaluablelandscape_1,
                popuplayertitle: 'Nationally valuable landscape',
                interactive: true,
                title: '<img src="styles/legend/Nationallyvaluablelandscape_1.png" /> Nationally valuable landscape'
            });
var format_Nationalpark_2 = new ol.format.GeoJSON();
var features_Nationalpark_2 = format_Nationalpark_2.readFeatures(json_Nationalpark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nationalpark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nationalpark_2.addFeatures(features_Nationalpark_2);
var lyr_Nationalpark_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nationalpark_2, 
                style: style_Nationalpark_2,
                popuplayertitle: 'National park',
                interactive: true,
                title: '<img src="styles/legend/Nationalpark_2.png" /> National park'
            });
var format_Roadway_3 = new ol.format.GeoJSON();
var features_Roadway_3 = format_Roadway_3.readFeatures(json_Roadway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadway_3.addFeatures(features_Roadway_3);
var lyr_Roadway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadway_3, 
                style: style_Roadway_3,
                popuplayertitle: 'Roadway',
                interactive: false,
                title: '<img src="styles/legend/Roadway_3.png" /> Roadway'
            });
var format_Railway_4 = new ol.format.GeoJSON();
var features_Railway_4 = format_Railway_4.readFeatures(json_Railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_4.addFeatures(features_Railway_4);
var lyr_Railway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_4, 
                style: style_Railway_4,
                popuplayertitle: 'Railway',
                interactive: false,
                title: '<img src="styles/legend/Railway_4.png" /> Railway'
            });
var format_Bikeway_5 = new ol.format.GeoJSON();
var features_Bikeway_5 = format_Bikeway_5.readFeatures(json_Bikeway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikeway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikeway_5.addFeatures(features_Bikeway_5);
var lyr_Bikeway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikeway_5, 
                style: style_Bikeway_5,
                popuplayertitle: 'Bikeway',
                interactive: true,
                title: '<img src="styles/legend/Bikeway_5.png" /> Bikeway'
            });
var format_Pointofinterest_6 = new ol.format.GeoJSON();
var features_Pointofinterest_6 = format_Pointofinterest_6.readFeatures(json_Pointofinterest_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointofinterest_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointofinterest_6.addFeatures(features_Pointofinterest_6);
var lyr_Pointofinterest_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointofinterest_6, 
                style: style_Pointofinterest_6,
                popuplayertitle: 'Point of interest',
                interactive: true,
                title: '<img src="styles/legend/Pointofinterest_6.png" /> Point of interest'
            });
var format_Railwaystation_7 = new ol.format.GeoJSON();
var features_Railwaystation_7 = format_Railwaystation_7.readFeatures(json_Railwaystation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railwaystation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railwaystation_7.addFeatures(features_Railwaystation_7);
var lyr_Railwaystation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railwaystation_7, 
                style: style_Railwaystation_7,
                popuplayertitle: 'Railway station',
                interactive: true,
                title: '<img src="styles/legend/Railwaystation_7.png" /> Railway station'
            });
var format_CompanyintheSTFprogramme_8 = new ol.format.GeoJSON();
var features_CompanyintheSTFprogramme_8 = format_CompanyintheSTFprogramme_8.readFeatures(json_CompanyintheSTFprogramme_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompanyintheSTFprogramme_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompanyintheSTFprogramme_8.addFeatures(features_CompanyintheSTFprogramme_8);
cluster_CompanyintheSTFprogramme_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CompanyintheSTFprogramme_8
});
var lyr_CompanyintheSTFprogramme_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CompanyintheSTFprogramme_8, 
                style: style_CompanyintheSTFprogramme_8,
                popuplayertitle: 'Company in the STF programme',
                interactive: true,
                title: '<img src="styles/legend/CompanyintheSTFprogramme_8.png" /> Company in the STF programme'
            });
var format_ActorparticipatingintheCNE20project_9 = new ol.format.GeoJSON();
var features_ActorparticipatingintheCNE20project_9 = format_ActorparticipatingintheCNE20project_9.readFeatures(json_ActorparticipatingintheCNE20project_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActorparticipatingintheCNE20project_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActorparticipatingintheCNE20project_9.addFeatures(features_ActorparticipatingintheCNE20project_9);
var lyr_ActorparticipatingintheCNE20project_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActorparticipatingintheCNE20project_9, 
                style: style_ActorparticipatingintheCNE20project_9,
                popuplayertitle: 'Actor participating in the CNE 2.0 project',
                interactive: true,
    title: 'Actor participating in the CNE 2.0 project<br />\
    <img src="styles/legend/ActorparticipatingintheCNE20project_9_0.png" /> CNE 2.0 destination network<br />\
    <img src="styles/legend/ActorparticipatingintheCNE20project_9_1.png" /> Participant to workshops<br />' });
var format_City_10 = new ol.format.GeoJSON();
var features_City_10 = format_City_10.readFeatures(json_City_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_City_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_City_10.addFeatures(features_City_10);
var lyr_City_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_City_10, 
                style: style_City_10,
                popuplayertitle: 'City',
                interactive: false,
                title: '<img src="styles/legend/City_10.png" /> City'
            });

lyr_MunicipaltyinUusimaa_0.setVisible(true);lyr_Nationallyvaluablelandscape_1.setVisible(true);lyr_Nationalpark_2.setVisible(true);lyr_Roadway_3.setVisible(true);lyr_Railway_4.setVisible(true);lyr_Bikeway_5.setVisible(true);lyr_Pointofinterest_6.setVisible(true);lyr_Railwaystation_7.setVisible(true);lyr_CompanyintheSTFprogramme_8.setVisible(true);lyr_ActorparticipatingintheCNE20project_9.setVisible(true);lyr_City_10.setVisible(true);
var layersList = [lyr_MunicipaltyinUusimaa_0,lyr_Nationallyvaluablelandscape_1,lyr_Nationalpark_2,lyr_Roadway_3,lyr_Railway_4,lyr_Bikeway_5,lyr_Pointofinterest_6,lyr_Railwaystation_7,lyr_CompanyintheSTFprogramme_8,lyr_ActorparticipatingintheCNE20project_9,lyr_City_10];
lyr_MunicipaltyinUusimaa_0.set('fieldAliases', {'id': 'id', 'gml_id': 'gml_id', 'natcode': 'natcode', 'Name (FIN)': 'Name (FIN)', 'Name (SWE)': 'Name (SWE)', 'landarea': 'landarea', 'freshwarea': 'freshwarea', 'seawarea': 'seawarea', 'totalarea': 'totalarea', 'destinatio': 'destinatio', 'accred': 'accred', 'STF': 'STF', 'Emissions': 'Emissions', 'status': 'status', 'Footprint': 'Footprint', 'Website': 'Website', 'Pop(2024)': 'Pop(2024)', });
lyr_Nationallyvaluablelandscape_1.set('fieldAliases', {'ID': 'ID', 'Name (FIN)': 'Name (FIN)', 'Name (SW)': 'Name (SW)', 'Descriptio': 'Descriptio', 'Area numbe': 'Area numbe', 'MuutosPvm': 'MuutosPvm', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Nationalpark_2.set('fieldAliases', {'id': 'id', 'Name (FIN)': 'Name (FIN)', 'Name (SW)': 'Name (SW)', 'Name (EN)': 'Name (EN)', 'Website': 'Website', });
lyr_Roadway_3.set('fieldAliases', {'internal_i': 'internal_i', 'osoite3': 'osoite3', 'tie': 'tie', 'ajorata': 'ajorata', 'osa': 'osa', 'vuosi': 'vuosi', 'ely': 'ely', 'ajr_pituus': 'ajr_pituus', });
lyr_Railway_4.set('fieldAliases', {'fid': 'fid', 'mtk_id': 'mtk_id', 'sijaintita': 'sijaintita', 'korkeustar': 'korkeustar', 'aineistola': 'aineistola', 'alkupvm': 'alkupvm', 'kulkutapa': 'kulkutapa', 'kohderyhma': 'kohderyhma', 'kohdeluokk': 'kohdeluokk', 'tasosijain': 'tasosijain', 'sahkoisyys': 'sahkoisyys', 'valmiusast': 'valmiusast', 'layer': 'layer', 'path': 'path', });
lyr_Bikeway_5.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Descriptio': 'Descriptio', 'Website': 'Website', 'Layer': 'Layer', 'Length-km': 'Length-km', });
lyr_Pointofinterest_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Main Indus': 'Main Indus', 'Website': 'Website', });
lyr_Railwaystation_7.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'another_na': 'another_na', 'municipali': 'municipali', 'private_tr': 'private_tr', 'rail_yard_': 'rail_yard_', 'commission': 'commission', 'decommissi': 'decommissi', 'freight_tr': 'freight_tr', 'commercial': 'commercial', 'owner': 'owner', 'locationtr': 'locationtr', 'routenumbe': 'routenumbe', 'km': 'km', 'm': 'm', });
lyr_CompanyintheSTFprogramme_8.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Municipali': 'Municipali', 'Main indus': 'Main indus', 'STF status': 'STF status', 'Other accr': 'Other accr', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Website': 'Website', 'Comments': 'Comments', 'Notes': 'Notes', 'Source': 'Source', });
lyr_ActorparticipatingintheCNE20project_9.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Municipali': 'Municipali', 'Main indus': 'Main indus', 'STF status': 'STF status', 'Other accr': 'Other accr', 'latitude': 'latitude', 'longitude': 'longitude', 'Website': 'Website', 'Contact': 'Contact', 'Email': 'Email', 'Source': 'Source', 'Role': 'Role', 'Which work': 'Which work', 'Status (in': 'Status (in', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', });
lyr_City_10.set('fieldAliases', {'city': 'city', 'lat': 'lat', 'lng': 'lng', 'country': 'country', 'iso2': 'iso2', 'admin_name': 'admin_name', 'capital': 'capital', 'population': 'population', 'populati_1': 'populati_1', });
lyr_MunicipaltyinUusimaa_0.set('fieldImages', {'id': 'TextEdit', 'gml_id': 'TextEdit', 'natcode': 'TextEdit', 'Name (FIN)': 'TextEdit', 'Name (SWE)': 'TextEdit', 'landarea': 'TextEdit', 'freshwarea': 'TextEdit', 'seawarea': 'TextEdit', 'totalarea': 'TextEdit', 'destinatio': 'TextEdit', 'accred': 'TextEdit', 'STF': 'TextEdit', 'Emissions': 'TextEdit', 'status': 'TextEdit', 'Footprint': 'TextEdit', 'Website': 'TextEdit', 'Pop(2024)': 'TextEdit', });
lyr_Nationallyvaluablelandscape_1.set('fieldImages', {'ID': '', 'Name (FIN)': '', 'Name (SW)': '', 'Descriptio': '', 'Area numbe': '', 'MuutosPvm': 'DateTime', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Nationalpark_2.set('fieldImages', {'id': 'TextEdit', 'Name (FIN)': 'TextEdit', 'Name (SW)': 'TextEdit', 'Name (EN)': 'TextEdit', 'Website': 'TextEdit', });
lyr_Roadway_3.set('fieldImages', {'internal_i': 'TextEdit', 'osoite3': 'TextEdit', 'tie': 'TextEdit', 'ajorata': 'TextEdit', 'osa': 'TextEdit', 'vuosi': 'TextEdit', 'ely': 'TextEdit', 'ajr_pituus': 'TextEdit', });
lyr_Railway_4.set('fieldImages', {'fid': 'TextEdit', 'mtk_id': 'TextEdit', 'sijaintita': 'TextEdit', 'korkeustar': 'TextEdit', 'aineistola': 'TextEdit', 'alkupvm': 'DateTime', 'kulkutapa': 'TextEdit', 'kohderyhma': 'TextEdit', 'kohdeluokk': 'TextEdit', 'tasosijain': 'TextEdit', 'sahkoisyys': 'TextEdit', 'valmiusast': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bikeway_5.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Descriptio': 'TextEdit', 'Website': '', 'Layer': 'TextEdit', 'Length-km': 'TextEdit', });
lyr_Pointofinterest_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Main Indus': '', 'Website': '', });
lyr_Railwaystation_7.set('fieldImages', {'Name': '', 'State': '', 'another_na': 'TextEdit', 'municipali': 'TextEdit', 'private_tr': 'TextEdit', 'rail_yard_': 'TextEdit', 'commission': 'TextEdit', 'decommissi': 'TextEdit', 'freight_tr': 'TextEdit', 'commercial': 'TextEdit', 'owner': 'TextEdit', 'locationtr': 'TextEdit', 'routenumbe': 'TextEdit', 'km': 'TextEdit', 'm': 'TextEdit', });
lyr_CompanyintheSTFprogramme_8.set('fieldImages', {'ID': '', 'Name': 'TextEdit', 'Municipali': 'TextEdit', 'Main indus': 'TextEdit', 'STF status': 'TextEdit', 'Other accr': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Website': 'TextEdit', 'Comments': 'TextEdit', 'Notes': 'TextEdit', 'Source': 'TextEdit', });
lyr_ActorparticipatingintheCNE20project_9.set('fieldImages', {'ID': '', 'Name': 'TextEdit', 'Municipali': 'TextEdit', 'Main indus': 'TextEdit', 'STF status': 'TextEdit', 'Other accr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Website': 'TextEdit', 'Contact': 'TextEdit', 'Email': 'TextEdit', 'Source': 'TextEdit', 'Role': 'TextEdit', 'Which work': 'TextEdit', 'Status (in': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', });
lyr_City_10.set('fieldImages', {'city': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'country': 'TextEdit', 'iso2': 'TextEdit', 'admin_name': 'TextEdit', 'capital': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', });
lyr_MunicipaltyinUusimaa_0.set('fieldLabels', {'id': 'hidden field', 'gml_id': 'hidden field', 'natcode': 'hidden field', 'Name (FIN)': 'inline label - always visible', 'Name (SWE)': 'inline label - always visible', 'landarea': 'hidden field', 'freshwarea': 'hidden field', 'seawarea': 'hidden field', 'totalarea': 'hidden field', 'destinatio': 'hidden field', 'accred': 'hidden field', 'STF': 'inline label - visible with data', 'Emissions': 'inline label - visible with data', 'status': 'hidden field', 'Footprint': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Pop(2024)': 'hidden field', });
lyr_Nationallyvaluablelandscape_1.set('fieldLabels', {'ID': 'hidden field', 'Name (FIN)': 'inline label - always visible', 'Name (SW)': 'inline label - always visible', 'Descriptio': 'hidden field', 'Area numbe': 'hidden field', 'MuutosPvm': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_Nationalpark_2.set('fieldLabels', {'id': 'hidden field', 'Name (FIN)': 'inline label - always visible', 'Name (SW)': 'inline label - always visible', 'Name (EN)': 'inline label - always visible', 'Website': 'inline label - visible with data', });
lyr_Roadway_3.set('fieldLabels', {'internal_i': 'no label', 'osoite3': 'no label', 'tie': 'no label', 'ajorata': 'no label', 'osa': 'no label', 'vuosi': 'no label', 'ely': 'no label', 'ajr_pituus': 'no label', });
lyr_Railway_4.set('fieldLabels', {'fid': 'no label', 'mtk_id': 'no label', 'sijaintita': 'no label', 'korkeustar': 'no label', 'aineistola': 'no label', 'alkupvm': 'no label', 'kulkutapa': 'no label', 'kohderyhma': 'no label', 'kohdeluokk': 'no label', 'tasosijain': 'no label', 'sahkoisyys': 'no label', 'valmiusast': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bikeway_5.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - always visible', 'Descriptio': 'hidden field', 'Website': 'inline label - always visible', 'Layer': 'hidden field', 'Length-km': 'inline label - always visible', });
lyr_Pointofinterest_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'Main Indus': 'inline label - always visible', 'Website': 'hidden field', });
lyr_Railwaystation_7.set('fieldLabels', {'Name': 'inline label - always visible', 'State': 'inline label - always visible', 'another_na': 'hidden field', 'municipali': 'hidden field', 'private_tr': 'hidden field', 'rail_yard_': 'hidden field', 'commission': 'hidden field', 'decommissi': 'hidden field', 'freight_tr': 'hidden field', 'commercial': 'hidden field', 'owner': 'hidden field', 'locationtr': 'hidden field', 'routenumbe': 'hidden field', 'km': 'hidden field', 'm': 'hidden field', });
lyr_CompanyintheSTFprogramme_8.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - always visible', 'Municipali': 'inline label - always visible', 'Main indus': 'inline label - always visible', 'STF status': 'inline label - always visible', 'Other accr': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Website': 'hidden field', 'Comments': 'hidden field', 'Notes': 'hidden field', 'Source': 'hidden field', });
lyr_ActorparticipatingintheCNE20project_9.set('fieldLabels', {'ID': 'hidden field', 'Name': 'inline label - always visible', 'Municipali': 'inline label - always visible', 'Main indus': 'inline label - always visible', 'STF status': 'inline label - always visible', 'Other accr': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Website': 'inline label - always visible', 'Contact': 'hidden field', 'Email': 'hidden field', 'Source': 'hidden field', 'Role': 'hidden field', 'Which work': 'hidden field', 'Status (in': 'hidden field', 'field_16': 'hidden field', 'field_17': 'hidden field', 'field_18': 'hidden field', 'field_19': 'hidden field', });
lyr_City_10.set('fieldLabels', {'city': 'no label', 'lat': 'no label', 'lng': 'no label', 'country': 'no label', 'iso2': 'no label', 'admin_name': 'no label', 'capital': 'no label', 'population': 'no label', 'populati_1': 'no label', });
lyr_City_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});