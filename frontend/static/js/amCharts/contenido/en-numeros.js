AmCharts.theme = AmCharts.themes.light;
var chart = new AmCharts.AmSerialChart();
var chart1 = new AmCharts.AmSerialChart();

if (locale == "es") {
    var giroLabel = ['Duraderos de Consumo y Vestido', 'Bienes de Capital', 'Automóviles y Componentes', 'Materiales', 'Software y Servicios', 'Otros *', 'Servicios Comerciales y Profesionales', 'Servicios de Telecomunicaciones', 'Bancos', 'Comercio de Menudeo'];
    var otrosLabel = ['Transporte', 'Productos para Cuidado Personal', 'Bienes Raíces', 'Servicios Primarios', 'Seguros', 'Comercio de Alimentos', 'Financieras', 'Servicios de Consumo', 'Equipos de Tecnología', 'Alimentos, Bebidas y Tabaco', 'Entretenimiento', 'Servicio y Equipo de Salud'];
    var activoLabel = ['Oficina', 'Industrial', 'Comercial'];
    var hover2 = ['Oficina', 'Industrial', 'Comercial'];
    var last = "Indicadores financieros (millones de pesos)";
    var year = ['2T17', '3T17', '4T17', '1T18', '2T18', '3T18', '4T18', '1T19', '2T19', '3T19', '4T19', '1T20', '2T20', '3T20'];

} else {
    var giroLabel = ['Consumer Durables & Apparel', 'Capital Goods', 'Automobiles & Components', 'Materials', 'Software & Services', 'Other Sectors*', 'Commercial and Professional Services', 'Telecommunication Services', 'Banks', 'Retailing'];
    var otrosLabel = ['Transportation', 'Personal Products', 'Real Estate', 'Utilities', 'Insurance', 'Consumer Services', 'Diversified Financials', 'Food Retail', 'T. Hardware & Equipment', 'Food, Beverage & Tobacco', 'Entertainment', 'Health Care Equipment and Services'];
    var activoLabel = ['Offices', 'Industrial', 'Commercial'];
    var hover2 = ['Offices', 'Industrial', 'Commercial'];
    var last = "Selected Financial Indicators (millions of Mexican pesos)";
    var year = ['2Q17', '3Q17', '4Q17', '1Q18', '2Q18', '3Q18', '4Q18', '1Q19', '2Q19', '3Q19', '4Q19', '1Q20', '2Q20', '3Q20'];

}


var chartData1 = [
    {
        giro: giroLabel[0],
        valor: 23.2
    }, {
        giro: giroLabel[1],
        valor: 17.6
    }, {
        giro: giroLabel[2],
        valor: 14.6
    }, {
        giro: giroLabel[3],
        valor: 10.9
    }, {
        giro: giroLabel[4],
        valor: 10.6
    }, {
        giro: giroLabel[5],
        valor: 7.3
    }, {
        giro: giroLabel[6],
        valor: 7.3
    }, {
        giro: giroLabel[7],
        valor: 4.0
    }, {
        giro: giroLabel[8],
        valor: 2.4
    }, {
        giro: giroLabel[9],
        valor: 2.1
    }
];


chart1.dataProvider = chartData1;
chart1.categoryField = "giro";
chart1.theme = "light";
chart1.startDuration = 2;
chart1.rotate = true;
chart1.labelRadius = -25;
chart1.labelText = "[[percents]]%";
chart1.colors = ["#194F90", "#052a40", "#25abd1", "#073855", "#a8dded", "#396077", "#91919"];

var categoryAxis = chart.categoryAxis;
categoryAxis.gridPosition = "start";

var valueAxis = new AmCharts.ValueAxis();
valueAxis.axisAlpha = 0;
valueAxis.gridAlpha = 0.1;
chart1.addValueAxis(valueAxis);
valueAxis.integersOnly = true;

var graph1 = new AmCharts.AmGraph(AmCharts.themes.light);
graph1.type = "column";
graph1.title = "Ano";
graph1.colors = ["#194F90"];
graph1.valueField = "valor";
graph1.fillAlphas = 1,
    graph1.balloonText = "[[value]]%";
graph1.labelText = "[[value]]%";
// chart1.addTitle("Desglose de principales arrendatarios por giro económico (% rentas)", 25, "#4a5158", 1, true);
chart1.addGraph(graph1);
chart1.creditsPosition = "top-right";
chart1.write("chart");


// el nuevo
var chartDataNew = [
    {
        giro: otrosLabel[0],
        valor: 1.4
    }, {
        giro: otrosLabel[1],
        valor: 1.4
    }, {
        giro: otrosLabel[2],
        valor: 1.0
    }, {
        giro: otrosLabel[3],
        valor: 0.9
    }, {
        giro: otrosLabel[4],
        valor: 0.7
    }, {
        giro: otrosLabel[5],
        valor: 0.5
    }, {
        giro: otrosLabel[6],
        valor: 0.5
    }, {
        giro: otrosLabel[7],
        valor: 0.3
    }, {
        giro: otrosLabel[8],
        valor: 0.2
    }, {
        giro: otrosLabel[9],
        valor: 0.2
    }, {
        giro: otrosLabel[10],
        valor: 0.1
    }, {
        giro: otrosLabel[11],
        valor: 0.1
    }
];
var chartnew = new AmCharts.AmSerialChart();

