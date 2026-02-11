var loading = 0;
var GCC;
var IPC;
// var ticker_symbol = "EDUCA18.MX";
var needed = 2

jQuery(document).ready(function ($) {
    $.ajax({
        // url: 'https://hkpy.irstrat.com/intradia/148?callback=intradiaF',
        url: instradia + '?callback=intradiaF',
        async: true,
        dataType: 'jsonp',
        contentType: "application/json",
        success: function (data) {
            Datatabla(data.intradia)
        }
    });

    $.ajax({
        // url: 'https://hkpy.irstrat.com/intradia/history/169?start=2019-01-01',
        url: local_history_url + '?' + jQuery.param(params),
        async: false,
        dataType: 'jsonp',
        contentType: "application/json",
        success: function (json) {
            GCC = json.precios.reverse();
            loading++;
            console.log(loading);
            if (loading == needed) {
                console.log('entro en educa');
                pintar();
            }
        }
    });

    $.ajax({
        // url: 'https://hkpy.irstrat.com/intradia/history/11?start=2019-01-01',
        url: history_url + 'IPC' + '?' + jQuery.param(params),
        async: false,
        dataType: 'jsonp',
        contentType: "application/json",
        success: function (json) {
            IPC = json.precios.reverse();
            loading++;
            console.log(loading);
            if (loading == needed) {
                console.log('entro en ipc');
                pintar();
            }

        }
    });

    // function callback(json) {
    //     console.log(json);
    //     precios = json.precios;
    //     ipc = json.ipc;
    //     intradia = json.intradia;
    //     // ticker_symbol = "FPLUS";
    //     Datatabla(intradia);
    //     fillData(precios, ipc, ticker_symbol);
    // }
});

function Datatabla(intradia) {
    $('#table-date').html(intradia["date"]);
    $('#table-price').html(intradia["price"]);
    $('#table-change').html(intradia["change"]);
    $('#table-range').html(intradia["min"] + " - " + intradia["max"]);
    $('#table-volume').html(intradia["volume"]);
    $('#price-ticker').html("$" + intradia["price"]);
    $('#change-ticker').html(intradia["change"]);
}

function pintar() {
    console.log('entro a pintar');
    fillData(GCC, IPC, ticker_symbol);
}

function fillData(precios, ipc, ticker_symbol) {
    console.log('entro a fill data');
    var lvva = 0;
    var lvvo = 0;

    precios_fill = $.map(precios, function (n, i) {
        if (n.value !== null) {
            lvva = n.value;
            lvvo = n.volume
        }
        if (n.volume === null) {
            lvvo = 0
        }
        return [{"date": n.date, "value": lvva, "volume": lvvo}];
    });

    ipc_fill = $.map(ipc, function (n, i) {
        if (n.value !== null) {
            lvva = n.value;
            lvvo = n.volume
        }
        if (n.volume === null) {
            lvvo = 0
        }
        return [{"date": n.date, "value": lvva, "volume": lvvo}];
    });

    AmCharts.theme = AmCharts.themes.iredge;

    // AmCharts.ready(function () {
    // });
    createStockChart();

}

