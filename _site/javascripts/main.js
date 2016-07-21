$(document).ready(function(){
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'msline',
    renderAt: 'chart-container',
    width: '900',
    height: '300',
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
                "value": "14"
            }, {
                "value": "25"
            }, {
                "value": "9"
            }, {
                "value": "15"
            }, {
                "value": "20"
            }, {
                "value": "39"
            }, {
                "value": "19"
            }, {
                "value": "16"
            }, {
                "value": "20"
            }, {
                "value": "12"
            }, {
                "value": "17"
            }
            ]
        }, {
            "seriesname": "2016",
            "data": [{
                "value": "13"
            }, {
                "value": "12"
            }, {
                "value": "22"
            }, {
                "value": "12"
            }, {
                "value": "15"
            }, {
                "value": "19"
            }, {
                "value": "21"
            }]
        }]
    }
}
);
    fusioncharts.render();
});
});
