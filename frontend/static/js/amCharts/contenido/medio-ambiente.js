const colorCollection = ["#3461B2", "#56AD71", "#E2E2E2"];
const colorBarCollection = ["#59A971", "#23356B", "#545454"];

if (locale == 'es'){
    var titulos = ['Consumo de electricidad','Proyección del % de consumo \nenergético proveniente de \nfuentes renovables','Consumo de agua','% de Consumo'];
    var sub = ['Planteles universitarios', 'Centros de aprendizaje', 'Oficinas'];
}else{
    var titulos = ['Electricity consumption','Projection of the % of energy \nconsumption from renewable \n energy sources','Water consumption','% Consumption'];
    var sub = ['University facilities', 'Educational centers', 'Office buildings'];
}

const dataCollection = {
    chart1Energia: [
        { "range": sub[2], "percent": 16.43, "color": colorCollection[0] }, 
        { "range": sub[1], "percent": 24.05, "color": colorCollection[1] }, 
        { "range": sub[0], "percent": 59.52, "color": colorCollection[2] }
    ],
    chart2Energia: [
        { "range": "2020", "value": 1947176, "text": "1,947,176", "color": colorCollection[0] },
        { "range": "2021", "value": 1804166, "text": "1,804,166", "color": colorCollection[2] },
        { "range": "2022", "value": 3198967, "text": "3,198,967", "color": colorCollection[1] }
    ],
    chart1Agua: [
        { "range": sub[2], "percent": 20.43, "color": colorCollection[1] }, 
        { "range": sub[1], "percent": 25.79, "color": colorCollection[2] }, 
        { "range": sub[0], "percent": 53.78, "color": colorCollection[0] }
    ],
    chart2Agua: [
        { "range": "2020", "value": 31454.78, "text": "31,454.78", "color": colorCollection[2] },
        { "range": "2021", "value": 32658.68, "text": "32,658.68", "color": colorCollection[0] },
        { "range": "2022", "value": 43349.73, "text": "43,349.73", "color": colorCollection[1] }
    ]
};

const dataBarCollection = [
    {
        "year": "2025",
        "percent": 23,
        "color": colorBarCollection[0]
    },
    {
        "year": "2027",
        "percent": 31.8,
        "color": colorBarCollection[1]
    },
    {
        "year": "2030",
        "percent": 45,
        "color": colorBarCollection[2]
    }
];

// Variables globales para los gráficos de energía y agua
let chart1Energia, chart2Energia, chart1Agua, chart2Agua;

function createChart(chartId, data, title, unit) {
    // Limpiar gráficos previos si ya existen
    if (chartId.includes('Energia')) {
        if (chartId === 'chart1Energia' && chart1Energia) chart1Energia.clear();
        if (chartId === 'chart2Energia' && chart2Energia) chart2Energia.clear();
    } else if (chartId.includes('Agua')) {
        if (chartId === 'chart1Agua' && chart1Agua) chart1Agua.clear();
        if (chartId === 'chart2Agua' && chart2Agua) chart2Agua.clear();
    }

    const chart = AmCharts.makeChart(chartId, {
        "type": "pie",
        "titles": [
            { "text": title, "size": 20 },
            { "text": unit, "size": 18 }
        ],
        "startDuration": 0,
        "theme": "none",
        "addClassNames": true,
        "valueField": chartId.includes('chart1') ? "percent" : "value",
        "titleField": "range",
        "colorField": "color",
        "labelText": chartId.includes('chart2') ? "[[text]]" : "[[percent]]%", 
        "balloonText": chartId.includes('chart2') ? "[[range]]: [[text]]" : "[[range]]: [[percent]]%",
        "balloonFontSize": 25,
        "labelFontSize": 35,
        "legend": {
            "align": "center",
            "position": "bottom",
            "labelText": "[[title]]",
            "valueText": ""
        },
        "innerRadius": "50%",
        "dataProvider": data,
        "pullOutEffect": "bounce",
        "pullOutDuration": 0.2,
        "pullOutOnHover": true,
        "marginTop": 10,
        "marginBottom": 10,
    });

    // Asigna el gráfico correspondiente
    if (chartId === 'chart1Energia') chart1Energia = chart;
    else if (chartId === 'chart2Energia') chart2Energia = chart;
    else if (chartId === 'chart1Agua') chart1Agua = chart;
    else if (chartId === 'chart2Agua') chart2Agua = chart;
}

// Función para el gráfico de barras
function createBarChart(chartId, data, title) {

    
    const barChart = AmCharts.makeChart(chartId, {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": title,
                "size": 18
            }
        ],
        "dataProvider": data,
        "categoryField": "year", // Mostrar los años en la parte inferior
        "rotate": false, // Esto indica que el gráfico es vertical
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: [[value]]%",
            "fillColorsField": "color",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "percent", // El valor será el porcentaje
            "labelText": "[[value]]%", // Mostrar el valor con el símbolo de porcentaje
            "labelPosition": "top",
            "columnWidth": 0.3
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryAxis": {
            "gridPosition": "start", // Colocar los años en la parte inferior
            "axisAlpha": 0,
            "tickLength": 0
        },
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "right", // Mostrar los porcentajes en el lado derecho
            "title": titulos[3],
            "gridAlpha": 0.1, // Transparencia de la cuadrícula de fondo
            "minimum": 0,
            "maximum": 50, // El máximo del eje derecho será 50%
            "unit": "%",
            "dashLength": 5, // Estilo de línea punteada para la cuadrícula
            "gridColor": "#000000"
        }],
        "allLabels": [],
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        }
    });

    return barChart; // Devolver el gráfico generado
}

$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(e.target).attr('href') === '#energia') {
            createChart("chart1Energia", dataCollection.chart1Energia, titulos[0], "(kWh)");
            createChart("chart2Energia", dataCollection.chart2Energia, titulos[0], "(kWh)");
            createBarChart("chartRenovables", dataBarCollection, titulos[1]);
        } else if ($(e.target).attr('href') === '#agua') {
            createChart("chart1Agua", dataCollection.chart1Agua, titulos[2], "(m³)");
            createChart("chart2Agua", dataCollection.chart2Agua, titulos[2], "(m³)");
        }
    });
});