function createStockChart() {
    var chart = new AmCharts.AmStockChart();
    chart.dataDateFormat = "YYYY-MM-DD";
    chart.pathToImages = location.protocol + '//' + location.host + "/static/js/amCharts/images/";

    // chart.colors = ["#418FCE","#C54823","#7B1618","#F78F47","#0F0F17"];
    // DATASETS //////////////////////////////////////////
    // create data sets first
    let dataSet1 = new AmCharts.DataSet();
    dataSet1.title = ticker_symbol;
    dataSet1.fieldMappings = [{
        fromField: "value",
        toField: "value"
    }, {
        fromField: "volume",
        toField: "volume"
    }];
    dataSet1.dataProvider = precios_fill;
    dataSet1.categoryField = "date";
    dataSet1.color = "#56AD71"; // green

    let dataSet2 = new AmCharts.DataSet();
    dataSet2.title = "IPC";
    dataSet2.fieldMappings = [{
        fromField: "value",
        toField: "value"
    }, {
        fromField: "volume",
        toField: "volume"
    }];
    dataSet2.dataProvider = ipc_fill;
    dataSet2.categoryField = "date";
    dataSet2.color = "#000000";

    // set data sets to the chart
    chart.dataSets = [dataSet1, dataSet2];

    // PANELS ///////////////////////////////////////////
    // first stock panel
    var stockPanel1 = new AmCharts.StockPanel();
    stockPanel1.showCategoryAxis = false;
    stockPanel1.title = (locale === 'es') ? "Valor de cierre" : "Price";
    stockPanel1.percentHeight = 70;

    // graph of first stock panel
    var graph1 = new AmCharts.StockGraph();
    graph1.valueField = "value";
    graph1.comparable = true;
    graph1.compareField = "value";
    graph1.bullet = "round";
    graph1.hideBulletsCount = 32;
    graph1.bulletBorderColor = "#FFFFFF";
    graph1.bulletBorderAlpha = 1;
    graph1.balloonText = "[[title]]: <b>[[value]]</b>";
    graph1.compareGraphBalloonText = "[[title]]:<b>[[value]]</b>";
    graph1.compareGraphBullet = "round";
    graph1.compareGraphBulletBorderColor = "#FFFFFF";
    graph1.compareGraphBulletBorderAlpha = 1;
    stockPanel1.addStockGraph(graph1);

    // create stock legend
    var stockLegend1 = new AmCharts.StockLegend();
    stockLegend1.periodValueTextComparing = "[[percents.value.close]]%";
    stockLegend1.periodValueTextRegular = "[[value.close]]";
    stockPanel1.stockLegend = stockLegend1;

    // second stock panel
    var stockPanel2 = new AmCharts.StockPanel();
    stockPanel2.title = (locale === 'es') ? "Volumen" : "Volume";
    stockPanel2.percentHeight = 30;
    var graph2 = new AmCharts.StockGraph();
    graph2.valueField = "volume";
    graph2.type = "column";
    graph2.showBalloon = true;
    graph2.fillAlphas = 1;
    graph2.periodValue = "Sum";
    stockPanel2.addStockGraph(graph2);

    var stockLegend2 = new AmCharts.StockLegend();
    stockLegend2.periodValueTextRegular = "[[value.close]]";
    stockPanel2.stockLegend = stockLegend2;

    var panelsSettings = new AmCharts.PanelsSettings();
    panelsSettings.marginLeft = 10;
    panelsSettings.marginRight = 10;

    chart.panelsSettings = panelsSettings;

    // set panels to the chart
    chart.panels = [stockPanel1, stockPanel2];

    // OTHER SETTINGS ////////////////////////////////////
    var sbsettings = new AmCharts.ChartScrollbarSettings();
    sbsettings.graph = graph1;
    chart.chartScrollbarSettings = sbsettings;

    // CURSOR
    var cursorSettings = new AmCharts.ChartCursorSettings();
    cursorSettings.valueBalloonsEnabled = true;
    cursorSettings.cursorColor = '#001548'; // dark blue
    chart.chartCursorSettings = cursorSettings;

    // PERIOD SELECTOR ///////////////////////////////////
    var periodSelector = new AmCharts.PeriodSelector();
    periodSelector.position = "left";
    periodSelector.periods = [{
        period: "MM",
        count: 1,
        label: (locale === 'es') ? "1 mes" : "1 month"
    }, {
        period: "MM",
        count: 3,
        label: (locale === 'es') ? "3 meses" : "3 months"
    },
        {
            period: "YYYY",
            count: 1,
            selected: true,
            label: (locale === 'es') ? "1 año" : "1 year"
        },
        {
            period: "YYYY",
            count: 5,
            label: (locale === 'es') ? "5 años" : "5 years "
        }
    ];
    chart.periodSelector = periodSelector;

    // DATA SET SELECTOR
    var dataSetSelector = new AmCharts.DataSetSelector();
    dataSetSelector.position = "left";

    chart.dataSetSelector = dataSetSelector;

    var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
    categoryAxesSettings.maxSeries = 0;
    chart.categoryAxesSettings = categoryAxesSettings;
    chart.fontFamily = 'Proximanova';

    if (locale == 'es') {
        chart.addListener('rendered', function (event) {
            $(".amChartsPeriodSelector .amChartsInputField").datepicker({
                dateFormat: (locale === 'es') ? "dd-mm-yy" : "mm/dd/yy",
                closeText: "Cerrar",
                prevText: "&#x3C;Ant",
                nextText: "Sig&#x3E;",
                currentText: "Hoy",
                monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun",
                    "jul", "ago", "sep", "oct", "nov", "dic"],
                dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
                dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
                dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
                weekHeader: "Sm",
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ""
            });
        });
    } else {
        chart.addListener('rendered', function (event) {
            $(".amChartsPeriodSelector .amChartsInputField").datepicker({
                dateFormat: (locale === 'es') ? "dd-mm-yy" : "mm/dd/yy",
            });
        });
    }

    // if ($(window).width() < 500) {
    //     periodSelector.position = "top";
    //     dataSetSelector.position = "top";
    //     chart.periodSelector = periodSelector;
    //     chart.dataSetSelector = dataSetSelector;
    //     chart.write('chartdiv3');
    // } else {
    //     chart.write('chartdiv3');
    // }

    if (jQuery(window).width() < 768) {
        periodSelector.position = "top";
        dataSetSelector.position = "top";
        chart.periodSelector = periodSelector;
        chart.dataSetSelector = dataSetSelector;
        chart.write('chartdiv3');
        // jQuery(".preloader").fadeOut();
        // jQuery('#cotizacion-table-2').addClass("my-5");
    } else {
        chart.write('chartdiv3');
        // jQuery(".preloader").fadeOut();
        // jQuery('#cotizacion-table-2').removeClass("my-5");
    }

}
