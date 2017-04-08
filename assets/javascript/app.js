
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
        var posl = -300;
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
        var clock=2;

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
            var cost=resultsCollege[1][2012].cost.attendance.academic_year;
            var retention= resultsCollege[1][2012].student.retention_rate.overall.full_time;
            var loan= resultsCollege[1][2012].aid.loan_principal;
            var sat= resultsCollege[1][2012].admissions.sat_scores.average.overall;
            var collegediv =  $("<div class=item2>");

            if (cost=== null)
            {
                cost= "data not available";

            }
            else{
                cost=cost;
            }


            if (loan=== null)
            {
                loan= "data not available";
            }
            else{
                loan=loan;
            }


            if (retention=== null)
            {
                retention= "data not available";
            }
            else
            {
                retention=retention;
            }


            if (sat===null)
            {
                sat= "data not available";

            }
            else
            {
                sat=sat;
            }

            var p3 = $("<p class=item3>").text("The cost of attendance is:" +" $"+ cost);
            var p4 = $("<p class=item3>").text("The student retention rate is:" + " "+ retention);
            var p5 = $("<p class=item4>").text("The Aid loan principal is:" + " $"+ loan);
            var p6 = $("<p class=item4>").text("The average admissions SAT scores is:" + " "+ sat);

            collegediv.append(p3);
            collegediv.append(p4);
            collegediv.append(p5);
            collegediv.append(p6);

            $(".college").append(collegediv);
            $(".item2").css({"position":"relative", "top":"-200px", "font-size":"25px", "font-weight":"bold"});
            $(".item4").css({"position":"relative", "top":"0px", "left":"5px","font-size":"25px", "font-weight":"bold", "text-align":"left"});

            $(".item3").css({"position":"relative", "top":"0px", "left":"-370px","font-size":"25px", "font-weight":"bold", "text-align":"left"});


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
            locationName + "&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json";


        $.ajax({
            url: queryUrlIndeed,
            method: "GET"

        }).done(function indeedResponse(response2) {
            var resultsIndeed = response2.results;


            console.log("resultsIndeed");

            console.log(resultsIndeed);
            console.log(response2.totalResults);
            console.log(queryUrlIndeed.replace(" ", "+"));
            for (var i= 0; i<10; i++)
            {

                var jobsdiv =  $("<div class=item panel-default>");
                var job_snippet = resultsIndeed[i].snippet;
                var job_jobtitle = resultsIndeed[i].jobtitle;
                var p1 = $("<p>").text(resultsIndeed[i].snippet);
                var link = resultsIndeed[i].url;
                var job_link = $("<a href="+ link + ">" + job_jobtitle + "</a>");
                job_link.css({"font-size":"20px", "font-weight":"bold"})

                jobsdiv.append(job_link);
                jobsdiv.append(p1);
                $(".job").css({"overflow":"scroll"});
                $(".item").css({"margin":"10px"})
                $(".job").append(jobsdiv);

            }

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


        $("#luniversity").css({"position":"relative","left":"-25px", "top":"5px", "font-size":"20px"});
        $("#university").css({"position":"relative", "left":"-30px", "top":"-1px"});
        $("#lmajor").css({"position":"relative","top":"0px", "left":"-33px","font-size":"20px"});
        $("#major").css({"position":"relative","top":"0px", "left":"-35px","font-size":"20px"});
        $("#lstate").css({"position":"relative","top":"0px", "left":"-35px","font-size":"20px"});
        $("#state").css({"position":"relative","top":"-3px", "left":"-38px","font-size":"20px"});
        $("#lcity").css({"position":"relative","top":"0px", "left":"-38px","font-size":"20px"});
        $("#city").css({"position":"relative","top":"-3px", "left":"-38px","font-size":"20px"});
        $("#submit").css({"position":"relative","top":"0px", "left":"-10px","font-size":"30px"});
        $(".beaute").css({"height":"970px", "width":"1450px"})


    });











});








