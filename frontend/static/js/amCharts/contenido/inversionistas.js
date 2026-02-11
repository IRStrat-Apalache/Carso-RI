$(function () {
    // if ($("#chartdiv2")) {
    //     var chart2 = AmCharts.makeChart("chartdiv2", {
    //         "type": "serial",
    //         // "theme": "none",
    //         "colors": ['#194F90', '#d0d0d0'],
    //         "columnWidth": "0.4",
    //         "dataProvider": [{
    //             "year": "2004",
    //             "europe": 80,
    //             "namerica": 0,
    //         }, {
    //             "year": "2004",
    //             "europe": 80,
    //             "namerica": 120,
    //         }, {
    //             "year": "2003",
    //             "europe": 170,
    //             "namerica": 70,
    //         }, {
    //             "year": "2004",
    //             "europe": 80,
    //             "namerica": 120,
    //         }, {
    //             "year": "2005",
    //             "europe": 160,
    //             "namerica": 90,
    //         }, {
    //             "year": "2005",
    //             "europe": 160,
    //             "namerica": 90,
    //         }, {
    //             "year": "2005",
    //             "europe": 160,
    //             "namerica": 90,
    //         }],
    //         "valueAxes": [{
    //             "stackType": "100%",
    //             "axisAlpha": 0,
    //             "gridAlpha": 0,
    //             "labelsEnabled": false,
    //             "position": "left"
    //         }],
    //         "graphs": [{
    //             // "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
    //             "fillAlphas": 0.9,
    //             "fontSize": 11,
    //             // "labelText": "[[percents]]%",
    //             "lineAlpha": 0.5,
    //             // "title": "Europe",
    //             "type": "column",
    //             "valueField": "europe"
    //         }, {
    //             // "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
    //             "fillAlphas": 0.9,
    //             "fontSize": 11,
    //             // "labelText": "[[percents]]%",
    //             "lineAlpha": 0.5,
    //             // "title": "North America",
    //             "type": "column",
    //             "valueField": "namerica"
    //         },],
    //         "marginTop": -30,
    //         "marginRight": 0,
    //         "marginLeft": 0,
    //         "marginBottom": -40,
    //         "autoMargins": false,
    //         // "categoryField": "year",
    //         "categoryAxis": {
    //             "gridPosition": "start",
    //             "labelsEnabled": false,
    //             "axisAlpha": 0,
    //             "gridAlpha": 0
    //         },
    //         "export": {
    //             "enabled": true
    //         }
    //     });
    // }
    //
    // if ($("#chartdiv1")) {
    //     var chart1 = AmCharts.makeChart("chartdiv1", {
    //         // "pathToImages": location.protocol + '//' + location.host + "/static/js/amcharts/images/",
    //         "type": "serial",
    //         // "addClassNames": true,
    //         // "theme": "none",
    //         "autoMargins": false,
    //         "marginLeft": -5,
    //         "marginBottom": 0,
    //         "marginRight": 0,
    //         "marginTop": 60,
    //         "balloon": {
    //             // "adjustBorderColor": true,
    //             // "horizontalPadding": 20,
    //             // "verticalPadding": 20,
    //             "borderThickness": 0,
    //             // "borderAlpha": 0,
    //             // "fillAlpha": 0,
    //             "cornerRadius": 0,
    //             // "color": "#ffffff",
    //         },
    //         "dataProvider": [{
    //             "date": "1",
    //             "duration": 408
    //         }, {
    //             "date": "2",
    //             "duration": 482
    //         }, {
    //             "date": "3",
    //             "duration": 562
    //         }, {
    //             "date": "4",
    //             "duration": 890
    //         }, {
    //             "date": "5",
    //             "duration": 810
    //         }, {
    //             "date": "6",
    //             "duration": 810
    //         }, {
    //             "date": "7",
    //             "duration": 810
    //         }, {
    //             "date": "8",
    //             "duration": 560
    //         }, {
    //             "date": "9",
    //             "duration": 810
    //         }],
    //         "valueAxes": [{
    //             "axisAlpha": 0,
    //             "position": "left",
    //             "color": "#A2A2A2",
    //             "gridAlpha": 0,
    //             "labelsEnabled": false,
    //             "strictMinMax": true,
    //         }],
    //         "chartCursor": {
    //             "oneBalloonOnly": true,
    //             "bulletsEnabled": true,
    //             "graphBulletAlpha": 1,
    //             "graphBulletSize": 1.1,
    //             "bulletSize": 10,
    //             "cursorAlpha": 0,
    //             "categoryBalloonEnabled": false
    //         },
    //         "startDuration": 0.4,
    //         "graphs": [
    //             {
    //                 "bullet": "round",
    //                 "bulletBorderAlpha": 0,
    //                 // "bulletColor": "#FFFFFF",
    //                 "useLineColorForBulletBorder": true,
    //                 "bulletBorderThickness": 3,
    //                 "bulletHitAreaSize": 20,
    //                 // "balloonText": "",
    //                 "bulletAlpha": 0,
    //                 "lineThickness": 3,
    //                 "fillAlphas": 0.3,
    //                 "lineAlpha": 4,
    //                 "lineColor": "#19ad79",
    //                 "valueField": "duration",
    //                 "balloonColor": "#444444",
    //                 // "balloonFunction": function (graphDataItem, graph) {
    //                 //     date = graphDataItem.dataContext.date;
    //                 //     value = graphDataItem.dataContext.value;
    //                 //
    //                 //     return '<div class="row m-0 d-flex flex-column align-items-center" style="text-transform: uppercase; border-radius: 4px; max-width: 125px; background-color: #444444; box-shadow: 0 6px 15px 0 rgba(0,0,0,0.3); color: #FFFFFF; padding: 10px 20px; font-family: Quicksand; font-size: 12px; font-weight: bold; letter-spacing: 0; line-height: 15px;"> <p style="margin-bottom: 7px;">' + date + '</p> <p style="min-height: 25px; margin-bottom: 3px; color: #FFFFFF; font-family: Quicksand; font-size: 20px; font-weight: bold; letter-spacing: 0; line-height: 25px; text-align: center;">' + value + '</p> <p>Fair</p> </div>'
    //                 // }
    //             }
    //         ],
    //         "categoryField": "date",
    //         "categoryAxis": {
    //             "inside": true,
    //             "axisAlpha": .1,
    //             "tickLength": 0,
    //             "gridColor": "#A2A2A2",
    //             "labelsEnabled": true,
    //             "startOnAxis": true,
    //             "color": "#A2A2A2",
    //             "axisColor": "#A2A2A2",
    //             "autoGridCount": false,
    //             "gridCount": 4,
    //         },
    //         "export": {
    //             "enabled": true
    //         }
    //     });
    //     // var chart1 = AmCharts.makeChart("chartdiv1", {
    //     //     "type": "serial",
    //     //     "theme": "none",
    //     //     // "marginRight": 80,
    //     //     "dataProvider": [{
    //     //         "date": "1",
    //     //         "duration": 408
    //     //     }, {
    //     //         "date": "2",
    //     //         "duration": 482
    //     //     }, {
    //     //         "date": "3",
    //     //         "duration": 562
    //     //     }, {
    //     //         "date": "4",
    //     //         "duration": 890
    //     //     }, {
    //     //         "date": "5",
    //     //         "duration": 810
    //     //     }, {
    //     //         "date": "6",
    //     //         "duration": 810
    //     //     }, {
    //     //         "date": "7",
    //     //         "duration": 810
    //     //     }, {
    //     //         "date": "8",
    //     //         "duration": 810
    //     //     }, {
    //     //         "date": "9",
    //     //         "duration": 810
    //     //     }],
    //     //     "balloon": {
    //     //         // "cornerRadius": 6,
    //     //         // "horizontalPadding": 15,
    //     //         // "verticalPadding": 10
    //     //     },
    //     //     "valueAxes": [{
    //     //         "labelsEnabled": false,
    //     //         "axisAlpha": 0
    //     //     }],
    //     //     "graphs": [{
    //     //         "bullet": "round",
    //     //         "bulletBorderAlpha": 0,
    //     //         "bulletColor": "#FFFFFF",
    //     //         "useLineColorForBulletBorder": true,
    //     //         "bulletBorderThickness": 3,
    //     //         "bulletHitAreaSize": 20,
    //     //         "balloonText": "",
    //     //         "bulletAlpha": 0,
    //     //         "fillAlphas": 0.3,
    //     //         "fillColorsField": "#00bf16",
    //     //         "legendValueText": "[[value]]",
    //     //         // "lineColorField": "lineColor",
    //     //         // "title": "duration",
    //     //         "valueField": "duration"
    //     //     }],
    //     //     "chartCursor": {
    //     //         "oneBalloonOnly": true,
    //     //         "bulletsEnabled": true,
    //     //         "graphBulletAlpha": 1,
    //     //         "graphBulletSize": 1.1,
    //     //         "bulletSize": 10,
    //     //         "cursorAlpha": 0,
    //     //         "categoryBalloonEnabled": false
    //     //     },
    //     //     // "dataDateFormat": "YYYY-MM-DD",
    //     //     "categoryField": "date",
    //     //     "categoryAxis": {
    //     //         "inside": true,
    //     //         "autoGridCount": false,
    //     //         "axisColor": "#555555",
    //     //         "gridAlpha": 0,
    //     //         // "gridCount": 4,
    //     //         "axisAlpha": 0,
    //     //         "startOnAxis": true,
    //     //     },
    //     //     "export": {
    //     //         "enabled": true
    //     //     }
    //     // });
    // }
    if ($("#chart7")) {
        if (locale == "es") {
            var ingresostotales = "Ingresos totales";
            var ion = "ION";
            var uafirda = "UAFIRDA";
            var ffo = "FFO";
            var year = ['2T17', '3T17', '4T17', '1T18', '2T18', '3T18', '4T18', '1T19', '2T19', '3T19', '4T19', '1T20', '2T20', '3T20'];

        } else {
            var ingresostotales = "Total revenues";
            var ion = "NOI";
            var uafirda = "EBITDA";
            var ffo = "FFO";
            var year = ['2Q17', '3Q17', '4Q17', '1Q18', '2Q18', '3Q18', '4Q18', '1Q19', '2Q19', '3Q19', '4Q19', '1Q20', '2Q20', '3Q20'];

        }

        var chart = AmCharts.makeChart("chart7", {
            "titles": [
                {
                    "text": "Indicadores Financieros",
                    "size": 23
                },
                {
                    "text": "(Millones de pesos)",
                    "size": 15
                }
            ],
            "type": "serial",
            "theme": "light",
            "categoryField": "year",
            "rotate": false,
            "startDuration": 1,
            "colors": ["#232323", "#194F90", "#7B868C", "#C4C9CD", "#a8dded", "#396077", "#91919"],
            "categoryAxis": {
                "gridPosition": "start",
                "position": "left",
                "fontSize": 14,
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
                    // "labelPosition": "inside"
                    "fontSize": 8
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
                    // "labelPosition": "inside"
                    "fontSize": 8
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
                    // "labelPosition": "inside"
                    "fontSize": 8
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
                    // "labelPosition": "inside"
                    "fontSize": 8
                }

            ],
            "guides": [],
            "valueAxes": [
                {
                    "unit": "$",
                    "unitPosition": "left",
                    "id": "ValueAxis-1",
                    "position": "left",
                    "axisAlpha": 0,
                    "fontSize": 14
                }
            ], "legend": {
                "align": "center",
                "position": "bottom",
                "right": -4,
                "fontSize": 14,
                "color": "gray",
                "textClickEnabled": true
            },
            "balloon": {},
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
    }
});

if (locale == "es") {
    // var giroLabel = ['Duraderos de Consumo y Vestido', 'Bienes de Capital', 'Automóviles y Componentes', 'Materiales', 'Software y Servicios', 'Otros *', 'Servicios Comerciales y Profesionales', 'Servicios de Telecomunicaciones', 'Bancos', 'Comercio de Menudeo'];
    // var otrosLabel = ['Transporte', 'Productos para Cuidado Personal', 'Bienes Raíces', 'Servicios Primarios', 'Seguros', 'Comercio de Alimentos', 'Financieras', 'Servicios de Consumo', 'Equipos de Tecnología', 'Alimentos, Bebidas y Tabaco', 'Entretenimiento', 'Servicio y Equipo de Salud'];
    // var activoLabel = ['Oficina', 'Industrial', 'Comercial'];
    var hover2 = ['Oficina', 'Industrial', 'Comercial'];
    // var last = "Indicadores financieros (millones de pesos)";
    var ocupacion = ['Rentado', 'Disponible'];
    var moneda = ['USD', 'MXN'];
    // var year = ['2T17', '3T17', '4T17', '1T18', '2T18', '3T18', '4T18', '1T19', '2T19', '3T19', '4T19', '1T20', '2T20', '3T20'];

} else {
    var giroLabel = ['Consumer Durables & Apparel', 'Capital Goods', 'Automobiles & Components', 'Materials', 'Software & Services', 'Other Sectors*', 'Commercial and Professional Services', 'Telecommunication Services', 'Banks', 'Retailing'];
    var otrosLabel = ['Transportation', 'Personal Products', 'Real Estate', 'Utilities', 'Insurance', 'Consumer Services', 'Diversified Financials', 'Food Retail', 'T. Hardware & Equipment', 'Food, Beverage & Tobacco', 'Entertainment', 'Health Care Equipment and Services'];
    var activoLabel = ['Offices', 'Industrial', 'Commercial'];
    var hover2 = ['Offices', 'Industrial', 'Commercial'];
    // var last = "Selected Financial Indicators (millions of Mexican pesos)";
    var ocupacion = ['Rentado', 'Disponible'];
    var moneda = ['USD', 'MXN'];
    // var year = ['2Q17', '3Q17', '4Q17', '1Q18', '2Q18', '3Q18', '4Q18', '1Q19', '2Q19', '3Q19', '4Q19', '1Q20', '2Q20', '3Q20'];

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(function () {
    if ($('#chart1').length) {
        var chart1 = AmCharts.makeChart("chart1", {
            "titles": [
                {
                    "text": "Activos totales",
                    "size": 23,
                    "color": "#000000"
                },
                // {
                //     "text": "(uso de la propiedad)",
                //     "size": 12
                // }
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            // "legend": {
            //     "useGraphSettings": true,
            //     "markerSize": 12,
            //     "valueWidth": 0,
            //     "verticalGap": 0,
            //     "align": "center"
            // },
            "dataProvider": [{
                "year": "2017",
                "col_value": 11306957000,
                "percent": 17000000000,
                // "percent_d": 78.1,
            }, {
                "year": "2018",
                "col_value": 14361695000,
                "percent": 19000000000,
                // "percent_d": 78.8,
            }, {
                "year": "2019",
                "col_value": 17696683000,
                "percent": 21000000000,
                // "percent_d": 81.5,
            }, {
                "year": "2020",
                "col_value": 16181141000,
                "percent": 23000000000,
                // "percent_d": 83.1,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                "fillAlphas": 1,
                // "title": "Nivel de Endeudamiento",
                "type": "column",
                "valueField": "col_value",
                "labelText": " ",
                "labelFunction": function (data) {
                    value = Math.round(data.values.value / 1000000);
                    return numberWithCommas(value) + 'M';
                }
            },
                // {
                //     "id": "graph2",
                //     // "valueAxis": "axe2",
                //     // "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                //     "lineThickness": 3,
                //     "fillAlphas": 0,
                //     "title": "Nivel de Endeudamiento Máximo (50%)",
                //     "lineAlpha": 1,
                //     "valueField": "percent",
                //     // "labelText": "[[percent_d]]%"
                //     "dashLength": "5",
                // }
            ],
            "trendLines": [
                {
                    "initialValue": 11306957000,
                    "finalValue": 16181141000,
                    "initialCategory": "2017",
                    "finalCategory": "2020",
                    "lineColor": "#7b868c",
                    "dashLength": "5",
                    "lineThickness": 3
                }
            ],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            // "trendLines": [
            //     {
            //         "initialValue": 11306957000,
            //         "initialXValue": 11306957000,
            //         "finalValue": 16181141000,
            //         "finalXValue": 16181141000,
            //     }
            // ],
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart2').length) {
        var chart2 = AmCharts.makeChart("chart2", {
            "titles": [
                {
                    "text": "Capitalización de Mercado",
                    "size": 23,
                    "color": "#000000"
                },
                // {
                //     "text": "(uso de la propiedad)",
                //     "size": 12
                // }
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            // "legend": {
            //     "useGraphSettings": true,
            //     "markerSize": 12,
            //     "valueWidth": 0,
            //     "verticalGap": 0,
            //     "align": "center"
            // },
            "dataProvider": [{
                "year": "2017",
                "col_value": 8037025200,
                "percent": 11000000000,
                // "percent_d": 78.1,
            }, {
                "year": "2018",
                "col_value": 7589484000,
                "percent": 13000000000,
                // "percent_d": 78.8,
            }, {
                "year": "2019",
                "col_value": 11618107000,
                "percent": 15000000000,
                // "percent_d": 81.5,
            }, {
                "year": "2020",
                "col_value": 11196758730,
                "percent": 17000000000,
                // "percent_d": 83.1,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                "fillAlphas": 1,
                // "title": "Nivel de Endeudamiento",
                "type": "column",
                "valueField": "col_value",
                "labelText": " ",
                "labelFunction": function (data) {
                    value = Math.round(data.values.value / 1000000);
                    return numberWithCommas(value) + 'M';
                }
            },
                {
                    "id": "graph2",
                    // "valueAxis": "axe2",
                    // "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                    "lineThickness": 3,
                    "fillAlphas": 0,
                    "title": "Nivel de Endeudamiento Máximo (50%)",
                    "lineAlpha": 1,
                    "valueField": "percent",
                    // "labelText": "[[percent_d]]%"
                    "dashLength": "5",
                }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart3').length) {
        var chart3 = AmCharts.makeChart("chart3", {
            "titles": [
                {
                    "text": "Ingresos Totales",
                    "size": 23,
                    "color": "#000000"
                },
                // {
                //     "text": "(uso de la propiedad)",
                //     "size": 12
                // }
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            // "legend": {
            //     "useGraphSettings": true,
            //     "markerSize": 12,
            //     "valueWidth": 0,
            //     "verticalGap": 0,
            //     "align": "center"
            // },
            "dataProvider": [{
                "year": "2017",
                "col_value": 832071000,
                "percent": 1100000000,
                // "percent_d": 78.1,
            }, {
                "year": "2018",
                "col_value": 945824000,
                "percent": 1300000000,
                // "percent_d": 78.8,
            }, {
                "year": "2019",
                "col_value": 1211637000,
                "percent": 1500000000,
                // "percent_d": 81.5,
            }, {
                "year": "2020",
                "col_value": 1346962000,
                "percent": 1700000000,
                // "percent_d": 83.1,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                "fillAlphas": 1,
                // "title": "Nivel de Endeudamiento",
                "type": "column",
                "valueField": "col_value",
                "labelText": " ",
                "labelFunction": function (data) {
                    value = Math.round(data.values.value / 1000000);
                    return numberWithCommas(value) + 'M';
                }
            },
                {
                    "id": "graph2",
                    // "valueAxis": "axe2",
                    // "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                    "lineThickness": 3,
                    "fillAlphas": 0,
                    "title": "Nivel de Endeudamiento Máximo (50%)",
                    "lineAlpha": 1,
                    "valueField": "percent",
                    // "labelText": "[[percent_d]]%"
                    "dashLength": "5",
                }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart4').length) {
        var chart4 = AmCharts.makeChart("chart4", {
            "titles": [
                {
                    "text": "Vencimiento de los contratos acumulados",
                    "size": 23,
                    "color": "#000000"
                },
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#000000", "#194F90", "#7B868C"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0,
                "align": "center"
            },
            "dataProvider": [{
                "year": 2020,
                "vencimiento": 4.0,
                "acumulado": 24.0,
                "acumulado_d": 4.0
            }, {
                "year": 2021,
                "vencimiento": 20.6,
                "acumulado": 44.6,
                "acumulado_d": 24.6
            }, {
                "year": 2022,
                "vencimiento": 9.2,
                "acumulado": 53.8,
                "acumulado_d": 33.8
            }, {
                "year": 2023,
                "vencimiento": 7.7,
                "acumulado": 61.5,
                "acumulado_d": 41.5
            }, {
                "year": 2024,
                "vencimiento": 4.6,
                "acumulado": 66.1,
                "acumulado_d": 46.1,
            }, {
                "year": 2025,
                "vencimiento": 0.4,
                "acumulado": 66.5,
                "acumulado_d": 46.5,
            }, {
                "year": 2026,
                "vencimiento": 12.8,
                "acumulado": 79.3,
                "acumulado_d": 59.3,
            }, {
                "year": 2027,
                "vencimiento": 5.4,
                "acumulado": 84.7,
                "acumulado_d": 64.7,
            }, {
                "year": 2028,
                "vencimiento": 23.8,
                "acumulado": 108.5,
                "acumulado_d": 88.5,
            }, {
                "year": 2029,
                "vencimiento": 2.7,
                "acumulado": 111.2,
                "acumulado_d": 91.2,
            }, {
                "year": 2030,
                "vencimiento": 8.4,
                "acumulado": 119.6,
                "acumulado_d": 99.6,
            }, {
                "year": 2031,
                "vencimiento": 0.4,
                "acumulado": 120.0,
                "acumulado_d": 100.0,
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:12px;'>[[title]] en [[category]]:<br><span style='font-size:15px;'>[[value]]%</span></span>",
                "fillAlphas": 1,
                "title": "Vencimiento",
                "type": "column",
                "valueField": "vencimiento",
                "labelText": "[[value]]%"
            }, {
                "id": "graph2",
                "balloonText": "<span style='font-size:12px;'>[[title]] en [[category]]:<br><span style='font-size:15px;'>[[acumulado_d]]%</span></span>",
                "bullet": "square",
                "lineThickness": 2,
                // "bulletSize": 7,
                "bulletBorderAlpha": 1,
                // "bulletColor": "#FFFFFF",
                "useLineColorForBulletBorder": true,
                // "bulletBorderThickness": 3,
                "fillAlphas": 0,
                "lineAlpha": 1,
                "title": "Acumulado",
                "valueField": "acumulado",
                "labelText": "[[acumulado_d]]%",
                "dashLengthField": "dashLengthLine"
            }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart5').length) {
        var chart5 = AmCharts.makeChart("chart5", {
            "titles": [
                {
                    "text": "Rentabilidad de las Propiedades",
                    "size": 23,
                    "color": "#000000"
                },
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0,
                "align": "center"
            },
            "dataProvider": [{
                "year": "2017",
                "col_value": 725138000,
                "percent": 1025138000,
                "percent_d": 87.1,
            }, {
                "year": "2018",
                "col_value": 834928000,
                "percent": 1134928000,
                "percent_d": 88.3,
            }, {
                "year": "2019",
                "col_value": 1092692000,
                "percent": 1392692000,
                "percent_d": 90.2,
            }, {
                "year": "2020",
                "col_value": 1227883000,
                "percent": 1527883000,
                "percent_d": 91.2,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                "fillAlphas": 1,
                "title": "NOI",
                "type": "column",
                "valueField": "col_value",
                "labelText": " ",
                "labelFunction": function (data) {
                    value = Math.round(data.values.value / 1000000);
                    return numberWithCommas(value) + 'M';
                }
            },
                {
                    "id": "graph2",
                    // "valueAxis": "axe2",
                    "balloonText": "<span style='font-size:15px;'>[[value]]%</span>",
                    "lineThickness": 3,
                    "fillAlphas": 0,
                    "title": "Mgn NOI",
                    "lineAlpha": 1,
                    "valueField": "percent",
                    "labelText": "[[percent_d]]%"
                }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart6').length) {
        var chart6 = AmCharts.makeChart("chart6", {
            "titles": [
                {
                    "text": "Rentabilidad de la Empresa",
                    "size": 23,
                    "color": "#000000"
                },
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0,
                "align": "center"
            },
            "dataProvider": [{
                "year": "2017",
                "col_value": 649839000,
                "percent": 949839000,
                "percent_d": 78.1,
            }, {
                "year": "2018",
                "col_value": 745239000,
                "percent": 1045239000,
                "percent_d": 78.8,
            }, {
                "year": "2019",
                "col_value": 987815000,
                "percent": 1287815000,
                "percent_d": 81.5,
            }, {
                "year": "2020",
                "col_value": 1119208000,
                "percent": 1409208000,
                "percent_d": 83.1,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                "fillAlphas": 1,
                "title": "EBITDA",
                "type": "column",
                "valueField": "col_value",
                "labelText": " ",
                "labelFunction": function (data) {
                    value = Math.round(data.values.value / 1000000);
                    return numberWithCommas(value) + 'M';
                }
            },
                {
                    "id": "graph2",
                    // "valueAxis": "axe2",
                    "balloonText": "<span style='font-size:15px;'>[[value]]%</span>",
                    "lineThickness": 3,
                    "fillAlphas": 0,
                    "title": "Mgn EBITDA",
                    "lineAlpha": 1,
                    "valueField": "percent",
                    "labelText": "[[percent_d]]%"
                }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart8').length) {
        var chart8 = AmCharts.makeChart("chart8", {
            "titles": [
                {
                    "text": "Rentabilidad para Inversionistas",
                    "size": 23,
                    "color": "#000000"
                },
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0,
                "align": "center"
            },
            "dataProvider": [{
                "year": "2017",
                "col_value": 569260,
                "percent": 1069260,
                "percent_d": 1.03,
            }, {
                "year": "2018",
                "col_value": 680815,
                "percent": 1180815,
                "percent_d": 1.07,
            }, {
                "year": "2019",
                "col_value": 770403,
                "percent": 1270403,
                "percent_d": 1.12,
            }, {
                "year": "2020",
                "col_value": 1012678,
                "percent": 1180678,
                "percent_d": 1.05,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                "fillAlphas": 1,
                "title": "Distribuciones de Efectivo",
                "type": "column",
                "valueField": "col_value",
                "labelText": "[[value]]"
            },
                {
                    "id": "graph2",
                    // "valueAxis": "axe2",
                    // "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                    "lineThickness": 3,
                    "fillAlphas": 0,
                    "title": "Distribuciones de Efectivo/CBFI",
                    "lineAlpha": 1,
                    "valueField": "percent",
                    "labelText": "[[percent_d]]"
                }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart9').length) {
        var chart9 = AmCharts.makeChart("chart9", {
            "titles": [
                {
                    "text": "Nivel de Endeudamiento",
                    "size": 23,
                    "color": "#000000"
                },
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0,
                "align": "center"
            },
            "dataProvider": [{
                "year": "2017",
                "col_value": 24.2,
                "percent": 47,
                // "percent_d": 78.1,
            }, {
                "year": "2018",
                "col_value": 36.8,
                "percent": 47,
                // "percent_d": 78.8,
            }, {
                "year": "2019",
                "col_value": 27.9,
                "percent": 47,
                // "percent_d": 81.5,
            }, {
                "year": "2020",
                "col_value": 25.7,
                "percent": 47,
                // "percent_d": 83.1,
            }],
            "valueAxes": [{
                "id": "axe1",
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            },
                // {
                //     "id": "axe2",
                //     "axisAlpha": 0,
                //     "position": "right",
                //     "gridAlpha": 0,
                //     "labelsEnabled": false,
                //     "maximum": 100
                // }
            ],
            "startDuration": 1,
            "graphs": [{
                "id": "graph1",
                // "valueAxis": "axe1",
                "balloonText": "<span style='font-size:15px;'>[[value]]%</span>",
                "fillAlphas": 1,
                "title": "Nivel de Endeudamiento",
                "type": "column",
                "valueField": "col_value",
                "labelText": "[[value]]%"
            },
                {
                    "id": "graph2",
                    // "valueAxis": "axe2",
                    // "balloonText": "<span style='font-size:15px;'>[[value]]</span>",
                    "lineThickness": 3,
                    "fillAlphas": 0,
                    "title": "Nivel de Endeudamiento Máximo (50%)",
                    "lineAlpha": 1,
                    "valueField": "percent",
                    // "labelText": "[[percent_d]]%"
                    "dashLength": "5",
                }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart10').length) {
        var chart10 = AmCharts.makeChart("chart10", {
            "titles": [
                {
                    "text": "Nivel de Efectivo",
                    "size": 23,
                    "color": "#000000"
                },
                // {
                //     "text": "(uso de la propiedad)",
                //     "size": 12
                // }
            ],
            "fontSize": 14,
            "type": "serial",
            "addClassNames": true,
            "theme": "none",
            "colors": ["#194F90", "#7b868c"],
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0,
                "align": "center"
            },
            "dataProvider": [{
                "year": "2017",
                "percent": 13.9,
            }, {
                "year": "2018",
                "percent": 4.2,
            }, {
                "year": "2019",
                "percent": 21.2,
            }, {
                "year": "2020",
                "percent": 14.6,
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "gridAlpha": 0,
                "labelsEnabled": false,
                "minimum": 0
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:15px;'>[[value]]%</span>",
                "fillAlphas": 1,
                "title": "Efectivo / Activos Totales",
                "type": "column",
                "valueField": "percent",
                "labelText": "[[value]]%"
            }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": .5,
                "tickLength": 0,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    if ($('#chart11').length) {
        var chart11 = AmCharts.makeChart("chart11", {
            // "titles": [
            //     {
            //         "text": "Ocupación",
            //         "size": 23,
            //         "color": "#000000"
            //     },
            //     // {
            //     //     "text": "(uso de la propiedad)",
            //     //     "size": 12
            //     // }
            // ],
            "fontSize": 14,
            "balloonText": "<b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": ""
            },
            "dataProvider": [
                {
                    "activo": "Propiedades Gravadas al 2020",
                    "valor": 43.3

                }, {
                    "activo": "Propiedades No Gravadas al 2020",
                    "valor": 56.7

                }
            ],
            "labelText": "[[value]]% ",
            "colors": ["#194F90", "#7b868c"],
            "labelRadius": -30,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            "title": "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }

});