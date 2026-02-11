const colorCollection = ["#C4C6C8", "#80A1B6", "#79BDE8", "#0076C0", "#00447C", "#012B47"];
const dataCollection = {
    chart1: [
        {
            "range": "18 a 25 años",
            "percent": 2,
            "color": colorCollection[0]
        }, {
            "range": "25.1 a 30 años",
            "percent": 14,
            "color": colorCollection[1]
        }, {
            "range": "30.1 a 40 años",
            "percent": 31,
            "color": colorCollection[2]
        }, {
            "range": "40.1 a 50 años",
            "percent": 32,
            "color": colorCollection[3]
        }, {
            "range": "50.1 a 60 años",
            "percent": 18,
            "color": colorCollection[4]
        }, {
            "range": "60.1 a 70 años",
            "percent": 3,
            "color": colorCollection[5]
        }
    ],
    chart2: [
        {
            "range": "Menos de 1 año",
            "percent": 13,
            "color": colorCollection[0]
        }, {
            "range": "De 1 a 3 años",
            "percent": 22,
            "color": colorCollection[1]
        }, {
            "range": "De 3.1 a 5 años",
            "percent": 10,
            "color": colorCollection[2]
        }, {
            "range": "De 5.1 a 10 años",
            "percent": 25,
            "color": colorCollection[3]
        }, {
            "range": "De 10.1 a 20 años",
            "percent": 22,
            "color": colorCollection[4]
        }, {
            "range": "Mayores de 20 años",
            "percent": 8,
            "color": colorCollection[5]
        }
    ]
}

const chart1 = AmCharts.makeChart("chart1", {
    "type": "pie",
    "startDuration": 0,
    "theme": "none",
    "addClassNames": true,
    "valueField": "percent",
    "titleField": "range",
    "colorField": "color",
    "labelText": "[[percent]]%",
    "balloonText": "[[range]]: [[percent]]%",
    "legend": {
        "position": "right",
        "labelText": "[[title]]",
        "valueText": ""
    },
    "allLabels": [{
        "y": "44%",
        "align": "center",
        "size": 15,
        "bold": true,
        "text": "POR\nEDAD",
        "color": "#555"
    }],
    "innerRadius": "80%",
    "defs": {
        "filter": [{
            "id": "shadow",
            "width": "200%",
            "height": "200%",
            "feOffset": {
                "result": "offOut",
                "in": "SourceAlpha",
                "dx": 0,
                "dy": 0
            },
            "feGaussianBlur": {
                "result": "blurOut",
                "in": "offOut",
                "stdDeviation": 5
            },
            "feBlend": {
                "in": "SourceGraphic",
                "in2": "blurOut",
                "mode": "normal"
            }
        }]
    },
    "dataProvider": dataCollection.chart1
});


const chart2 = AmCharts.makeChart("chart2", {
    "type": "pie",
    "startDuration": 0,
    "theme": "none",
    "addClassNames": true,
    "valueField": "percent",
    "titleField": "range",
    "colorField": "color",
    "labelText": "[[percent]]%",
    "balloonText": "[[range]]: [[percent]]%",
    "legend": {
        "position": "right",
        "labelText": "[[title]]",
        "valueText": ""
    },
    "allLabels": [{
        "y": "44%",
        "align": "center",
        "size": 14,
        "bold": true,
        "text": "POR\nANTIGÜEDAD",
        "color": "#555"
    }],
    "innerRadius": "80%",
    "defs": {
        "filter": [{
            "id": "shadow",
            "width": "200%",
            "height": "200%",
            "feOffset": {
                "result": "offOut",
                "in": "SourceAlpha",
                "dx": 0,
                "dy": 0
            },
            "feGaussianBlur": {
                "result": "blurOut",
                "in": "offOut",
                "stdDeviation": 5
            },
            "feBlend": {
                "in": "SourceGraphic",
                "in2": "blurOut",
                "mode": "normal"
            }
        }]
    },
    "dataProvider": dataCollection.chart2
});

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

addListeners([chart1, chart2]);
// function resolutionInterruptionPoint() {
//     const iWith = window.innerWidth;
//
//     if (iWith >= 1200) {
//         return 'xl'; // Extra Large
//     } else if (iWith >= 992) {
//         return 'lg'; // Large
//     } else if (iWith >= 768) {
//         return 'md'; // Medium
//     } else if (iWith >= 576) {
//         return 'sm'; // Small
//     } else {
//         return 'xs'; // Tiny
//     }
//}

// window.addEventListener('resize', () => {
//     // const newPoint = resolutionInterruptionPoint();
//     // if (newPoint === 'xl') {
//     //     chart1.legend.position = 'right';
//     // } else {
//     //     chart1.legend.position = 'bottom';
//     // }
//     // chart1.validateNow();
// });


