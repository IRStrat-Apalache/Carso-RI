var loaded = 0;
var ipc = [];
var precios = [];
var frmex = [];
var intradia = {};
// ticker_symbol = "FINN13.MX";
function intradiaF(data){
    // Datatabla(data.intradia)
    PintaTiker(data.intradia)
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function cargarInfo() {
    $.ajax({
        // url: 'https://hkpy.irstrat.com/intradia/164?callback=intradiaF',
        url: instradia + '?callback=intradiaF',
        async: true,
        dataType: 'jsonp',
        jsonpCallback: 'intradiaF',
        jsonp:'intradiaF',
        contentType: "application/json",

    });
}

cargarInfo()

function Datatabla(intradia) {
    $('#table-date').html(intradia["date"]);
    $('#price').html(intradia["price"]);
    $('#change').html(intradia["change"]);
    $('#table-range').html(intradia["min"] + " - " + intradia["max"]);
    $('#volume').html(numberWithCommas(intradia["volume"]));
    $('#price-ticker').html("$" + intradia["price"]);
    $('#change-ticker').html(intradia["change"]);
}

function PintaTiker(intradia) {
    let tikerSecCapitalizacion = (intradia["marketcap"]);
    tikerSecCapitalizacion = tikerSecCapitalizacion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let tikerSecCapitalizacionEl = $('#tiker-sec-capitalizacion');

    $('#tiker-sec-tiker').html(ticker_symbol);
    $('#tiker-sec-price').html(intradia["price"]);
    $('#tiker-sec-percent').html(intradia["percent"]+'%*');
    // tikerSecCapitalizacionEl.html(tikerSecCapitalizacion);
    tikerSecCapitalizacion = '65,064,717,010'
    tikerSecCapitalizacionEl.html(tikerSecCapitalizacion);
    // tikerSecCapitalizacionEl.attr("data-to", tikerSecCapitalizacion);
}
