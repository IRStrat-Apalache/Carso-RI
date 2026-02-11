const colorCollection = ["#3461B2", "#56AD71", "#E2E2E2"];

if (locale == 'es'){
    var titulos = ['Mujeres','Hombres','39 colaboradores en total'];
    
}else{
    var titulos = ['Women','Men','39 collaborators in total'];
   
}

function createCollaboratorsChart(chartId) {
    const dataCollection = [
        {
            "range": titulos[0],
            "percent": 49,
            "text": 19,
            "color": colorCollection[0]
        },
        {
            "range": titulos[1],
            "percent": 51,
            "text": 20,
            "color": colorCollection[1]
        }
    ];

    const chart = AmCharts.makeChart(chartId, {
        "type": "pie",
        "titles": [
            { "text": titulos[2], "size": 16, "color": "#000000" } // Título del gráfico
        ],
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
        "valueField": "text",
        "titleField": "range",
        "colorField": "color",
        "labelText": "[[percent]]%",
        "balloonText": "[[range]]:[[percent]]%",
        "balloonFontSize": 25,
        "labelFontSize": 35,
        "legend": {
            "align": "center",
            "position": "bottom",
            "labelText": "[[title]]"
        },
        "innerRadius": "50%",
        "dataProvider": dataCollection,
        "pullOutEffect": "bounce",
        "pullOutDuration": 0.2,
        "pullOutOnHover": true,
        "marginTop": 5, // Margen superior ajustado
        "marginBottom": 10,
    });
}
