AmCharts.theme = AmCharts.themes.light;

let chart1_title = "Consumo de energía hoteles (GJ)"
let chart2_title = "Intensidad energética hoteles (GJ/cuarto)"
let chart3_title = "Emisiones alcance 1 y 2 (TonCO2eq)"
let chart4_title = "Intensidad de emisiones en hoteles (TonCO2eq/cuarto)"
let chart5_title = "Consumo de agua en la división Vivienda (m3)"
let chart6_title = "Consumo de agua en la división Centros Comerciales (m3)"
let chart7_title = "Residuos que terminaron en el vertederos (kg)"

if (locale == "es") {
     chart1_title = "Consumo de energía hoteles (GJ)"
     chart2_title = "Intensidad energética hoteles (GJ/cuarto)"
     chart3_title = "Emisiones alcance 1 y 2 (TonCO2eq)"
     chart4_title = "Intensidad de emisiones en hoteles (TonCO2eq/cuarto)"
     chart5_title = "Consumo de agua en la división Vivienda (m3)"
     chart6_title = "Consumo de agua en la división Centros Comerciales (m3)"
     chart7_title = "Residuos que terminaron en el vertederos (kg)"
}

// var chart1 = AmCharts.makeChart("chart1", {
//     "type": "serial",
//     "theme": "none",
//     "titles": [
//         {
//             "text": chart1_title,
//             "size": 15
//         },
//         {
//             "text": "",
//             "size": 12
//         },
//     ],
//     "dataProvider": [{
//         "year": 2020,
//         "value": 115148,
//         "color": "#139a63"
//     }, {
//         "year": 2021,
//         "value": 158361,
//         "color": "#005cb0"
//     }],
//     "valueAxes": [{
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//         "labelsEnabled": true,
//         "totalText": "[[total]]",
//         "labelFunction": function (valueText, date, valueAxis) {
//             if (valueText == 0)
//                 return "-";
//             return valueText;
//         },
//         "minimum": "0",
//         "maximum": "300000",
//         "autoGridCount": false,
//         "gridCount": 7,
//     }],
//     "graphs": [{
//         "balloonText": "<b>[[value]]</b>",
//         "fillAlphas": 1,
//         "colorField": "color",
//         "labelText": "[[value]]",
//         "lineAlpha": 0,
//         "title": chart1_title,
//         "type": "column",
//         "color": "#000000",
//         "valueField": "value",
//         // "columnWidth": 0.5,
//     }],
//     "categoryField": "year",
//     "categoryAxis": {
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//     },
// });
//
// var chart2 = AmCharts.makeChart("chart2", {
//     "type": "serial",
//     "theme": "none",
//     "titles": [
//         {
//             "text": chart2_title,
//             "size": 15
//         },
//         {
//             "text": "",
//             "size": 12
//         },
//     ],
//     "dataProvider": [{
//         "year": 2020,
//         "value": 18.00,
//         "color": "#139a63"
//     }, {
//         "year": 2021,
//         "value": 27.72,
//         "color": "#005cb0"
//     }],
//     "valueAxes": [{
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//         "labelsEnabled": true,
//         "totalText": "[[total]]",
//         "labelFunction": function (valueText, date, valueAxis) {
//             if (valueText == 0)
//                 return "-";
//             return valueText;
//         },
//         "minimum": "0",
//         "maximum": "60",
//         "autoGridCount": false,
//         "gridCount": 7,
//     }],
//     "graphs": [{
//         "balloonText": "<b>[[value]]</b>",
//         "fillAlphas": 1,
//         "colorField": "color",
//         "labelText": "[[value]]",
//         "lineAlpha": 0,
//         "title": chart2_title,
//         "type": "column",
//         "color": "#000000",
//         "valueField": "value",
//         // "columnWidth": 0.5,
//     }],
//     "categoryField": "year",
//     "categoryAxis": {
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//     },
// });
//
// var chart3 = AmCharts.makeChart("chart3", {
//     "type": "serial",
//     "theme": "none",
//     "titles": [
//         {
//             "text": chart3_title,
//             "size": 15
//         },
//         {
//             "text": "",
//             "size": 12
//         },
//     ],
//     "dataProvider": [{
//         "year": 2020,
//         "value": 12137,
//         "color": "#139a63"
//     }, {
//         "year": 2021,
//         "value": 15931,
//         "color": "#005cb0"
//     }],
//     "valueAxes": [{
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//         "labelsEnabled": true,
//         "totalText": "[[total]]",
//         "labelFunction": function (valueText, date, valueAxis) {
//             if (valueText == 0)
//                 return "-";
//             return valueText;
//         },
//         "minimum": "0",
//         "maximum": "30000",
//         "autoGridCount": false,
//         "gridCount": 7,
//     }],
//     "graphs": [{
//         "balloonText": "<b>[[value]]</b>",
//         "fillAlphas": 1,
//         "colorField": "color",
//         "labelText": "[[value]]",
//         "lineAlpha": 0,
//         "title": chart3_title,
//         "type": "column",
//         "color": "#000000",
//         "valueField": "value",
//         // "columnWidth": 0.5,
//     }],
//     "categoryField": "year",
//     "categoryAxis": {
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//     },
// });
//
// var chart4 = AmCharts.makeChart("chart4", {
//     "type": "serial",
//     "theme": "none",
//     "titles": [
//         {
//             "text": chart4_title,
//             "size": 15
//         },
//         {
//             "text": "",
//             "size": 12
//         },
//     ],
//     "dataProvider": [{
//         "year": 2020,
//         "value": 1.95,
//         "color": "#139a63"
//     }, {
//         "year": 2021,
//         "value": 2.78,
//         "color": "#005cb0"
//     }],
//     "valueAxes": [{
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//         "labelsEnabled": true,
//         "totalText": "[[total]]",
//         "labelFunction": function (valueText, date, valueAxis) {
//             if (valueText == 0)
//                 return "-";
//             return valueText;
//         },
//         "minimum": "0",
//         "maximum": "6",
//         "autoGridCount": false,
//         "gridCount": 7,
//     }],
//     "graphs": [{
//         "balloonText": "<b>[[value]]</b>",
//         "fillAlphas": 1,
//         "colorField": "color",
//         "labelText": "[[value]]",
//         "lineAlpha": 0,
//         "title": chart4_title,
//         "type": "column",
//         "color": "#000000",
//         "valueField": "value",
//         // "columnWidth": 0.5,
//     }],
//     "categoryField": "year",
//     "categoryAxis": {
//         "axisAlpha": 1,
//         "gridAlpha": 0,
//     },
// });

