var map = AmCharts.makeChart("amchart", {
    "type": "map",
    "theme": "light",
    "balloon": {
        horizontalPadding: 0,
        verticalPadding: 0,
        maxWidth: 250,
        borderAlpha: 0,
        borderThickness: 0,
        pointerWidth: 0
    },
    allLabels: [
        {
            "text": "680,284 m² de ABR",
            "bold": true,
            "x": "80%",
            "y": 20
        }
    ],
    "dataProvider": {
        "map": "mexicoLow",
        "getAreasFromMap": true,
        "areas": [
            {
                "id": "MX-CHH",
                "description": "",
                color: "#194f90",
            },
            {
                "id": "MX-SIN",
                "description": "",
                color: "#194f90",
            }, {
                "id": "MX-COA",
                "description": "",
                color: "#194f90",
            },
            {
                "id": "MX-NLE",
                "description": "",
                color: "#194f90",
            },
            {
                "id": "MX-SLP",
                "description": "",
                color: "#194f90",
            },
            {
                "id": "MX-GUA",
                "description": "",
                color: "#194f90",
            },
            {
                "id": "MX-QUE",
                "description": "",
                color: "#194f90",
            },

            {
                "id": "MX-MEX",
                "description": "",
                color: "#194f90",
            },
            {
                "id": "MX-JAL",
                "description": "",
                color: "#194f90",
            }
        ],
        "images": [
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 25.669931,
                longitude: -100.377644,
                balloonText: '<table class="bg-site text-left" style="">\
                    <tr><th>&nbsp;<span>MONTERREY, NL</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>389,608 m</span><sup>2</sup></th></tr>\
                    <tr><td>&nbsp;1. OEP Torre 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13,578 m<sup>2</sup>&nbsp;</td></tr>\
                    <tr><td>&nbsp;2. OEP Torre 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18,007 m<sup>2</sup> </td></tr>\
                    <tr><td>&nbsp;3. OEP Plaza Central&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13,295 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;4. CEN|333 Neoris&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,283 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;5. CEN|333 Axtel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12,937 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;6. CEN|333 Atento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3,532 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;7. Danfoss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30,580 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;9. Cuprum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17,261 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;15. Catacha&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,431 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;22. Prometeo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8,135 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;23. Nico 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43,272 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;33. Ciénega&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25,223 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;43. Cuauhtémoc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10,294 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;44. Zinc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19,622 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40,729 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,199 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3,809 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33,389 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10,061 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35,554 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;938 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14,744 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,152 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;46. Filio 10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,004 m<sup>2</sup></td></tr>\
                  </table>',
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 26.933012980355606,
                longitude: -105.66371440887451,
                balloonText: '<table class="bg-site text-left"">\
                    <tr><th>&nbsp;<span>PARRAL, CHIH</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>5,888 m</span><sup>2</sup></th></tr>\
                    <tr><td>&nbsp;14. Casona #4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,888 m<sup>2</sup></td></tr>\
                  </table>',
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 28.200347149003644,
                longitude: -105.46600341796875,
                balloonText: '<table class="bg-site text-left">\
                    <tr><th>&nbsp;<span>DELICIAS, CHIH</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>1,971 m</span><sup>2</sup></th></tr>\
                    <tr><td>&nbsp;18. Monza #3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,971 m<sup>2</sup></td></tr>\
                  </table>',
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 28.642389157900553,
                longitude: -106.0565185546875,
                // balloonText: "CHIHUAHUA, CHIH",
                balloonText: '<table class="bg-site text-left">\
                    <tr><th>&nbsp;<span>CHIHUAHUA, CHIH</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>27,010 m</span><sup>2</sup></th></tr>\
                    <tr><td>&nbsp;12. Casona #3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12,131 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;16. Monza #1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8,478 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;17. Monza #2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,790 m<sup>2</sup></td></tr>\
                    <tr><td>&nbsp;21. Monza #5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,611 m<sup>2</sup></td></tr>\
                  </table>',
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 28.410728397237914,
                longitude: -106.86676025390625,
                balloonText: '<table class="bg-site text-left">\
                    <tr><th>&nbsp;<span>CUAUHTEMOC, CHIH</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>1,440 m</span><sup>2</sup></th></tr>\
                    <tr><td>&nbsp;19. Monza #4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,440 m<sup>2</sup></td></tr>\
                  </table>',
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 31.240985378021307,
                longitude: -107.0068359375,
                balloonText: '<table class="bg-site text-left">\
                    <tr><th>&nbsp;<span>CIUDAD JUAREZ, CHIH</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>4,520 m</span><sup>2</sup></th></tr>\
                    <tr><td>&nbsp;8. Cuadrante &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,520 m<sup>2</sup></td></tr>\
                  </table>',
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 25.799891182088334,
                longitude: -108.97338867187499,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>LOS MOCHIS, SIN</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>7,985 m</span><sup>2</th></tr>\
                     <tr><td>&nbsp;13. Casona #5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7,985 m<sup>2</sup></td></tr>\
                   </table>'
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 25.388697990350824,
                longitude: -101.09069824218749,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>SALTILLO, COAH</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>82,622 m</span><sup>2</sup></th></tr>\
                     <tr><td>&nbsp;24. Providencia #1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13,717 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;25. Providencia #2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7,013 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;26. Providencia #3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11,760 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;27. Providencia #4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26,165 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;28. Providencia #5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9,129 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;29. Providencia #6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6,378 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;30. Providencia #7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,093 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;31. Providencia #8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3,367 m<sup>2</sup></td></tr>\
                   </table>'
            },
            {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 22.14670778001263,
                longitude: -100.986328125,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>SAN LUIS POTOSI, SLP</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>89,951 m</span><sup>2</sup></th></tr>\
                     <tr><td>&nbsp;36. Huasteco #1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38,503 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;37. Huasteco #2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15,728 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;38. Huasteco #3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11,532 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;39. Huasteco #4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,760 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;40. Huasteco #5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,059 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;41. Huasteco #6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3,380 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;42. Huasteco #7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13,999 m<sup>2</sup></td></tr>\
                   </table>'
            }, {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 19.3602800,
                longitude: -99.3498000,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>HUIXQUILUCAN, MEX</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15,137 m</span><sup>2</sup></th></tr>\
                     <tr><td>&nbsp;32. Fortaleza&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15,137 m<sup>2</sup></td></tr>\
                   </table>'
            }, {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 21.066560095381984,
                longitude: -99.69818115234375,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>QUERETARO, QRO</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>21,897 m</span><sup>2</sup></th></tr>\
                     <tr><td>&nbsp;20. Santiago&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16,497 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;35. Catacha #2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp5,400 m<sup>2</sup></td></tr>\
                   </table>'
            }, {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 20.673905264672843,
                longitude: -101.35574340820311,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>IRAPUATO, QTO</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>12,680 m</span><sup>2</sup></th></tr>\
                     <tr><td>&nbsp;10. Casona #1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,951 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;11. Casona #2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6,729 m<sup>2</sup></td></tr>\
                   </table>'
            }, {
                "type": "circle",
                "theme": "dark",
                "width": 10,
                "height": 10,
                color: "#ffffff",
                latitude: 20.632784250388028,
                longitude: -103.326416015625,
                balloonText: '<table class="bg-site text-left">\
                     <tr><th>&nbsp;<span>GUADALAJARA, JAL</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>19,575 m</span><sup>2</sup></th></tr>\
                     <tr><td>&nbsp;34. Redwood&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11,605 m<sup>2</sup></td></tr>\
                     <tr><td>&nbsp;45. Patria &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7,970 m<sup>2</sup></td></tr>\
                   </table>'
            }
        ]

    },
    "areasSettings": {
        // "autoZoom": true,
        "balloonText": "",
        "selectable": true
    }
});
// ["#1c809d","#8eb4e3","#25abd1","#073855","#a8dded","#396077","#91919"]

