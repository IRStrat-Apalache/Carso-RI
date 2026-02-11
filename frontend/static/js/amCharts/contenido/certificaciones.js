if (locale == 'es') {
    var tituloGrafico = 'Proyección % de ABR certificada como sostenible';
    var tituloEje = '% del ABR total bajo gestión certificada';
} else {
    var tituloGrafico = 'Projection % of GLA certified as sustainable';
    var tituloEje = '% of total GLA under certified management';
}

function createPercentageChart(chartId) {
    const data = [
        {
            "year": "2025",
            "percentage": 13,
            "color": "#545454" // Color para las barras
        },
        {
            "year": "2027",
            "percentage": 22.08,
            "color": "#59A971" // Color para las barras
        },
        {
            "year": "2030",
            "percentage": 30,
            "color": "#23356B" // Color para las barras
        }
    ];

    const chart = AmCharts.makeChart(chartId, {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": tituloGrafico, // Título del gráfico basado en el locale
                "size": 20
            }
        ],
        "dataProvider": data,
        "categoryField": "year", // Mostrar los años en la parte inferior
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: [[percentage]]%",
            "fillColorsField": "color",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "percentage", // Valor de porcentaje
            "labelText": "[[percentage]]%", // Mostrar el valor de porcentaje en la parte superior
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
            "position": "left", // Mostrar el porcentaje en el eje izquierdo
            "title": tituloEje, // Título del eje de valor basado en el locale
            "gridAlpha": 0.1, // Transparencia de la cuadrícula de fondo
            "minimum": 0, // Ajusta el valor mínimo del eje
            "maximum": 100, // Ajusta el valor máximo del eje
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

// Llama a la función con los diferentes conjuntos de datos y títulos del eje de valor
$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(e.target).attr('href') === '#certificaciones') {            
            createPercentageChart("percentageChart");
        } 
    });
});
