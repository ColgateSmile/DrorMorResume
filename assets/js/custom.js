$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	
// Initialize the map
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([0, 0], 2); // Default view with zoom level 2

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Running data from CSV
    const runData = [
        {
            activity: "Road Running",
            date: "10/27/2024 8:46",
            title: "Venice Running",
            distance: "21.18 km",
            time: "1:46:40",
            pace: "5:02",
            location: [45.46546134560524, 12.277332192880266]
        },
        {
            activity: "Road Running",
            date: "4/17/2024 19:59",
            title: "Tel Aviv Night Run",
            distance: "10.02 km",
            time: "0:53:12",
            pace: "5:19",
            location: [32.108845419261684, 34.895097056518765]
        },
        {
            activity: "Road Running",
            date: "4/14/2024",
            title: "Limassol Running",
            distance: "10.07 km",
            time: "0:54:49",
            pace: "5:27",
            location: [34.67578305766915, 33.04321699052416]
        },
		{
            activity: "Road Running",
            date: "9/24/2023",
            title: "Paris Running",
            distance: "16.17 km",
            time: "1:29:15",
            pace: "5:31",
            location: [48.85978975581477, 2.2976796306310434]
        },
        {
            activity: "Trail Running",
            date: "5/19/2023",
            title: "Banana Run",
            distance: "12.00 km",
            time: "1:15:02",
            pace: "6:15",
            location: [32.648063926578, 34.96308447020911]
        },
        {
            activity: "Trail Running",
            date: "5/19/2023",
            title: "Runnymede London",
            distance: "10.37 km",
            time: "0:51:14",
            pace: "4:56",
            location: [51.48873830425911, -0.12591588991082525]
        },

		{
            activity: "Trail Running",
            date: "5/13/2022",
            title: "M2V 3/3 ",
            distance: "12.00 km",
            time: "1:38:12",
            pace: "7:48",
			location: [32.672754872942676, 35.15131726634068]
        },
		{
            activity: "Trail Running",
            date: "5/12/2022",
            title: "M2V 2/3 ",
            distance: "9.03 km",
            time: "0:57:57",
            pace: "6:25",
            location: [32.74348285408509, 35.563349349232375]
        },
		{
            activity: "Trail Running",
            date: "5/12/2022",
            title: "M2V 1/3 ",
            distance: "12.12 km",
            time: "1:11:41",
            pace: "5:55",
			location: [33.0104993633916, 35.62790438520796]
            
        },
		{
            activity: "Road Running",
            date: "9/23/2021",
            title: "Barcelona Run",
            distance: "10.07 km",
            time: "0:48:23",
            pace: "4:48",
            location: [41.400038415620685, 2.1127400967333796]
        },
		{
            activity: "Road Running",
            date: "11/2/2018",
            title: "Haifa Run",
            distance: "10.00 km",
            time: "0:44:50",
            pace: "4:29",
            location: [32.80635571603543, 34.960106872015096]
        },

        {
            activity: "Road Running",
            date: "28/02/2025",
            title: "Tel-Aviv Marathon",
            distance: "21.11 km",
            time: "01:45:41",
            pace: "05:00",
            location: [32.10062552066394, 34.807773948359824]
        },
        // Add additional data points here...
    ];

    // Add markers to the map
    runData.forEach(run => {
        const marker = L.marker(run.location).addTo(map);
        marker.bindPopup(`
            <div style="font-family: 'Arial', sans-serif; font-size: 16px; line-height: 1.6;">
                <h4 style="margin: 0; color: #007bff;">${run.title}</h4>
                <p style="margin: 5px 0;">
                    <strong>Activity:</strong> ${run.activity}<br>
                    <strong>Date:</strong> ${run.date}<br>
                    <strong>Distance:</strong> ${run.distance}<br>
                    <strong>Time:</strong> ${run.time}<br>
                    <strong>Pace:</strong> ${run.pace}
                </p>
            </div>
        `);
    });

 
    
	

    // Fit map bounds to include all markers
    const bounds = runData.map(run => run.location);
    map.fitBounds(bounds);
});