chartnew.dataProvider = chartDataNew;
chartnew.categoryField = "giro";
chartnew.theme = "light";
chartnew.startDuration = 2;
chartnew.rotate = true;
chartnew.labelRadius = -25;
chartnew.labelText = "[[percents]]%";
chartnew.colors = ["#194F90"];


var categoryAxis = chart.categoryAxis;
categoryAxis.gridPosition = "start";

var valueAxis = new AmCharts.ValueAxis();
valueAxis.axisAlpha = 0;
valueAxis.gridAlpha = 0.1;
chart1.addValueAxis(valueAxis);
valueAxis.integersOnly = true;

var graphnew = new AmCharts.AmGraph(AmCharts.themes.light);
graphnew.type = "column";
graphnew.title = "Ano";
graphnew.colors = ["#194F90", "#052a40", "#25abd1", "#073855", "#a8dded", "#396077", "#91919"];
graphnew.valueField = "valor";
graphnew.fillAlphas = 1,
    graphnew.balloonText = "[[value]]%";
graphnew.labelText = "[[value]]%";
chartnew.addGraph(graphnew);
chartnew.creditsPosition = "top-right";
chartnew.write("chartotros");


// chart 2
var chartPie1 = new AmCharts.AmPieChart();
chartPie1.dataProvider = [{
    "activo": hover2[0],
    "valor": 46.9

}, {
    "activo": hover2[1],
    "valor": 50.5

}, {
    "activo": hover2[2],
    "valor": 2.6

}];

chartPie1.titleField = "activo";
chartPie1.accessibleTitle = "Prueba";
//chartPie1.innerRadius = "50%";
chartPie1.valueField = "valor";
chartPie1.outlineColor = "#f9f9f9";
chartPie1.outlineAlpha = 0.8;
chartPie1.outlineThickness = 2;
chartPie1.labelRadius = -25;
chartPie1.labelText = "[[value]]%";
chartPie1.color = "#f9f9f9";

chartPie1.colors = ["#232323", "#194F90", "#7B868C"];


var legend1 = new AmCharts.AmLegend();
legend1.align = "center";
legend1.markerType = "circle";
legend1.labelText = "[[title]]";
legend1.valueText = " ";

chartPie1.balloonText = "[[title]] <br> <b>[[value]]%</b>";
chartPie1.addLegend(legend1);
chartPie1.write("chart2");


//chart 6

