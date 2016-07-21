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
                    "caption": "Number of Extra Judicial Killings",
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
});
