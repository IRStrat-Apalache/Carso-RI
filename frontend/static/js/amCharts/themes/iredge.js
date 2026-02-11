if (locale === 'es') {
    AmCharts.themes.light = {
        AmChart: {
            color: "#000000"
        },

        AmCoordinateChart: {
            colors: ["#000000", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
        },

        AmStockChart: {
            color: "#788288",
            colors: ["#000000", "#194F90", "#a8dded", "#aeadae", "#23649e"]
        },

        AmSlicedChart: {
            colors: ["#002747", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
            outlineAlpha: 1,
            outlineThickness: 2,
            labelTickColor: "#000000",
            labelTickAlpha: 0.3
        },

        AmRectangularChart: {
            zoomOutButtonColor: '#000000',
            zoomOutButtonRollOverAlpha: 0.15,
            zoomOutButtonImage: "lens.png"
        },

        AxisBase: {
            axisColor: "#000000",
            axisAlpha: 0.3,
            gridAlpha: 0.1,
            gridColor: "#000000"
        },

        ChartScrollbar: {
            backgroundColor: "#000000",
            backgroundAlpha: 0.12,
            graphFillAlpha: 0.5,
            graphLineAlpha: 0,
            selectedBackgroundColor: "#f9f9f9",
            selectedBackgroundAlpha: 0.4,
            gridAlpha: 0.15
        },

        ChartCursor: {
            cursorColor: "#000000",
            color: "#f9f9f9",
            cursorAlpha: 0.5
        },

        AmLegend: {
            color: "#000000"
        },

        AmGraph: {
            lineAlpha: 0.9
        },
        GaugeArrow: {
            color: "#000000",
            alpha: 0.8,
            nailAlpha: 0,
            innerRadius: "40%",
            nailRadius: 15,
            startWidth: 15,
            borderAlpha: 0.8,
            nailBorderAlpha: 0
        },

        GaugeAxis: {
            tickColor: "#000000",
            tickAlpha: 1,
            tickLength: 15,
            minorTickLength: 8,
            axisThickness: 3,
            axisColor: '#000000',
            axisAlpha: 1,
            bandAlpha: 0.8
        },

        TrendLine: {
            lineColor: "#c03246",
            lineAlpha: 0.8
        },

        // ammap
        AreasSettings: {
            alpha: 1,
            color: "#7b868c",
            // colorSolid: "#003767",
            unlistedAreasAlpha: 1,
            unlistedAreasColor: "#000000",
            outlineColor: "#f9f9f9",
            outlineAlpha: 0.5,
            outlineThickness: 0.5,
            rollOverColor: "#194f90",
            rollOverOutlineColor: "#f9f9f9",
            selectedOutlineColor: "#f9f9f9",
            selectedColor: "#194f90",
            unlistedAreasOutlineColor: "#f9f9f9",
            unlistedAreasOutlineAlpha: 0.5
        },

        LinesSettings: {
            color: "#000000",
            alpha: 0.8
        },

        // ImagesSettings: {
        //     alpha: 0.8,
        //     labelColor: "#000000",
        //     color: "#000000",
        //     labelRollOverColor: "#3c5bdc"
        // },

        // ZoomControl: {
        //     buttonFillAlpha: 0.7,
        //     buttonIconColor: "#a7a7a7"
        // },

        SmallMap: {
            mapColor: "#000000",
            rectangleColor: "#f15135",
            backgroundColor: "#f9f9f9",
            backgroundAlpha: 0.7,
            borderThickness: 1,
            borderAlpha: 0.8
        },

        // the defaults below are set using CSS syntax, you can use any existing css property
        // if you don't use Stock chart, you can delete lines below
        PeriodButton: {
            color: "#000000",
            background: "transparent",
            opacity: 0.7,
            border: "1px solid rgba(0, 0, 0, .3)",
            MozBorderRadius: "5px",
            borderRadius: "5px",
            margin: "1px",
            outline: "none",
            boxSizing: "border-box"
        },

        PeriodButtonSelected: {
            color: "#000000",
            backgroundColor: "#b9cdf5",
            border: "1px solid rgba(0, 0, 0, .3)",
            MozBorderRadius: "5px",
            borderRadius: "5px",
            margin: "1px",
            outline: "none",
            opacity: 1,
            boxSizing: "border-box"
        },

        PeriodInputField: {
            color: "#000000",
            background: "transparent",
            border: "1px solid rgba(0, 0, 0, .3)",
            outline: "none"
        },

        DataSetCompareList: {
            color: "#000000",
            lineHeight: "100%",
            boxSizing: "initial",
            webkitBoxSizing: "initial",
            border: "1px solid rgba(0, 0, 0, .3)"
        },

        DataSetSelect: {
            border: "1px solid rgba(0, 0, 0, .3)",
            outline: "none"
        },

        PeriodSelector: {
            fontFamily: "RobotoRegular",
            fromText: "Desde:",
            toText: "Hasta:",
            periodsText: "Periodo:",
            color: "#000000"
        },
        DataSetSelector: {
            compareText: "Comparar con:",
            selectText: "Seleccionar:",
            color: "#000000",
            selectedBackgroundColor: "#b9cdf5",
            rollOverBackgroundColor: "#a8b0e4"
        },
    };

    AmCharts.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    AmCharts.shortMonthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    AmCharts.dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    AmCharts.shortDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
} else {
    AmCharts.themes.light = {
        AmChart: {
            color: "#000000"
        },

        AmCoordinateChart: {
            colors: ["#000000", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
        },

        AmStockChart: {
            color: "#788288",
            colors: ["#000000", "#194F90", "#a8dded", "#aeadae", "#23649e"]
        },

        AmSlicedChart: {
            colors: ["#002747", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
            outlineAlpha: 1,
            outlineThickness: 2,
            labelTickColor: "#000000",
            labelTickAlpha: 0.3
        },

        AmRectangularChart: {
            zoomOutButtonColor: '#000000',
            zoomOutButtonRollOverAlpha: 0.15,
            zoomOutButtonImage: "lens.png"
        },

        AxisBase: {
            axisColor: "#000000",
            axisAlpha: 0.3,
            gridAlpha: 0.1,
            gridColor: "#000000"
        },

        ChartScrollbar: {
            backgroundColor: "#000000",
            backgroundAlpha: 0.12,
            graphFillAlpha: 0.5,
            graphLineAlpha: 0,
            selectedBackgroundColor: "#f9f9f9",
            selectedBackgroundAlpha: 0.4,
            gridAlpha: 0.15
        },

        ChartCursor: {
            cursorColor: "#000000",
            color: "#f9f9f9",
            cursorAlpha: 0.5
        },

        AmLegend: {
            color: "#000000"
        },

        AmGraph: {
            lineAlpha: 0.9
        },
        GaugeArrow: {
            color: "#000000",
            alpha: 0.8,
            nailAlpha: 0,
            innerRadius: "40%",
            nailRadius: 15,
            startWidth: 15,
            borderAlpha: 0.8,
            nailBorderAlpha: 0
        },

        GaugeAxis: {
            tickColor: "#000000",
            tickAlpha: 1,
            tickLength: 15,
            minorTickLength: 8,
            axisThickness: 3,
            axisColor: '#000000',
            axisAlpha: 1,
            bandAlpha: 0.8
        },

        TrendLine: {
            lineColor: "#c03246",
            lineAlpha: 0.8
        },

        // ammap
        AreasSettings: {
            alpha: 1,
            color: "#D3D3D3",
            colorSolid: "#003767",
            unlistedAreasAlpha: 1,
            unlistedAreasColor: "#000000",
            outlineColor: "#f9f9f9",
            outlineAlpha: 0.5,
            outlineThickness: 0.5,
            rollOverColor: "#528cba",
            rollOverOutlineColor: "#f9f9f9",
            selectedOutlineColor: "#f9f9f9",
            selectedColor: "#1c809d",
            unlistedAreasOutlineColor: "#f9f9f9",
            unlistedAreasOutlineAlpha: 0.5
        },

        LinesSettings: {
            color: "#000000",
            alpha: 0.8
        },

        ImagesSettings: {
            alpha: 0.8,
            labelColor: "#000000",
            color: "#000000",
            labelRollOverColor: "#3c5bdc"
        },

        ZoomControl: {
            buttonFillAlpha: 0.7,
            buttonIconColor: "#a7a7a7"
        },

        SmallMap: {
            mapColor: "#000000",
            rectangleColor: "#f15135",
            backgroundColor: "#f9f9f9",
            backgroundAlpha: 0.7,
            borderThickness: 1,
            borderAlpha: 0.8
        },

        // the defaults below are set using CSS syntax, you can use any existing css property
        // if you don't use Stock chart, you can delete lines below
        PeriodButton: {
            color: "#000000",
            background: "transparent",
            opacity: 0.7,
            border: "1px solid rgba(0, 0, 0, .3)",
            MozBorderRadius: "5px",
            borderRadius: "5px",
            margin: "1px",
            outline: "none",
            boxSizing: "border-box"
        },

        PeriodButtonSelected: {
            color: "#000000",
            backgroundColor: "#b9cdf5",
            border: "1px solid rgba(0, 0, 0, .3)",
            MozBorderRadius: "5px",
            borderRadius: "5px",
            margin: "1px",
            outline: "none",
            opacity: 1,
            boxSizing: "border-box"
        },

        PeriodInputField: {
            color: "#000000",
            background: "transparent",
            border: "1px solid rgba(0, 0, 0, .3)",
            outline: "none"
        },

        DataSetCompareList: {
            color: "#000000",
            lineHeight: "100%",
            boxSizing: "initial",
            webkitBoxSizing: "initial",
            border: "1px solid rgba(0, 0, 0, .3)"
        },

        DataSetSelect: {
            border: "1px solid rgba(0, 0, 0, .3)",
            outline: "none"
        },

        PeriodSelector: {
            fontFamily: "RobotoRegular",
            fromText: "From:",
            toText: "To:",
            periodsText: "Periodo:",
            color: "#000000"
        },
        DataSetSelector: {
            compareText: "Comparar con:",
            selectText: "Seleccionar:",
            color: "#000000",
            selectedBackgroundColor: "#b9cdf5",
            rollOverBackgroundColor: "#a8b0e4"
        },
    };
}