var fgh_legend = {
    '150_300' : {
        title: '150 to 300 million',
        color: '#b5d0d7'
    },
    '50_150': {
        title: '50 to 150 million',
        color: '#30869f'
    },
    '10_50': {
        title: '10 to 50 million',
        color: '#000000'
    },
    '5_10': {
        title: '5 to 10 million',
        color: '#fe0000'
    },
    '1_5': {
        title: 'Bellow 5 million',
        color: '#dbdbd1'
    }
};

var fgh_data = [
    {
        id: 'TD',
        type: '150_300'
    },
    {
        id: 'KE',
        type: '150_300'
    },
    {
        id: 'ET',
        type: '150_300'
    },
    {
        id: 'TR',
        type: '150_300'
    },
    {
        id: 'ML',
        type: '50_150'
    },
    {
        id: 'EG',
        type: '50_150'
    },
    {
        id: 'SD',
        type: '50_150'
    },
    {
        id: 'US',
        type: '10_50'
    },
    {
        id: 'RN',
        type: '10_50'
    },
    {
        id: 'DZ',
        type: '5_10'
    },
    {
        id: 'RU',
        type: '5_10'
    },
    {
        id: 'KZ',
        type: '5_10'
    },
    {
        id: 'KZ',
        type: '5_10'
    }
];

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