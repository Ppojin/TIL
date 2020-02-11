$(document).ready(function () {
    // load datepicker
    $(() => {
        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
    
            return date;
        }
        var dateFormat = "yy-mm-dd",
            from = $("#from")
                .datepicker({
                    dateFormat: dateFormat,
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1,
                    maxDate: new Date()
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $("#to").datepicker({
                dateFormat: dateFormat,
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                maxDate: new Date()
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });
    });

    // event: dataSubmit
    $("#formGroup").submit(() => {
        event.preventDefault();
        ajaxFromPoloniex($("#from").val(), $("#to").val());
    })
    
    // type(Date) to string
    const myConvertDate = (timestamp) => {   
        const date = new Date(timestamp * 1000);
        const result = `${String(date.getFullYear())}/${String(date.getMonth()+1)}/${String(date.getDate())}`
        // console.log(result);
        return result;
    };

    // get data from poloniex
    const ajaxFromPoloniex = (from, to) => {
        const url = "https://poloniex.com/public";
        const command = "returnChartData"
        const currencyPair = "USDT_BTC";
        // const startDate = "1577836800";
        const startDate = new Date (from).getTime() / 1000;
        // const endDate = "9999999999";
        const endDate = new Date (to).getTime() / 1000;
        const period = "86400";
        const ajaxUrl = `${url}?command=${command}&currencyPair=${currencyPair}&start=${startDate}&end=${endDate}&period=${period}`;
        // console.log(ajaxUrl);
        
        $.ajax(ajaxUrl, {
            method: "GET",
            // data: {
            //     command: command,
            //     currencyPair: currencyPair,
            //     start: startDate,
            //     end: endDate,
            //     period: period
            // },
            success: (data)=>{
                // console.log(data);
                drawChart(data);
                drawTable(data);
            },
            error: (err)=>{
                console.log(err);
            }
        });
        
    }

    // draw chart using data from ajaxFromPoloniex
    const drawChart = (data)=>{
        let ctx = document.getElementById('chartJS').getContext('2d');
        let chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(x => myConvertDate(x.date)),
                datasets: [{
                    label: 'high',
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    data: data.map(x => x.high)
                }, {
                    label: 'low',
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
                    data: data.map(x => x.low)
                }]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    };

    // draw table using data from ajaxFromPoloniex
    const drawTable = (data) => {
        $("#contents").empty();
        let dateArr = [];
        let highArr = [];
        let lowArr = [];
        $.each(data, function(index, data) {
            let date = myConvertDate(data.date);
            let high = data.high;
            let low = data.low;
            let vol = data.volume;

            dateArr.push(date);
            highArr.push(high);
            lowArr.push(low);
            
            let div = $("<div>").append(
                    $("<span>")
                        .attr("class",'data')
                        .text(date)
                ).append(
                    $("<span>")
                        .attr("class",'data r')
                        .text(high)
                ).append(
                    $("<span>")
                        .attr("class",'data b')
                        .text(low)
                ).append(
                    $("<span>")
                        .attr("class",'data')
                        .text(vol)
                );

            $("#contents").append(div);
        });
    }

    // load default chart
    ajaxFromPoloniex($("#from").val(), $("#to").val());
});