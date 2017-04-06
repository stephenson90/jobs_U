
$(document).ready(function(){

    //  Constants for Graph

    const MEANWAGE2011 = 42979;
    const MEANWAGE2012 = 44321;



//College Specific Global Variables
    var schoolName= "";
    var schoolState= "";
    var queryUrlcollege = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" + schoolName +
        "&school.state=" + schoolState + "&api_key=1zIVU67RxYTZrzQ8G1duOprvxvObqHYuEZnHzTKA";

//Indeed Specific Global Variables
    var locationName = "";
    var  major= "";
    var queryUrlIndeed = "https://crossorigin.me/https://api.indeed.com/ads/apisearch?publisher=5517424191311561&q=" + major + "&l=" +
        locationName + "&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json";


    var schoolCity = "";
    // console.log(queryUrlcollege.replace(" ", "+"));
    // console.log(queryUrlIndeed);




    $(".style").css({"position":"relative", "left":"-450px"});
    $(".h2style").hide();
    $(".information").hide();
    $(".job").hide();
    $(".college").hide();
    startClock();

    function myMove() {
        var elem = document.getElementById("animate");
        var pos = 0;
        var posl = -400;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 600) {
                clearInterval(id);
            } else {
                pos++;
                posl++;
                elem.style.top = pos + 'px';
                elem.style.left = posl + 'px';
            }
        }
    }

    function slide() {
        var elem = document.getElementById("style");
        var pos = -450;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 0) {
                clearInterval(id);
            } else {
                pos++;
                //elem.style.top = 0;
                elem.style.left = pos + 'px';
            }
        }
    }

    function slide2() {
        var elem = document.getElementById("but");
        var pos = 0;
        var id = setInterval(frame, 3);
        function frame() {
            if (pos == 750) {
                clearInterval(id);
            } else {
                pos++;
                //elem.style.top = 0;
                elem.style.left = pos + 'px';
            }
        }
    }

    function startClock(){
        var clock=3;

        timeval = setInterval(downSouth, 1000);

        function downSouth(){
            clock--;

            if(clock===0){

                $(".h2style").show();
                slide();
                myMove();
                slide2();


                countDown();

            }

        }

    }
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    function countDown(){
        var clock=3;

        timeval = setInterval(downSouth, 1000);

        function downSouth(){
            clock--;

            if(clock===0){

                $(".banner").css({"height":"225px", "width":"138px"});
                $(".banner2").css({"height":"225px", "width":"138px"});
                $(".information").show();
                $(".welcome").hide();
                $(".style").animateCss("bounce");


            }

        }

    }
    function collegeAjax (schoolName, schoolState) {
        var queryUrlcollege = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" + schoolName +
            "&school.state=" + schoolState + "&api_key=1zIVU67RxYTZrzQ8G1duOprvxvObqHYuEZnHzTKA";
        queryUrlcollege = queryUrlcollege.replace(" ", "+");

        $.ajax({
            url: queryUrlcollege.replace(" ", "+"),
            method: "GET"
        }).done(function collegeResponse(response1) {

            var resultsCollege = response1.results;

            // console.log("College stuff");
            // console.log(resultsCollege[1]);
            // console.log(resultsCollege[1].school.city);
            console.log("resultsCollege[1][2012].academics");
            console.log(resultsCollege[1][2012].academics);


            console.log("resultsCollege[1][2012].cost.attendance.academic_year");
            console.log(resultsCollege[1][2012].cost.attendance.academic_year);

            console.log("resultsCollege[1][2012].aid.loan_principal");
            console.log(resultsCollege[1][2012].aid.loan_principal);

            console.log("resultsCollege[1][2012].student.retention_rate.overall.full_time");
            console.log(resultsCollege[1][2012].student.retention_rate.overall.full_time);

            console.log("resultsCollege[1][2012].admissions.sat_scores.average.overall");
            console.log(resultsCollege[1][2012].admissions.sat_scores.average.overall);

            console.log(resultsCollege[1][2011].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings);
            console.log(resultsCollege[1][2012].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings);

            //Chart 1 data

            var mean2011 = resultsCollege[1][2011].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings;
            var mean2012 = resultsCollege[1][2012].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings;
            schoolCity = resultsCollege[1].school.city;


            //Chart 2 data

            console.log(resultsCollege[1][2012].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings);
            console.log(resultsCollege[1][2012].cost.attendance.academic_year);
            var schoolCost = resultsCollege[1][2012].cost.attendance.academic_year
            var completeionRate = resultsCollege[1][2012].completion.completion_rate_4yr_150nt

            new Highcharts.chart('graphContainer2', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Average Income of University vs Tuition Cost'
                },

                xAxis: {
                    categories: [

                        'Wage and Tuition Amounts',
                        'Cost'

                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'USD'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },

                series: [{
                    name: 'University Average Wages',
                    data: [mean2012]

                }, {
                    name: 'Average Annual Cost of Tuition',
                    data: [schoolCost]


                }]
            });

            new Highcharts.chart('graphContainer1', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Average Income of University vs National Average'
                },

                xAxis: {
                    categories: [

                        '2011',
                        '2012'

                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Income (USD)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },

                series: [{

                    name: 'University Average',
                    data: [mean2011, mean2012]

                }, {
                    name: 'National Average',
                    data: [MEANWAGE2011, MEANWAGE2012]


                }]
            })

        })
    }



    function indeedAjax (major,locationName){
        queryUrlIndeed = "https://crossorigin.me/https://api.indeed.com/ads/apisearch?publisher=5517424191311561&q=" + major + "&l=" +
            locationName + "&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json    ";


        $.ajax({
            url: queryUrlIndeed,
            method: "GET"

        }).done(function indeedResponse(response2) {
            var resultsIndeed = response2.results;


            console.log("resultsIndeed");

            console.log(resultsIndeed);
            console.log(response2.totalResults);
            console.log(queryUrlIndeed.replace(" ", "+"));


        })
    }

    $("#submit").on("click", function(event){
        event.preventDefault();
        $(".entry").hide();
        $(".information").hide();
        $(".job").show();
        $(".college").show();
        schoolName=$("#university").val().trim();
        schoolState=$("#state").val().trim();
        major = $("#major").val().trim();
        locationName = $("#city").val().trim();

        console.log("schoolName");
        console.log(schoolName);
        console.log("schoolState");
        console.log(schoolState);

        collegeAjax(schoolName, schoolState);
        indeedAjax(major, locationName );


        $(".search").append($("#luniversity"));
        $(".search").append($("#university"));
        $(".search").append($("#lmajor"));
        $(".search").append($("#major"));
        $(".search").append($("#lstate"));
        $(".search").append($("#state"));
        $(".search").append($("#lcity"));
        $(".search").append($("#city"));
        $(".search").append($("#submit"));


        $("#luniversity").css({"position":"relative","left":"-160px", "top":"-3px", "font-size":"20px"});
        $("#university").css({"position":"relative", "left":"-165px", "top":"0"});
        $("#lmajor").css({"position":"relative","top":"0px", "left":"-160px","font-size":"20px"});
        $("#major").css({"position":"relative","top":"0px", "left":"-165px","font-size":"20px"});
        $("#lstate").css({"position":"relative","top":"0px", "left":"-160px","font-size":"20px"});
        $("#state").css({"position":"relative","top":"-62px", "left":"485px","font-size":"20px"});
        $("#submit").css({"position":"relative","top":"0px", "left":"0px","font-size":"20px"});
        $(".beaute").css({"height":"970px"})


    });











});