if (locale == "es") {
    var diversificacion_geografica = ['Ciudad de México', 'Estado de México', 'Jalisco', 'Nuevo León', 'Querétaro', 'Hidalgo', 'San Luis Potosí', 'Otros*'];
    var diversificacion_abr = ['Querétaro', 'Aguascalientes', 'Hidalgo', 'Ciudad de México', 'Jalisco', 'Estado de México', 'Guerrero', 'Otros*'];
    var diversificacion_seg_inmuebles = ['Planteles universitarios', 'Centros de aprendizaje', 'Oficinas'];
    var diversificacion_seg_abr = ['Planteles universitarios', 'Centros de aprendizaje', 'Oficinas'];
    var diversificacion_segmento = ['Servicio Selecto', 'Servicio Completo', 'Servicio Limitado', 'Servicio Estandar Prolongada'];
    var operador = ['Aimbridge Latam', 'Grupo Presidente'];
    var titulos_chart = ["Diversificación geográfica Inmuebles","Diversificación geográfica ABR","Diversificación por segmento Inmuebles","Diversificación por segmento ABR"];
} else {
    var diversificacion_geografica = ['Mexico City', 'State of Mexico', 'Jalisco', 'Nuevo León', 'Querétaro', 'Hidalgo', 'San Luis Potosí', 'Others*'];
    var diversificacion_abr = ['Querétaro', 'Aguascalientes', 'Hidalgo', 'Ciudad de México', 'Jalisco', 'Estado de México', 'Guerrero', 'Others*'];
    var diversificacion_seg_inmuebles = ['University facilities', 'Educational centers', 'Office buildings'];
    var diversificacion_seg_abr = ['University facilities', 'Educational centers', 'Office buildings'];
    var diversificacion_segmento = ['Servicio Selecto', 'Servicio Completo', 'Servicio Limitado', 'Servicio Estandar Prolongada'];
    var operador = ['Aimbridge Latam', 'Grupo Presidente'];
    var titulos_chart = ["Geographic diversification Properties","Geographic diversification GLA","Diversification by segment Properties","Diversification by segment GLA"];
}