// AmCharts.theme = AmCharts.themes.light;
//
// let chart1_title = "Employees by division ";
// let chart1_Concesiones = "Concessions "
// let chart1_Terminal = "Altamira Port Terminal "
// let chart1_Materiales = "Materials and supplies "
// let chart1_Construccion = "Construction "
// let chart1_Honorarios = "Fees "
// let chart1_Corporativo = "Corporate Headquarters "
//
// let chart2_title = "Employees by type of function "
// let chart2_Administracion = "Administration "
// let chart2_Operaciones = "Operations "
// let chart2_Construccion = "Construction and engineering "
// let chart2_Directivos_relevantes = "Relevant directors "
// let chart2_Directivos = "Directors "
//
// if (locale == "es") {
//     chart1_title = "Colaboradores por división";
//     chart1_Concesiones = "Concesiones "
//     chart1_Terminal = "Terminal del Puerto de Altamira "
//     chart1_Materiales = "Materiales e insumos "
//     chart1_Construccion = "Construcción "
//     chart1_Honorarios = "Honorarios "
//     chart1_Corporativo = "Corporativo Central "
//
//     chart2_title = "Colaboradores por tipo de funciones"
//     chart2_Administracion = "Administración "
//     chart2_Operaciones = "Operaciones "
//     chart2_Construccion = "Construcción e ingeniería "
//     chart2_Directivos_relevantes = "Directivos relevantes "
//     chart2_Directivos = "Directivos "
// }
//
// let chart1 = AmCharts.makeChart("chart1", {
//     "type": "pie",
//     "titleField": "title",
//     "valueField": "value",
//     "titles": [
//         {
//             "text": chart1_title,
//             "size": 15
//         }
//     ],
//     "radius": "30%",
//     "innerRadius": "0",
//     "percentPrecision": "0",
//     "labelRadiusField": "radius",
//     "labelTickAlpha": 0.1,
//     "colors": [
//         '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
//     ],
//     "balloonText": "[[title]][[value]] ( [[percents]]% )",
//     "labelText": "[[percents]]%",
//     "dataProvider": [
//         {
//             "title": chart1_Concesiones,
//             "value": 1826,
//             // "radius": -40,
//         },
//         {
//             "title": chart1_Terminal,
//             "value": 797,
//             // "radius": -40
//         },
//         {
//             "title": chart1_Materiales,
//             "value": 168,
//             // "radius": -40
//         },
//         {
//             "title": chart1_Construccion,
//             "value": 44,
//             // "radius": 20
//         },
//         {
//             "title": chart1_Honorarios,
//             "value": 47,
//             "radius": 30
//         },
//         {
//             "title": chart1_Corporativo,
//             "value": 156,
//             "radius": 40
//         },
//     ],
//     "legend": {
//         "maxColumns": 1,
//         "align": "center",
//     },
// });
//
// let chart2_slice_out = false;
// let chart2 = AmCharts.makeChart("chart2", {
//     "type": "pie",
//     "titleField": "title",
//     "valueField": "value",
//     "titles": [
//         {
//             "text": chart2_title,
//             "size": 15
//         }
//     ],
//     "radius": "30%",
//     "innerRadius": "0",
//     "percentPrecision": "0",
//     // "labelRadiusField": "radius",
//     "labelTickAlpha": 0.1,
//     "colors": [
//         '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
//     ],
//     "balloonText": "[[title]][[value]] ( [[percents]]% )",
//     "labelText": "[[percents]]%",
//     "dataProvider": [
//         {
//             "title": chart2_Administracion,
//             "value": 351,
//             // "radius": -40,
//         },
//         {
//             "title": chart2_Operaciones,
//             "value": 2618,
//             // "radius": -40
//         },
//         {
//             "title": chart2_Construccion,
//             "value": 44,
//             // "radius": -40
//         },
//         {
//             "title": chart2_Directivos_relevantes,
//             "value": 8,
//             // "radius": 20
//         },
//         {
//             "title": chart2_Directivos,
//             "value": 17,
//             // "radius": 40
//         },
//     ],
//     "legend": {
//         "maxColumns": 1,
//         "align": "center",
//     },
//     // "pullInSlice": (t, d, e) => {
//     //     chart2_slice_out = false;
//     //     console.log(chart2_slice_out, t.pulled);
//     // },
//     // "pullOutSlice": (t, d, e) => {
//     //     chart2_slice_out = true;
//     //     console.log(chart2_slice_out, t.pulled);
//     // },
//     // "rollOutSlice": (t, d, e) => {
//     //     if (chart2_slice_out === true && t.pulled === true) {
//     //         chart2.clickSlice(t);
//     //         console.log(t);
//     //         chart2_slice_out = false;
//     //     }
//     //     console.log(chart2_slice_out, t.pulled);
//     // },
//     // "rollOverSlice": (t, d, e) => {
//     //     if (chart2_slice_out === false && t.pulled === false) {
//     //         chart2.clickSlice(t);
//     //         chart2_slice_out = true;
//     //     }
//     //     console.log(chart2_slice_out, t.pulled);
//     // }
// });
