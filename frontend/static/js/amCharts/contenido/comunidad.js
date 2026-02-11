// Definición de variables para títulos y texto de globos
let titulos, balloonText;

if (locale === 'es') {
    titulos = [" Proyección del otorgamiento de becas a \npoblación en vulnerabilidad económica"];
    balloonText = "[[category]]: [[activeBecas]] becas activas\n[[incremento]] más con respecto al 2021";
} else {
    titulos = ["Projection of the Scholarship Allocation \nto Economically Vulnerable Population"];
    balloonText = "[[category]]: [[activeBecas]] active scholarships\n[[incremento]] more compared to 2021";
}

function createScholarshipChart(chartId) {
    const data = [
        {
            "year": "2025",
            "activeBecas": 872,
            "incremento": 263,
            "color": "#545454" // Color para las barras
        },
        {
            "year": "2027",
            "activeBecas": 907,
            "incremento": 298,
            "color": "#59A971" // Color para las barras
        },
        {
            "year": "2030",
            "activeBecas": 963,
            "incremento": 354,
            "color": "#23356B" // Color para las barras
        }
    ];

    const chart = AmCharts.makeChart(chartId, {
        "type": "serial",
        "theme": "none",       
        "dataProvider": data,
        "categoryField": "year", // Mostrar los años en la parte inferior
        "startDuration": 1,
        "graphs": [{
            "balloonText": balloonText, // Usar variable balloonText
            "fillColorsField": "color",
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "activeBecas", // Valor de becas activas
            "labelText": "[[activeBecas]]", // Mostrar el valor de becas activas en la parte superior
            "labelPosition": "top",
            "columnWidth": 0.3 // Ajusta el grosor de las barras
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
            "position": "left", // Mostrar las becas activas en el eje izquierdo
            "title": "Número de becas activas",
            "gridAlpha": 0.1, // Transparencia de la cuadrícula de fondo
            "minimum": 800, // Ajusta el valor mínimo del eje
            "dashLength": 5 // Estilo de línea punteada para la cuadrícula
        }],
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        }
    });

    return chart; // Devolver el gráfico generado
}

// Llama a la función para crear la gráfica
createScholarshipChart("becasChart");