$(function () {
    if ($('#chart1').length) {
        var chart1 = AmCharts.makeChart("chart1", {
            "titles": [
                {
                    "text": titulos_chart[0],
                    "size": 18,
                    "color": "#000000"
                },
            ],
            "colors": ["#001548", "#1D3164", "#10378E", "#3461B2", "#729EDD", "#A5C6E5", "#E2E2E2", "#000E28"],
            "fontSize": 14,
            "balloonText": "[[title]] <br> <b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": "",
                "maxColumns": 3
            },
            "dataProvider": [
                {
                    "activo": diversificacion_geografica[0],
                    "valor": 21

                }, {
                    "activo": diversificacion_geografica[1],
                    "valor": 18

                }, {
                    "activo": diversificacion_geografica[2],
                    "valor": 13
                }, {
                    "activo": diversificacion_geografica[3],
                    "valor": 6
                }, {
                    "activo": diversificacion_geografica[4],
                    "valor": 4
                }, {
                    "activo": diversificacion_geografica[5],
                    "valor": 4
                }, {
                    "activo": diversificacion_geografica[6],
                    "valor": 4
                }, {
                    "activo": diversificacion_geografica[7],
                    "valor": 30
                }
            ],
            "labelText": "[[value]]% ",
            "labelRadius": -25,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            title: "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }

    if ($('#chart2').length) {
        var chart2 = AmCharts.makeChart("chart2", {
            "titles": [
                {
                    "text": titulos_chart[1],
                    "size": 18,
                    "color": "#000000"
                },
            ],
            "colors": ["#000E28", "#1D3164", "#10378E", "#3461B2", "#729EDD", "#A5C6E5", "#E2E2E2", "#001548"],
            "fontSize": 14,
            "balloonText": "[[title]] <br> <b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": ""
            },
            "dataProvider": [
                {
                    "activo": diversificacion_abr[0],
                    "valor": 19

                }, {
                    "activo": diversificacion_abr[1],
                    "valor": 11
                }, {
                    "activo": diversificacion_abr[2],
                    "valor": 11
                }, {
                    "activo": diversificacion_abr[3],
                    "valor": 10
                }, {
                    "activo": diversificacion_abr[4],
                    "valor": 9
                }, {
                    "activo": diversificacion_abr[5],
                    "valor": 11
                }, {
                    "activo": diversificacion_abr[6],
                    "valor": 7
                }, {
                    "activo": diversificacion_abr[7],
                    "valor": 22
                }
            ],
            "labelText": "[[value]]% ",
            "labelRadius": -25,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            title: "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }

    if ($('#chart3').length) {
        var chart3 = AmCharts.makeChart("chart3", {
            "titles": [
                {
                    "text":titulos_chart[2],
                    "size": 18,
                    "color": "#000000"
                },
            ],
            "colors": ["#10378E", "#000E28", "#A5C6E5"],
            "fontSize": 14,
            "balloonText": "[[title]] <br> <b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": ""
            },
            "dataProvider": [
                {
                    "activo": diversificacion_seg_inmuebles[0],
                    "valor": 43

                }, 
                {
                    "activo": diversificacion_seg_inmuebles[1],
                    "valor": 7
                },
                {
                    "activo": diversificacion_seg_inmuebles[2],
                    "valor" : 49
                }
            ],
            "labelText": "[[value]]% ",
            "labelRadius": -25,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            title: "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }

    if ($('#chart4').length) {
        var chart4 = AmCharts.makeChart("chart4", {
            "titles": [
                {
                    "text": titulos_chart[3],
                    "size": 18,
                    "color": "#000000"
                },
            ],
            "colors": ["#000E28", "#A5C6E5", "#10378E"],
            "fontSize": 14,
            "balloonText": "[[title]] <br> <b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": ""
            },
            "dataProvider": [
                {
                    "activo": diversificacion_seg_abr[0],
                    "valor": 89
                }, {
                    "activo": diversificacion_seg_abr[1],
                    "valor": 4
                }, {
                    "activo": diversificacion_seg_abr[2],
                    "valor": 6
                }
            ],
            "labelText": "[[value]]% ",
            "labelRadius": -25,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            title: "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }

    if ($('#chart5').length) {
        var chart5 = AmCharts.makeChart("chart5", {
            "titles": [
                {
                    "text": "Diversificación por segmento",
                    "size": 18,
                    "color": "#000000"
                },
            ],
            "colors": ["#20232D", "#263155", "#1D6798", "#2C84BF", "#3FB7E4", "#B5EAF7", "#778B96", "#96AAB2"],
            "fontSize": 14,
            "balloonText": "[[title]] <br> <b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": ""
            },
            "dataProvider": [
                {
                    "activo": diversificacion_segmento[0],
                    "valor": 50
                }, {
                    "activo": diversificacion_segmento[1],
                    "valor": 39
                }, {
                    "activo": diversificacion_segmento[2],
                    "valor": 9
                }, {
                    "activo": diversificacion_segmento[3],
                    "valor": 2
                }
            ],
            "labelText": "[[value]]% ",
            "labelRadius": -25,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            title: "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }


    if ($('#chart6').length) {
        var chart6 = AmCharts.makeChart("chart6", {
            "titles": [
                {
                    "text": "Operador",
                    "size": 18,
                    "color": "#000000"
                },
            ],
            "colors": ["#20232D", "#263155", "#1D6798", "#2C84BF", "#3FB7E4", "#B5EAF7", "#778B96", "#96AAB2"],
            "fontSize": 14,
            "balloonText": "[[title]] <br> <b>[[value]]%</b>",
            "color": "#ffffff",
            "legend": {
                "align": "center",
                "markerType": "circle",
                "labelText": "[[title]]",
                "valueText": ""
            },
            "dataProvider": [
                {
                    "activo": operador[0],
                    "valor": 98
                }, {
                    "activo": operador[1],
                    "valor": 2
                }
            ],
            "labelText": "[[value]]% ",
            "labelRadius": -25,
            "outlineAlpha": 0.8,
            "outlineThickness": 2,
            "theme": "light",
            "titleField": "activo",
            title: "[[title]]",
            "type": "pie",
            "valueField": "valor"
        });
    }
});