if (locale == "es") {
    var ingresostotales = "Ingresos totales";
    var ion = "ION";
    var uafirda = "UAFIRDA";
    var ffo = "FFO";

} else {
    var ingresostotales = "Total revenues";
    var ion = "NOI";
    var uafirda = "EBITDA";
    var ffo = "FFO";
}
var chart = AmCharts.makeChart("chart7", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "colors": ["#232323", "#194F90", "#7B868C", "#C4C9CD", "#a8dded", "#396077", "#91919"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "labelText": "$[[value]]",
    "trendLines": [],
    "graphs": [
        {
            "balloonText": ingresostotales + ":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": ingresostotales,
            "type": "column",
            "valueField": "ingresostotales",
            "labelText": "[[indicadores]]%",
            "labelPosition": "inside"
        },
        {
            "balloonText": ion + ":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": ion,
            "type": "column",
            "valueField": "ion",
            "labelText": "[[indicadores1]]%",
            "labelPosition": "inside"
        },
        {
            "balloonText": uafirda + ":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": uafirda,
            "type": "column",
            "valueField": "uafirda",
            "labelText": "[[indicadores2]]%",
            "labelPosition": "inside"
        },
        {
            "balloonText": ffo + ":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": ffo,
            "type": "column",
            "valueField": "ffo",
            "labelText": "[[indicadores3]]%",
            "labelPosition": "inside"
        }

    ],
    "guides": [],
    "valueAxes": [
        {
            "unit": "$",
            "unitPosition": "left",
            "id": "ValueAxis-1",
            "position": "left",
            "axisAlpha": 0
        }
    ], "legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,

        "color": "gray",
        "textClickEnabled": true
    },
    "balloon": {},
    "titles": [],
    "dataProvider": [
        {
            "year": year[6],
            "ingresostotales": 255,
            "ion": 225,
            "uafirda": 201,
            "ffo": 175,
            "indicadores": 100,
            "indicadores1": 88.4,
            "indicadores2": 78.9,
            "indicadores3": 68.7
        },
        {
            "year": year[7],
            "ingresostotales": 296.4,
            "ion": 268.6,
            "uafirda": 241.7,
            "ffo": 180.1,
            "indicadores": 100,
            "indicadores1": 90.6,
            "indicadores2": 81.5,
            "indicadores3": 60.8
        },
        {
            "year": year[8],
            "ingresostotales": 296.7,
            "ion": 267.3,
            "uafirda": 241.4,
            "ffo": 197.3,
            "indicadores": 100,
            "indicadores1": 90.1,
            "indicadores2": 81.4,
            "indicadores3": 66.5
        },
        {
            "year": year[9],
            "ingresostotales": 302.5,
            "ion": 271.7,
            "uafirda": 245.4,
            "ffo": 195.9,
            "indicadores": 100,
            "indicadores1": 89.8,
            "indicadores2": 81.1,
            "indicadores3": 64.8


        },
        {
            "year": year[10],
            "ingresostotales": 316.1,
            "ion": 285.1,
            "uafirda": 259.3,
            "ffo": 243.4,
            "indicadores": 100,
            "indicadores1": 90.2,
            "indicadores2": 82.0,
            "indicadores3": 77.0
        },
        {
            "year": year[11],
            "ingresostotales": 314.8,
            "ion": 284.4,
            "uafirda": 254.8,
            "ffo": 260.7,
            "indicadores": 100,
            "indicadores1": 90.3,
            "indicadores2": 80.9,
            "indicadores3": 82.8
        },
        {
            "year": year[12],
            "ingresostotales": 358.9,
            "ion": 329.3,
            "uafirda": 302.5,
            "ffo": 279.2,
            "indicadores": 100,
            "indicadores1": 91.8,
            "indicadores2": 84.3,
            "indicadores3": 77.8
        },
        {
            "year": year[13],
            "ingresostotales": 343.1,
            "ion": 314.1,
            "uafirda": 287.7,
            "ffo": 265.3,
            "indicadores": 100,
            "indicadores1": 91.5,
            "indicadores2": 83.8,
            "indicadores3": 77.3
        },

        // Estos numeros se sacn tal cual del reporte con decimales, el % tambien
    ],
    "export": {
        "enabled": true
    }

});

//chart 8
if (locale == "es") {

    var ion = "ION";
    var uafirda = "UAFIDA";
    var ffo = "FFO";

} else {

    var ion = "NOI";
    var uafirda = "EBITDA";
    var ffo = "FFO";
}

chart.addTitle(last, 20, "#4a5158", 1, true);


var configNumeros = {
    g1: {
        "balloonText": "[[title]] <br> <b>[[value]]%</b>",
        "legend": {
            "align": "center",
            "markerType": "circle",
            labelText: "[[title]]",
            valueText: " "
        },
        "dataProvider": [
            {
                "activo": hover2[0],
                "valor": 46.9

            }, {
                "activo": hover2[1],
                "valor": 50.5

            }, {
                "activo": hover2[2],
                "valor": 2.6

            }
        ],
        "labelText": "[[value]]% ",
        "colors": ["#194F90", "#052a40", "#25abd1"],
        "labelRadius": -25,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        title: "[[title]]",
        "type": "pie",
        "valueField": "valor"
    },
    g2: {
        "balloonText": "[[title]] <br> <b>[[value]]%</b>",
        "legend": {
            "align": "center",
            "markerType": "circle",
            labelText: "[[title]]",
            valueText: " "
        },
        "dataProvider": [
            {
                "activo": "USD",
                "valor": 74.4,
            }, {
                "activo": "MXN",
                "valor": 25.6
            }
        ],
        "labelText": "[[value]]% ",
        "colors": ["#194F90", "#052a40", "#25abd1"],
        "labelRadius": -25,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        title: "[[title]]",
        "type": "pie",
        "valueField": "valor"
    },
    g3: {
        "balloonText": "[[title]] <br> <b>[[value]]%</b>",
        "legend": {
            "align": "center",
            "markerType": "circle",
            labelText: "[[title]]",
            valueText: " "
        },
        "dataProvider": [
            {
                ven: "0-1",
                valor: 17.4
            }, {
                ven: "1-3",
                valor: 20.0
            }, {
                ven: "3-5",
                valor: 9.0
            }, {
                ven: "5-7",
                valor: 18.2
            }, {
                ven: "7-10",
                valor: 34.3
            }, {
                ven: "+10",
                valor: 1.1
            }
        ],
        "labelText": "[[value]]% ",
        "colors": ["#194F90", "#052a40", "#25abd1", "#073855", "#a8dded", "#396077", "#91919"],
        "labelRadius": -25,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "ven",
        "type": "pie",
        "valueField": "valor"
    }
};

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var index = e.target.getAttribute("data-index");
    var div_id = e.target.getAttribute("data-chart");
    AmCharts.makeChart(div_id, configNumeros[index]);
});