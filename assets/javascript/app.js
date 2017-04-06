
$(document).ready(function(){

    //  Constants for Graph
    const MEANWAGE2010 = 41673;
    const MEANWAGE2011 = 42979;
    const MEANWAGE2012 = 44321;



//College Specific Global Variables
    var schoolName= "cornell";
    var schoolState= "ny";
    var queryUrlcollege = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name="+ schoolName +
        "&school.state="+schoolState+"&api_key=1zIVU67RxYTZrzQ8G1duOprvxvObqHYuEZnHzTKA";

//Indeed Specific Global Variables
    var locationName = "brooklyn";
    var  major= "python";
    var queryUrlIndeed = "https://crossorigin.me/https://api.indeed.com/ads/apisearch?publisher=5517424191311561&q="+ major +"&l="+
        locationName+"%2C+ny&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json    ";



    console.log(queryUrlcollege);
    console.log(queryUrlIndeed);

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

// $(window).on("click", function(){
//   //$(".style").show();
//   $(".h2style").show();
//   slide();
//   myMove();
//   slide2();


//   countDown();


// });

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

    $("#submit").on("click", function(event){
        event.preventDefault();
        $(".entry").hide();
        $(".information").hide();
        $(".job").show();
        $(".college").show();
        schoolName=$("#university").val().trim();
        schoolState=$("#state").val().trim();
        console.log("schoolName");
        console.log(schoolName);
        console.log("schoolState");
        console.log(schoolState);

        $(".search").append($("#luniversity"));
        $(".search").append($("#university"));
        $(".search").append($("#lmajor"));
        $(".search").append($("#major"));
        $(".search").append($("#lstate"));
        $(".search").append($("#state"));
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



    $.ajax({
        url: queryUrlcollege,
        method: "GET"
    }).done(function collegeResponse(response1) {

        var resultsCollege = response1.results;

        $.ajax({
            url: queryUrlIndeed,
            method: "GET"

        }).done(function indeedResponse(response2) {
            var resultsIndeed = response2.results;
            console.log("resultsIndeed");
            console.log(resultsIndeed);
            console.log(response2.totalResults);



//Examples of Pertinent Object info
            console.log("College stuff");
            console.log(resultsCollege[1][1996]);
            console.log(resultsCollege[1][2012].earnings["8_yrs_after_entry"].mean_earnings);

            console.log(resultsCollege[1][1996].academics.program.degree);
            console.log(resultsCollege[1][1996].cost.attendance.academic_year);
            console.log(resultsCollege[1][1996].aid.loan_principal);
            console.log(resultsCollege[1][1996].student.retention_rate.overall.full_time);


            console.log(resultsCollege[1][1996].student.demographics);


            console.log(resultsCollege[1][1996].admissions.act_scores.midpoint);


            console.log(resultsCollege[1][1996].admissions.sat_scores.midpoint);

            console.log(resultsIndeed);
            //example iteration of value from  ***Data goes to 2014

            console.log("resultsIndeed");
            console.log(resultsCollege[1][2010].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings);
            console.log(resultsCollege[1][2011].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings);
            console.log(resultsCollege[1][2012].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings);

            var mean2012 = resultsCollege[1][2010].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings;
            var mean2013 = resultsCollege[1][2011].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings;
            var mean2014 = resultsCollege[1][2012].earnings["6_yrs_after_entry"].working_not_enrolled.mean_earnings;

            for (i = 1996; i < 2015; i++) {
                console.log(resultsCollege[1][i].aid.loan_principal);
            }


// High Charts Data
            new Highcharts.chart('graphContainer1', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Average Income of University vs National Average'
                },

                xAxis: {
                    categories: [
                        '2012',
                        '2013',
                        '2014'

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
                    data: [mean2012, mean2013,mean2014]

                }, {
                    name: 'National Average',
                    data: [MEANWAGE2010, MEANWAGE2011,MEANWAGE2012]


                }]
            });



        });


    });
});