var chart5 = AmCharts.makeChart("chart5", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart5_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2021,
        "value": 343250,
        "color": "#0076C0"
    }, {
        "year": 2022,
        "value": 388517,
        "color": "#79BDE8"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText + ' m3';
        },
        "minimum": "0",
        // "maximum": "800000",
        "autoGridCount": false,
        "gridCount": 9,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart5_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart6 = AmCharts.makeChart("chart6", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart6_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2021,
        "value": 856330,
        "color": "#0076C0"
    }, {
        "year": 2022,
        "value": 923815,
        "color": "#79BDE8"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText + ' m3';
        },
        "minimum": "0",
        // "maximum": "180",
        "autoGridCount": false,
        "gridCount": 10,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart6_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

var chart7 = AmCharts.makeChart("chart7", {
    "type": "serial",
    "theme": "none",
    "titles": [
        {
            "text": chart7_title,
            "size": 15
        },
        {
            "text": "",
            "size": 12
        },
    ],
    "dataProvider": [{
        "year": 2021,
        "value": 125330,
        "color": "#0076C0"
    }, {
        "year": 2022,
        "value": 147815,
        "color": "#79BDE8"
    }],
    "valueAxes": [{
        "axisAlpha": 1,
        "gridAlpha": 0,
        "labelsEnabled": true,
        "totalText": "[[total]]",
        "labelFunction": function (valueText, date, valueAxis) {
            if (valueText == 0)
                return "-";
            return valueText + ' m3';
        },
        "minimum": "0",
        // "maximum": "180",
        "autoGridCount": false,
        "gridCount": 10,
    }],
    "graphs": [{
        "balloonText": "<b>[[value]]</b>",
        "fillAlphas": 1,
        "colorField": "color",
        "labelText": "[[value]]",
        "lineAlpha": 0,
        "title": chart7_title,
        "type": "column",
        "color": "#000000",
        "valueField": "value",
        // "columnWidth": 0.5,
    }],
    "categoryField": "year",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
    },
});

// function addListeners(charts) {
//     for (let chart in charts) {
//         chart.addListener("init", handleInit);
//
//         chart.addListener("rollOverSlice", function (e) {
//             handleRollOver(e);
//         });
//     }
// }
//
// function handleInit(e) {
//     e.chart.legend.addListener("rollOverItem", handleRollOver);
// }
//
// function handleRollOver(e) {
//     let wedge = e.dataItem.wedge.node;
//     wedge.parentNode.appendChild(wedge);
// }
//
// addListeners([chart5, chart6]);