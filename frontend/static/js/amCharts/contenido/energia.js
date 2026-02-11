const colorCollection = ["#3461B2", "#56AD71", "#E2E2E2"];
const dataCollection = {
    chart1: [
        {
            "range": "Oficinas",
            "percent": 16.43,
            "color": colorCollection[0]
        }, {
            "range": "Centros de aprendizaje",
            "percent": 24.05,
            "color": colorCollection[1]
        }, {
            "range": "Universidades",
            "percent": 59.52,
            "color": colorCollection[2]
        }
    ],
    chart2: [
        {
            "range": "2020",
            "percent": 1947176,
            "text": "1,947,176",
            "color": colorCollection[0]
        }, {
            "range": "2021",
            "percent": 1804166,
            "text": "1,804,166",
            "color": colorCollection[2]
        }, {
            "range": "2022",
            "percent": 3198967,
            "text": "3,198,967",
            "color": colorCollection[1]
        }
    ],
    chart3: [
        {
            "range": "Oficinas",
            "percent": 20.43,
            "color": colorCollection[1]
        }, {
            "range": "Centros de aprendizaje",
            "percent": 25.79,
            "color": colorCollection[2]
        }, {
            "range": "Universidades",
            "percent": 53.78,
            "color": colorCollection[0]
        }
    ],
    chart4: [
        {
            "range": "2020",
            "percent": 31454.78,
            "text": "31,454.78",
            "color": colorCollection[2]
        }, {
            "range": "2021",
            "percent": 32658.68,
            "text": "32,658.68",
            "color": colorCollection[0]
        }, {
            "range": "2022",
            "percent": 43349.73,
            "text": "43,349.73",
            "color": colorCollection[1]
        }
    ]
}

const chart1 = AmCharts.makeChart("chart1", {
    "type": "pie",
    "titles": [
        {
            "text": "Consumo de electricidad",
            "size": 15
        },
        {
            "text": "(kWh)",
            "size": 12
        }
    ],
    "startDuration": 0,
    "theme": "none",
    "addClassNames": true,
    "valueField": "percent",
    "titleField": "range",
    "colorField": "color",
    "labelText": "[[percent]]%",
    "balloonText": "[[range]]: [[percent]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "labelText": "[[title]]",
        "valueText": ""
    },
    "innerRadius": "70%",
    "dataProvider": dataCollection.chart1
});

const chart2 = AmCharts.makeChart("chart2", {
    "type": "pie",
    "titles": [
        {
            "text": "Consumo de electricidad",
            "size": 15
        },
        {
            "text": "(kWh)",
            "size": 12
        }
    ],
    "startDuration": 0,
    "theme": "none",
    "addClassNames": true,
    "valueField": "percent",
    "titleField": "range",
    "colorField": "color",
    "labelText": "[[text]]",
    "balloonText": "[[range]]: [[text]]",
    "legend": {
        "align": "center",
        "position": "bottom",
        "labelText": "[[title]]",
        "valueText": ""
    },
    "innerRadius": "70%",
    "dataProvider": dataCollection.chart2
});

const chart3 = AmCharts.makeChart("chart3", {
    "type": "pie",
    "titles": [
        {
            "text": "Consumo de agua",
            "size": 15
        },
        {
            "text": "(m3)",
            "size": 12
        }
    ],
    "startDuration": 0,
    "theme": "none",
    "addClassNames": true,
    "valueField": "percent",
    "titleField": "range",
    "colorField": "color",
    "labelText": "[[percent]]%",
    "balloonText": "[[range]]: [[percent]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "labelText": "[[title]]",
        "valueText": ""
    },
    "innerRadius": "70%",
    "dataProvider": dataCollection.chart3
});

const chart4 = AmCharts.makeChart("chart4", {
    "type": "pie",
    "titles": [
        {
            "text": "Consumo de agua",
            "size": 15
        },
        {
            "text": "(m3)",
            "size": 12
        }
    ],
    "startDuration": 0,
    "theme": "none",
    "addClassNames": true,
    "valueField": "percent",
    "titleField": "range",
    "colorField": "color",
    "labelText": "[[text]]",
    "balloonText": "[[range]]: [[text]]",
    "legend": {
        "align": "center",
        "position": "bottom",
        "labelText": "[[title]]",
        "valueText": ""
    },
    "innerRadius": "70%",
    "dataProvider": dataCollection.chart4
});

// var chart6 = AmCharts.makeChart("chart2", {
//     "type": "serial",
//     "theme": "none",
//     "titles": [
//         {
//             "text": "chart6_title",
//             "size": 15
//         },
//         {
//             "text": "",
//             "size": 12
//         },
//     ],
//     "dataProvider": [{
//         "year": 2020,
//         "value": 62.00,
//         "color": "#139a63"
//     }, {
//         "year": 2021,
//         "value": 74.27,
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
//             return valueText + ' m3';
//         },
//         "minimum": "0",
//         "maximum": "180",
//         "autoGridCount": false,
//         "gridCount": 10,
//     }],
//     "graphs": [{
//         "balloonText": "<b>[[value]]</b>",
//         "fillAlphas": 1,
//         "colorField": "color",
//         "labelText": "[[value]]",
//         "lineAlpha": 0,
//         "title": chart6_title,
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

function addListeners(charts) {
    for (let chart in charts) {
        chart.addListener("init", handleInit);

        chart.addListener("rollOverSlice", function (e) {
            handleRollOver(e);
        });
    }
}

function handleInit(e) {
    e.chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e) {
    let wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
}

addListeners([chart1, chart2, chart3, chart4]);