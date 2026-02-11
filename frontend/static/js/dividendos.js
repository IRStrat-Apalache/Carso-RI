//= require amCharts/amcharts
//= require amCharts/serial
//= require amCharts/themes/iredge

let variationLabel = window.location.href.indexOf("/es/") > -1 ? "Variación" : "Variation";

var chart = AmCharts.makeChart("chartdiv1", {
    "type": "serial",
    "addClassNames": true,
    "colors": ["#0E2B8D"],
    // "numberFormatter": {
    //     precision: 1,
    // },
    "theme": "light",
    "dataProvider": [
        // {
        //     "date": "2006",
        //     "d": 0.38,
        // },
        // {
        //     "date": "2007",
        //     "d": 0.46,
        // },
        // {
        //     "date": "2008",
        //     "d": 0.53,
        // }, {
        //     "date": "2013",
        //     "d": 0.34,
        // }, {
        //     "date": "2014",
        //     "d": 0.38,
        // }, {
        //     "date": "2015",
        //     "d": 0.43,
        // },
        {
            "date": "2016",
            "d": 0.5160,
            "v": 0
        }, {
            "date": "2017",
            "d": 0.6192,
            "v": 20.0
        }, {
            "date": "2018",
            "d": 0.7121,
            "v": 15.0
        }, {
            "date": "2019",
            "d": 0.8189,
            "v": 15.0
        }, {
            "date": "2020",
            "d": 0.9400,
            "v": 14.8
        }, {
            "date": "2021",
            "d": 1.0105,
            "v": 7.5
        }, {
            "date": "2022",
            "d": 1.1621,
            "v": 15.0
        }, {
            "date": "2023",
            "d": 1.3364,
            "v": 15.0
        }, {
            "date": "2024",
            "d": 1.5369,
            "v": 15.0
        }
    ],
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "minimum": 0,
        "position": "left",
        "gridAlpha": 0,
        "labelsEnabled": false
    }, {
        "id": "v2",
        "axisAlpha": 0,
        "minimum": 0,
        "position": "right",
        "gridAlpha": 0,
        "labelsEnabled": false
    }],
    "graphs": [
        {
            "balloonText": "<span style='font-size:12px;'>[[date]]<br><span style='font-size:20px;'>[[value]]</span> </span>",
            "lineThickness": 2,
            "type": "column",
            "valueField": "d",
            "labelText": '[[value]]',
            "title": "Dividendos",
            "fillAlphas": 1,
            "fillColors": ['#0E2B8D'],
            "valueAxis": "v1",
            "fontSize": 16,
        }, {
            "id": "graph2",
            "type": "smoothedLine",
            "balloonText": "<span style='font-size:12px;'>" + variationLabel + "<br><span style='font-size:20px;'>[[v]]%</span> </span>",
            "bullet": "round",
            "lineThickness": 2,
            "lineColor": "#FF0000",
            // "labelText": "[[value]]%",
            "fillAlphas": 0,
            "title": "Variacion",
            "valueField": "d",
            "valueAxis": "v2",
            "fontSize": 16,
        }
    ],

    "categoryField": "date",
    "categoryAxis": {
        "gridAlpha": 0,
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0,
        "fontSize": 16,
    },
    "chartCursor": {
        // "oneBalloonOnly": true,
        "cursorAlpha": 0.2,
        "fullWidth": true
    }
});

// var chart = AmCharts.makeChart("chartdiv2", {
//     "type": "serial",
//     "addClassNames": true,
//     "colors": ["#0E2B8D"],
//     // "numberFormatter": {
//     //     precision: 1,
//     // },
//     "theme": "light",
//     "dataProvider": [
//         // {
//         //     "date": "2006",
//         //     "d": 0.38,
//         // },
//         // {
//         //     "date": "2007",
//         //     "d": 0.46,
//         // },
//         // {
//         //     "date": "2008",
//         //     "d": 0.53,
//         // }, {
//         //     "date": "2013",
//         //     "d": 0.34,
//         // }, {
//         //     "date": "2014",
//         //     "d": 0.38,
//         // }, {
//         //     "date": "2015",
//         //     "d": 0.43,
//         // },
//         {
//             "date": "2016",
//             "d": 0.5160,
//             "v": 0
//         }, {
//             "date": "2017",
//             "d": 0.6192,
//             "v": 20.0
//         }, {
//             "date": "2018",
//             "d": 0.7121,
//             "v": 15.0
//         }, {
//             "date": "2019",
//             "d": 0.8189,
//             "v": 15.0
//         }, {
//             "date": "2020",
//             "d": 0.9400,
//             "v": 14.8
//         }, {
//             "date": "2021",
//             "d": 1.0105,
//             "v": 7.5
//         }, {
//             "date": "2022",
//             "d": 1.1621,
//             "v": 15.0
//         }, {
//             "date": "2023",
//             "d": 1.3364,
//             "v": 15.0
//         }
//     ],
//     "valueAxes": [{
//         "id": "v1",
//         "axisAlpha": 0,
//         "minimum": 0,
//         "position": "left",
//         "gridAlpha": 0,
//         "labelsEnabled": false
//     }, {
//         "id": "v2",
//         "axisAlpha": 0,
//         "minimum": 0,
//         "position": "right",
//         "gridAlpha": 0,
//         "labelsEnabled": false
//     }],
//     "graphs": [
//         {
//             "balloonText": "<span style='font-size:12px;'>[[date]]<br><span style='font-size:20px;'>[[value]]</span> </span>",
//             "lineThickness": 2,
//             "type": "column",
//             "valueField": "d",
//             "labelText": '[[value]]',
//             "title": "Dividendos",
//             "fillAlphas": 1,
//             "fillColors": ['#0E2B8D'],
//             "valueAxis": "v1"
//         }, {
//             "id": "graph2",
//             "type": "smoothedLine",
//             "balloonText": "<span style='font-size:12px;'>" + variationLabel + "<br><span style='font-size:20px;'>[[value]]%</span> </span>",
//             "bullet": "round",
//             "lineThickness": 2,
//             "lineColor": "#edfd00",
//             // "labelText": "[[value]]%",
//             "fillAlphas": 0,
//             "title": "Variacion",
//             "valueField": "v",
//             "valueAxis": "v2"
//         }
//     ],
//
//     "categoryField": "date",
//     "categoryAxis": {
//         "gridAlpha": 0,
//         "gridPosition": "start",
//         "axisAlpha": 0,
//         "tickLength": 0
//     },
//     "chartCursor": {
//         // "oneBalloonOnly": true,
//         "cursorAlpha": 0.2,
//         "fullWidth": true
//     }
// });
