DATA = [
    {'name': 'John Doe', 'description': 'Huyo sio mwizi. Anauza nyama pare gara. Sasa amekutiliwa akikojoa na hao maaskari. Sasa kuona hatawangonjea akatoka mbio. Ndiyo akapigwa risasis. Sasa Kupigwa risasi., akauliwa. Sasa Kuuliwa wakakuja na kitu intaitwa bonoko. Wakamwekelea bonoko.'}
]

$(document).ready(function(){

    $('.dropdown').on('mouseenter mouseleave click tap', function() {
      $(this).toggleClass("open");
    });

    /** Fusion charts **/
    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts({
            type: 'msline',
            renderAt: 'chart-container',
            width: '900',
            height: '500',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subCaption": "",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
                    "subcaptionFontBold": "0",
                    "paletteColors": "#0075c2,#1aaf5d",
                    "bgcolor": "#ffffff",
                    "showBorder": "0",
                    "showShadow": "0",
                    "showCanvasBorder": "0",
                    "usePlotGradientColor": "0",
                    "legendBorderAlpha": "0",
                    "legendShadow": "0",
                    "showAxisLines": "0",
                    "showAlternateHGridColor": "0",
                    "divlineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineGapLen": "1",
                    "xAxisName": "Month",
                    "showValues": "0"
                },
                "categories": [{
                    "category": [{
                        "label": "Jan"
                    }, {
                        "label": "Feb"
                    }, {
                        "label": "Mar"
                    }, {
                        "label": "Apr"
                    }, {
                        "label": "Jun"
                    }, {
                        "label": "Jul"
                    }, {
                        "label": "Aug"
                    }, {
                        "label": "Sep"
                    }, {
                        "label": "Oct"
                    }, {
                        "label": "Nov"
                    }, {
                        "label": "Dec"
                    }
                    ]
                }],
                "dataset": [{
                    "seriesname": "2015",
                    "data": [{
                        "value": "15"
                    }, {
                        "value": "29"
                    }, {
                        "value": "39"
                    }, {
                        "value": "48"
                    }, {
                        "value": "63"
                    }, {
                        "value": "83"
                    }, {
                        "value": "123"
                    }, {
                        "value": "142"
                    }, {
                        "value": "158"
                    }, {
                        "value": "178"
                    }, {
                        "value": "190"
                    }, {
                        "value": "217"
                    }
                    ]
                }, {
                    "seriesname": "2016",
                    "data": [{
                        "value": "13"
                    }, {
                        "value": "25"
                    }, {
                        "value": "47"
                    }, {
                        "value": "59"
                    }, {
                        "value": "74"
                    }, {
                        "value": "93"
                    }, {
                        "value": "114"
                    }]
                }]
            }
        }
        );
        fusioncharts.render();
    });

    var map = AmCharts.makeChart( "chartdiv", {
      type: "map",
      "theme": "light",

      colorSteps: 10,

      dataProvider: {
        map: "kenyaHigh",
        areas: [{id: 'KE-01', value: 129}, {id: 'KE-02', value: 172}, {id: 'KE-03', value: 3569}, {id: 'KE-04', value: 4085}, {id: 'KE-05', value: 2494}, {id: 'KE-06', value: 3741}, {id: 'KE-07', value: 3956}, {id: 'KE-08', value: 4171}, {id: 'KE-09', value: 1118}, {id: 'KE-10', value: 215}, {id: 'KE-11', value: 3096}, {id: 'KE-12', value: 1849}, {id: 'KE-13', value: 1591}, {id: 'KE-14', value: 258}, {id: 'KE-15', value: 0}, {id: 'KE-16', value: 1376}, {id: 'KE-17', value: 0}, {id: 'KE-18', value: 2322}, {id: 'KE-19', value: 3182}, {id: 'KE-20', value: 3182}, {id: 'KE-21', value: 2967}, {id: 'KE-22', value: 301}, {id: 'KE-23', value: 3956}, {id: 'KE-24', value: 2279}, {id: 'KE-25', value: 1161}, {id: 'KE-26', value: 0}, {id: 'KE-27', value: 3010}, {id: 'KE-28', value: 2881}, {id: 'KE-29', value: 4257}, {id: 'KE-30', value: 2924}, {id: 'KE-31', value: 3569}, {id: 'KE-32', value: 2322}, {id: 'KE-33', value: 1935}, {id: 'KE-34', value: 3268}, {id: 'KE-35', value: 1634}, {id: 'KE-36', value: 2236}, {id: 'KE-37', value: 1290}, {id: 'KE-38', value: 774}, {id: 'KE-39', value: 2150}, {id: 'KE-40', value: 258}, {id: 'KE-41', value: 3354}, {id: 'KE-42', value: 3655}, {id: 'KE-43', value: 473}, {id: 'KE-44', value: 3870}, {id: 'KE-45', value: 688}, {id: 'KE-46', value: 3483}, {id: 'KE-47', value: 989}]
      },

      areasSettings: {
        autoZoom: true
      },

      valueLegend: {
        right: 10,
        minValue: "little",
        maxValue: "a lot!"
      },

      "export": {
        "enabled": true
      }

    } );

});
