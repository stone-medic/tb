"use strict";if(localStorage.getItem("user")){var userNum=localStorage.getItem("user");$("#sign").css("display","none"),$("#login").css("display","none"),$("#loginUser").css("display","inline-block"),$("#loginUser>a").html(userNum)}$("#loginBtn").click(function(){window.open("./login.html")}),$("#signBtn").click(function(){window.open("./sign.html")}),$(document).scroll(function(){253<$(document).scrollTop()?($("#searchFix").css("display","block"),$("#fixBox").css("display","block")):($("#searchFix").css("display","none"),$("#fixBox").css("display","none"))});var mySwiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3}});$("#mian1_center_box1").mouseenter(function(){mySwiper.autoplay.stop(),$("#mian1_center_box1>.swiper-button-prev").css("display","block"),$("#mian1_center_box1>.swiper-button-next").css("display","block")}),$("#mian1_center_box1").mouseleave(function(){mySwiper.autoplay.start(),$("#mian1_center_box1>.swiper-button-prev").css("display","none"),$("#mian1_center_box1>.swiper-button-next").css("display","none")});var mySwiper2=new Swiper(".swiper-container2",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:1500},on:{slideChangeTransitionStart:function(){$(".mian1_box3_tit>i").html(this.realIndex+1)}}});$("#mian1_center_box3").mouseenter(function(){mySwiper2.autoplay.stop(),$("#mian1_center_box3>.swiper-button-prev").css("display","block"),$("#mian1_center_box3>.swiper-button-next").css("display","block")}),$("#mian1_center_box3").mouseleave(function(){mySwiper2.autoplay.start(),$("#mian1_center_box3>.swiper-button-prev").css("display","none"),$("#mian1_center_box3>.swiper-button-next").css("display","none")});var $tab2Fn=function(){$(this).css({border:"1px solid #ff4400","border-bottom":"none"}).siblings("span").css({border:"none","border-bottom":"1px solid #ff4400"}),$(this).siblings(".mian1_right_tab2-child").css("display","none"),$(this).next("div").css("display","block")};function main2Load(){$.ajax({url:"../json/main2-data.json",dataType:"json"}).then(function(e){var n=template("main2-item",{data:e});$(".itemBox").append(n)})}if($(".mian1_right_tab2>span").hover($tab2Fn),$(".mian1_right_tab2>div>i").click(function(){$(this).parent().css("display","none").siblings("span").css("border","none")}),main2Load(),$(".main2-more").click(function(){main2Load()}),localStorage.getItem("user")){nowTime=Date.now();formTime(endTime=1e3*localStorage.time+nowTime)}else{var nowTime,endTime;formTime(endTime=(nowTime=Date.now())+54e5)}function formTime(e){getDate(e),e+=1e3;var n=setInterval(function(){getDate(e),"0"==localStorage.time&&clearInterval(n)},1e3)}function getDate(e){var n=Date.now(),t=Math.floor((e-n)/1e3);localStorage.time=t;var i=Math.floor(t/3600),o=Math.floor(t%3600/60),a=Math.floor(t%3600%60);$(".se-txt").eq(0).html(tow(i)),$(".se-txt").eq(1).html(tow(o)),$(".se-txt").eq(2).html(tow(a))}function tow(e){return 0<=e&&e<10?"0"+e:String(e)}