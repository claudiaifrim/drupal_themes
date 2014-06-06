var fbudget_data = [
    {
        "year": 2010,
        "pillar_1": 2400,
        "pillar_2": 50,
        "pillar_3": 150,
        "pillar_4": 700
    },
    {
        "year": 2011,
        "pillar_1": 2700,
        "pillar_2": 100,
        "pillar_3": 150,
        "pillar_4": 800
    },
    {
        "year": 2012,
        "pillar_1": 3200,
        "pillar_2": 130,
        "pillar_3": 160,
        "pillar_4": 850
    },
    {
        "year": 2013,
        "pillar_1": 3600,
        "pillar_2": 130,
        "pillar_3": 170,
        "pillar_4": 1000
    },
    {
        "year": 2014,
        "pillar_1": 4000,
        "pillar_2": 140,
        "pillar_3": 180,
        "pillar_4": 1100
    },
    {
        "year": 2015,
        "pillar_5": 6000
    },
];

var fbudget_balloons = [
    {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Pillar 1 - Refugee programme",
        "type": "column",
        "color": "#000000",
        "valueField": "pillar_1"
    },
    {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Pillar 2 - Stateless programme",
        "type": "column",
        "color": "#000000",
        "valueField": "pillar_2"
    },
    {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Pillar 3 - Reintegration projects",
        "type": "column",
        "color": "#ffffff",
        "valueField": "pillar_3"
    },
    {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Pillar 4 - IDP projects",
        "type": "column",
        "color": "#000000",
        "valueField": "pillar_4"
    },
    {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "2015 Budget",
        "type": "column",
        "color": "#000000",
        "valueField": "pillar_5"
    }
];

var fbudget_map;
AmCharts.ready(function() {
    fbudget_map = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "unhcr",
        "legend": {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "useGraphSettings": true,
            "markerSize": 10
        },
        "dataProvider": fbudget_data,
        "valueAxes": [{
            "stackType": "regular",
            "axisAlpha": 0.3,
            "gridAlpha": 0
        }],
        "graphs": fbudget_balloons,
        "categoryField": "year",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
        }
        /*"exportConfig":{
         "menuTop":"20px",
         "menuRight":"20px",
         "menuItems": [{
         "icon": '/lib/3/images/export.png',
         "format": 'png'
         }]
         }*/
    });
});