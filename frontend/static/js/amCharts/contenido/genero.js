const colorBarCollection = ["#59A971", "#23356B", "#545454"];

if (locale == 'es'){
    var titulos = ['% Mujeres',' % Hombres'];
    
}else{
    var titulos = ['% Women','% Men'];
}
   
// Primer conjunto de datos (% Mujeres)
const dataBarCollection1 = [
    {
        "year": "2020",
        "percent": 30,
        "color": colorBarCollection[0]
    },
    {
        "year": "2021",
        "percent": 40,
        "color": colorBarCollection[1]
    },
    {
        "year": "2022",
        "percent": 44,
        "color": colorBarCollection[2]
    }
];

// Segundo conjunto de datos (% Hombres)
const dataBarCollection2 = [
    {
        "year": "2020",
        "percent": 70,
        "color": colorBarCollection[0]
    },
    {
        "year": "2021",
        "percent": 60,
        "color": colorBarCollection[1]
    },
    {
        "year": "2022",
        "percent": 56,
        "color": colorBarCollection[2]
    }
];

function createBarChart(chartId, data, axisTitle) {
    const barChart = AmCharts.makeChart(chartId, {
        "type": "serial",
        "theme": "none",
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
            "title": axisTitle, // El título del eje dinámico
            "gridAlpha": 0.1, // Transparencia de la cuadrícula de fondo
            "minimum": 0,
            "maximum": 100, // Ajusta el máximo si es necesario
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

// Llama a la función con los diferentes conjuntos de datos y títulos del eje de valor
$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(e.target).attr('href') === '#promocion') {            
            createBarChart("chartGenero", dataBarCollection1, titulos[0]); // Primera gráfica sin título con eje de % Mujeres
            createBarChart("chartGenero2", dataBarCollection2, titulos[1]); // Segunda gráfica sin título con eje de % Hombres
        } 
    });
});
