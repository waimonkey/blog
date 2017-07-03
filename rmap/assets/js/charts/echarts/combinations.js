/* ------------------------------------------------------------------------------
 *
 *  # Echarts - chart combinations
 *
 *  Chart combination configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });



    // Configuration
    // ------------------------------

    require(

        // Add necessary charts
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/line',
            'echarts/chart/bar',
            'echarts/chart/pie',


            'echarts/chart/scatter',
            'echarts/chart/k',
            'echarts/chart/radar',
            'echarts/chart/gauge'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var line_bar = ec.init(document.getElementById('line_bar'), limitless);



            // Charts options
            // ------------------------------


            //
            // Line and bar combination
            //

            line_bar_options = {

                // Setup grid
                grid: {
                    x: 55,
                    x2: 45,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,

                // Add legend
                legend: {
                    data: ['15分钟均值液位','最大值','最小值']
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['1951','1972','1988','1995','2002','2009']
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: '15分钟均值液位（m）',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Evaporation',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 36.7]
                    },
                    {
                        name: 'Precipitation',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 40.7]
                    },
                    {
                        name: 'Temperature',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
                    }
                ]
            };

            // Data set 1
            var sData1 = (function () {
                var d = [];
                var len = 40;
                var value;
                while (len--) {
                    d.push([
                        Math.round(Math.random()*10) * (Math.round(Math.random()*10) > 5 ? 1: -1),
                        Math.round(Math.random()*10) * (Math.round(Math.random()*10) > 5 ? 1: -1),
                        Math.round(Math.random()*20)
                    ]);
                }
                return d;
            })();

            // Data set 2
            var sData2 = (function () {
                var d = [];
                var len = sData1.length;
                for (var i = 0; i < len; i++) {
                    d.push([
                        sData1[i][0],
                        sData1[i][1],
                        Math.round(Math.random()*15)
                    ]);
                }
                return d;
            })();

            line_bar.setOption(line_bar_options);

            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    line_bar.resize();
                }, 200);
            }
        }
    );
});
