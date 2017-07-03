/* ------------------------------------------------------------------------------
 *
 *  # Echarts - lines and areas
 *
 *  Lines and areas chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function() {


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
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var basic_lines = ec.init(document.getElementById('basic_lines'), limitless);

            // Charts setup
            // ------------------------------

            //
            // Basic lines options
            //

            basic_lines_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: ['测雨量液位(m)', '前一天测量液位(m)','降雨量（mm）','前一天降雨量(mm)']
                },

                // Add custom colors
                color: ['#EF5350', '#66BB6A', '#f00', '#0ff'],

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['2017-04-14 18:30', '2017-04-14 19:00', '2017-04-14 19:30', '2017-04-14 20:00', '2017-04-14 20:30']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],

                // Add series
                series: [
                    {
                        name: '测雨量液位',
                        type: 'line',
                        data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        }
                    },
                    {
                        name: '前一天测量液位',
                        type: 'line',
                        data: [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        }
                    },
                    {
                        name: '降雨量',
                        type: 'line',
                        data: [1.8,1.8,1.8,1.8,1.8,1.8,],
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        }
                    },
                    {
                        name: '前一天降雨量',
                        type: 'line',
                        data: [2,2,2,2,2,2,2],
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        }
                    }
                ]
            };

            // Apply options
            // ------------------------------

            basic_lines.setOption(basic_lines_options);

            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function () {
                    basic_lines.resize();
                }, 200);
            }
        }
    );
});
