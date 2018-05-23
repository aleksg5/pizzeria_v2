$(document).ready(function(){
    // Header
    if($(document).width() > 768){
        if($(document).scrollTop()>80){
            $("#header").css({
                "background" : "#181a1c",
                "box-shadow" : "0px 2px 5px 0px rgba(0,0,0,0.75)"
            });
                $("#toTop").css("display", "block");
        }else{
            $("#header").css({
                "background" : "transparent",
                "box-shadow" : "none"
            });
                $("#toTop").css("display", "none");
        }
    }
        $(document).scroll(function(){
            if($(document).width() > 768){
                if($(document).scrollTop()>80){
                    $("#header").css({
                        "background" : "#181a1c",
                        "box-shadow" : "0px 2px 5px 0px rgba(0,0,0,0.75)"
                    });
                        $("#toTop").css("display", "block");
                }else{
                    $("#header").css({
                        "background" : "transparent",
                        "box-shadow" : "none"
                    });
                        $("#toTop").css("display", "none");
                }
            }
        });

    $("#header a, #toTop a, #slider-content .container a").click(function(){
        var link = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(link).offset().top-79 
        }, 1000);
    });

    // Slider
    if($(document).width() > 768){
        $("#slider").mouseover(function(){
            $("#slider-arrows").show(300);
        });
        $("#slider").mouseleave(function(){
            $("#slider-arrows").hide(300);
        });
    }else{
        $("#slider-arrows").show(300);
        
    }
    $("#button-nav").click(function(){
        $("#nav-xs").slideToggle("slow");
        
    });
    // Tablica slajdów
    var slides = [];

    $.getJSON("includes/slider.json", function(data){
        var slide = 0;
        slides.push(data);
        $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
        $("#slider-content .container").append("<h1>"+slides[0][slide].header+"</h1>");
        $("#slider-content .container").append("<p>"+slides[0][slide].description+"</p>");
        $("#slider-content .container").append("<a href='"+slides[0][slide].link+"'>"+slides[0][slide].linkDescription+"</a>");

        
        var slider = setInterval(function(){
            if(slide < 2){
                slide++;
                $("#slider-circles i:nth-child("+(slide)+")").removeClass("fas");
                $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
            }else{
                $("#slider-circles i:nth-child("+(slide+1)+")").removeClass("fas");
                slide = 0;
                $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
            }
            $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
            $("#slider-content .container h1").html(slides[0][slide].header);
            $("#slider-content .container p").html(slides[0][slide].description);
            $("#slider-content .container a").html(slides[0][slide].linkDescription);
            $("#slider-content .container a").attr("href", slides[0][slide].link);
        }, 5000);

        $("#slider-arrows .fa-angle-left").click(function(){
            clearInterval(slider);
            slider = setInterval(function(){
                if(slide < 2){
                    slide++;
                    $("#slider-circles i:nth-child("+(slide)+")").removeClass("fas");
                    $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
                }else{
                    $("#slider-circles i:nth-child("+(slide+1)+")").removeClass("fas");
                    slide = 0;
                    $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
                }
                $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
                $("#slider-content .container h1").html(slides[0][slide].header);
                $("#slider-content .container p").html(slides[0][slide].description);
                $("#slider-content .container a").html(slides[0][slide].linkDescription);
                $("#slider-content .container a").attr("href", slides[0][slide].link);
            }, 5000);

            if(slide == 0){
                slide = 2;
                $("#slider-circles i:nth-child(1)").removeClass("fas");
                $("#slider-circles i:nth-child(3)").addClass("fas");
            }else{
                console.log(slide);
                $("#slider-circles i:nth-child("+(slide+1)+")").removeClass("fas");
                slide--;
                $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
            }
            $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
            
            $("#slider-content .container h1").html(slides[0][slide].header);
            $("#slider-content .container p").html(slides[0][slide].description);
            $("#slider-content .container a").html(slides[0][slide].linkDescription);
            $("#slider-content .container a").attr("href", slides[0][slide].link);
        });
        $("#slider-arrows .fa-angle-right").click(function(){
            clearInterval(slider);
            slider = setInterval(function(){
                if(slide < 2){
                    slide++;
                    $("#slider-circles i:nth-child("+(slide)+")").removeClass("fas");
                    $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
                }else{
                    
                    $("#slider-circles i:nth-child("+(slide+1)+")").removeClass("fas");
                    slide = 0;
                    $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
                }
                $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
                $("#slider-content .container h1").html(slides[0][slide].header);
                $("#slider-content .container p").html(slides[0][slide].description);
                $("#slider-content .container a").html(slides[0][slide].linkDescription);
                $("#slider-content .container a").attr("href", slides[0][slide].link);
            }, 5000);

            if(slide == 2){
                slide = 0;
                $("#slider-circles i:nth-child(3)").removeClass("fas");
                $("#slider-circles i:nth-child(1)").addClass("fas");
            }else{
                $("#slider-circles i:nth-child("+(slide+1)+")").removeClass("fas");
                slide++;
                $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
            }
            $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
            $("#slider-content .container h1").html(slides[0][slide].header);
            $("#slider-content .container p").html(slides[0][slide].description);
            $("#slider-content .container a").html(slides[0][slide].linkDescription);
            $("#slider-content .container a").attr("href", slides[0][slide].link);
        });
        $("#slider-circles i").click(function(e){
            $("#slider-image").css("background", "url('img/"+slides[0][e.target.id-1].img+"')");
            $("#slider-content .container h1").html(slides[0][e.target.id-1].header);
            $("#slider-content .container p").html(slides[0][e.target.id-1].description);
            $("#slider-content .container a").html(slides[0][e.target.id-1].linkDescription);
            $("#slider-content .container a").attr("href", slides[0][e.target.id-1].link);
            $("#slider-circles i").removeClass("fas");
            $(this).addClass("fas");
            slide = e.target.id-1;
            
            clearInterval(slider);
            slider = setInterval(function(){
                if(slide < 2){
                    slide++;
                    $("#slider-circles i:nth-child("+(slide)+")").removeClass("fas");
                    $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
                }else{
                    
                    $("#slider-circles i:nth-child("+(slide+1)+")").removeClass("fas");
                    slide = 0;
                    $("#slider-circles i:nth-child("+(slide+1)+")").addClass("fas");
                }
                $("#slider-image").css("background", "url('img/"+slides[0][slide].img+"')");
                $("#slider-content .container h1").html(slides[0][slide].header);
                $("#slider-content .container p").html(slides[0][slide].description);
                $("#slider-content .container a").html(slides[0][slide].linkDescription);
                $("#slider-content .container a").attr("href", slides[0][slide].link);
            }, 5000);
        });
        $("#slider-content .container a").click(function(){
            var link = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(link).offset().top-80 
            }, 1000);
        });
    });   
    
    //Menu
    var menu = [];
    $.get("includes/menu.json", function(data){
        menu.push(data); 
        $.each(menu[0][0].pizza, function(index, value){
            $('#menu .category-menu ul').append("<li><div class='category-menu-name'><h3>"+value.name+"</h3><p>"+value.ingredients+"</p></div><div class='category-menu-price'><b>"+value.price+"</b></div></li>");
            
        });
        var menuHeight = $(".category-menu").height();
        var ulHeight = $(".category-menu ul").height();
        if(ulHeight > menuHeight){
            var ps = new PerfectScrollbar('.category-menu');
        }
        $(".category-menu").scrollTop(0);

        $("#menu-nav a[href$='#pizza']").click(function(){
            $("#menu .category-menu ul").empty();
            $.each(menu[0][0].pizza, function(index, value){
                $('#menu .category-menu ul').append("<li><div class='category-menu-name'><h3>"+value.name+"</h3><p>"+value.ingredients+"</p></div><div class='category-menu-price'><b>"+value.price+"</b></div></li>");
            });
            $(".ps__thumb-y").css("top", 0);
            var ulScroll = $(".category-menu").scrollTop();
            if(ulScroll > 0){
                $(".category-menu").scrollTop(0);
            }
            var ulHeight = $(".category-menu ul").height();
            if(ulHeight > menuHeight){
                $(".category-menu").addClass("ps ps--active-y");
            }else{
                $(".category-menu").removeClass("ps ps--active-y");
            }
        });
        $("#menu-nav a[href$='#dodatki']").click(function(){
            $("#menu .category-menu ul").empty();
            $.each(menu[0][0].dodatki, function(index, value){
                $('#menu .category-menu ul').append("<li><div class='category-menu-name'><h3>"+value.name+"</h3><p>"+value.ingredients+"</p></div><div class='category-menu-price'><b>"+value.price+"</b></div></li>");
            });
            $(".ps__thumb-y").css("top", 0);
            var ulScroll = $(".category-menu").scrollTop();
            if(ulScroll > 0){
                $(".category-menu").scrollTop(0); 
            }
            var ulHeight = $(".category-menu ul").height();
            if(ulHeight > menuHeight){
                $(".category-menu").addClass("ps ps--active-y");;
            }else{
                $(".category-menu").removeClass("ps ps--active-y");
            }
        });
        $("#menu-nav a[href$='#salatki']").click(function(){
            $("#menu .category-menu ul").empty();
            $.each(menu[0][0].salatki, function(index, value){
                $('#menu .category-menu ul').append("<li><div class='category-menu-name'><h3>"+value.name+"</h3><p>"+value.ingredients+"</p></div><div class='category-menu-price'><b>"+value.price+"</b></div></li>");
            });
            $(".ps__thumb-y").css("top", 0);
            var ulScroll = $(".category-menu").scrollTop();
            if(ulScroll > 0){
                $(".category-menu").scrollTop(0);
                
            }
            var ulHeight = $(".category-menu ul").height();
            if(ulHeight > menuHeight){
                $(".category-menu").addClass("ps ps--active-y");
            }else{
                $(".category-menu").removeClass("ps ps--active-y");
            }
        });
        $("#menu-nav a[href$='#makarony']").click(function(){
            $("#menu .category-menu ul").empty();
            $.each(menu[0][0].makarony, function(index, value){
                $('#menu .category-menu ul').append("<li><div class='category-menu-name'><h3>"+value.name+"</h3><p>"+value.ingredients+"</p></div><div class='category-menu-price'><b>"+value.price+"</b></div></li>");
            });
            $(".ps__thumb-y").css("top", 0);
            var ulScroll = $(".category-menu").scrollTop();
            if(ulScroll > 0){
                $(".category-menu").scrollTop(0);
                
            }
            var ulHeight = $(".category-menu ul").height();
            if(ulHeight > menuHeight){
                $(".category-menu").addClass("ps ps--active-y");
            }else{
                $(".category-menu").removeClass("ps ps--active-y");
            }
        });
        $("#menu-nav a[href$='#napoje']").click(function(){
            $("#menu .category-menu ul").empty();
            $.each(menu[0][0].napoje, function(index, value){
                $('#menu .category-menu ul').append("<li><div class='category-menu-name'><h3>"+value.name+"</h3><p>"+value.capacity+"</p></div><div class='category-menu-price'><b>"+value.price+"</b></div></li>");
            });
            $(".ps__thumb-y").css("top", 0);
            var ulScroll = $(".category-menu").scrollTop();
            if(ulScroll > 0){
                $(".category-menu").scrollTop(0);  
            }
            var ulHeight = $(".category-menu ul").height();
            if(ulHeight > menuHeight){
                $(".category-menu").addClass("ps ps--active-y");
            }else{
                $(".category-menu").removeClass("ps ps--active-y");
            }
        });
    });

    //Offers
    var offers = [];
    $.get("includes/offers.json", function(data){
        offers.push(data);
        $.each(offers[0], function(index, value){
            $("#offers .container").append("<div class='offer"+index+"'></div>");
            $("#offers .container .offer"+index).append("<img src='"+value.img+"'></img>");
            $("#offers .container .offer"+index).append("<h3>"+value.title+"</h3>");
            $("#offers .container .offer"+index).append("<p>"+value.description+"</p>");
        });
    });
    
    //Gallery
    $("#gallery-content img").click(function(event){
        var overlay = $("<div class='zoomOverlay'></div>").hide();
        var arrows = $("<div class='zoomArrows'><i class='fas fa-angle-left'></i><i class='fas fa-angle-right'></i></div>").hide();
        var zoomImg = $("<div class='zoomImg'><i class='fas fa-times'></i><img src='"+$(this).attr('src')+"'></img><div>").hide();
        
        $("body").append(overlay);
        $("#gallery").append(zoomImg);
        $('.zoomImg').append(arrows);
        overlay.fadeIn("slow");
        zoomImg.fadeIn("slow");
        console.log($(this).position().top);
        if($(document).width() < 768){
            $(".zoomImg").css({
                top: $(this).position().top
            });
        }
        $("body").keydown(function(e){
            if($(".zoomImg img").is(":visible")){
                var index = parseInt($(".zoomImg img").attr("src")[12]);
                if(e.which == "37"){
                    if(index != 1){
                        $(".zoomImg img").attr("src", "img/gallery/"+(index-1)+".jpg");
                    }else{
                        $(".zoomImg img").attr("src", "img/gallery/8.jpg");
                    }
                }else if(e.which == "39"){
                    if(index != 8){
                        $(".zoomImg img").attr("src", "img/gallery/"+(index+1)+".jpg");
                    }else{
                        $(".zoomImg img").attr("src", "img/gallery/1.jpg");
                    }
                }
            }   
        });
        
        if($(".zoomImg img").is(":visible")){
            if($(document).width() > 768){
                $(".zoomImg").mouseover(function(){
                    $(".zoomArrows").fadeIn("slow");
                });
                $(".zoomImg").mouseleave(function(){
                    $(".zoomArrows").fadeOut("slow");
                });
            }else{
                $(".zoomArrows").fadeIn("slow");
            }
            $(".zoomArrows .fa-angle-left").click(function(){
                var index = parseInt($(".zoomImg img").attr("src")[12]);
                if(index != 1){
                    $(".zoomImg img").attr("src", "img/gallery/"+(index-1)+".jpg");
                }else{
                    $(".zoomImg img").attr("src", "img/gallery/8.jpg");
                }
            });
            $(".zoomArrows .fa-angle-right").click(function(){
                var index = parseInt($(".zoomImg img").attr("src")[12]);
                if(index != 8){
                    $(".zoomImg img").attr("src", "img/gallery/"+(index+1)+".jpg");
                }else{
                    $(".zoomImg img").attr("src", "img/gallery/1.jpg");
                }
            });  
            $(".overlay").click(function(){
                overlay.fadeOut("slow");
                zoomImg.fadeOut("slow");
            });
        }
        $(".zoomImg .fa-times").click(function(){
            overlay.fadeOut("slow");
            zoomImg.fadeOut("slow");
        });
    });

   
    
    // Contact
    var contact = [];

});