
$(function(){
    $(".tab_nav li").click(function(e){
        e.preventDefault();

        target = $(this).children('a').attr('href');
        console.log(target);

        $(".tab_nav li").removeClass("on")
        $(this).addClass('on')

        $(".con").removeClass("show")
        $(target).addClass('show')

    })
        

    $(".tab_menu a").click(function(e){
        e.preventDefault();

        if($(this).siblings('.cont').height() > 0){
            //만약 .tab_menu a의 형제인 .cont의 높이가 0보다 크다면
            $('.cont').stop().animate({height:0},300)
            $('.tab_menu').removeClass('on')
             //.cont의 높이를 0, 0.3초동안
        }else{ //만약 아니라면
            $('.tab_menu').removeClass('on')
            $('.cont').stop().animate({height:0},300) //일단 한번 0으로 만들고 
            $(this).parent('.tab_menu').addClass('on')
            $(this).siblings('.cont').stop().animate({height:200},300) //h 200 0.3초동안
        }
    })

    //shift tab 이벤트 쉬프트 탭으로 마지막 a를 빠져나가면 슬라이드가 닫힌다
    $('.cont ul li:last-child a').keydown(function(e){
      var v_keyCode = event.keyCode || event.which;
      if(v_keyCode == 9){
          if(!event.shiftKey){
              $('.cont').stop().animate({height:0},300)
          }
      }
  })
  $('.cont ul li:first-child a').keydown(function(e){
      var v_keyCode = event.keyCode || event.which;
      if(v_keyCode == 9){
          if(event.shiftKey){
              $('.cont').stop().animate({height:200})
          }
      }
  })


    //banner_slider
    //넘버링 페이지네이션 만들기
  $(".banner_slider1").on('init',function(event, slick){
    $(this).append('<div class="slick-counter"><span class="current-num1"></span> / <span class="total-num"></span></div>')
    $(this).append('<div class="line_box"><span class="line"></span></div>')
    $(".current-num1").text(slick.currentSlide + 1);
    $(".total-num").text(slick.slideCount);
    // alert("ss");
  })
  //슬라이더 활성화 + prec / next 버튼
  $('.banner_slider1').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed : 3000,
    prevArrow: $('.control_box_prev'), 
    nextArrow: $('.control_box_next')
    /* prevArrow : "<div class='control_box control_box_prev'><div class='banner-prev'><span class='blind'>이전 슬라이드</span></div></div>",		// 이전 화살표 모양 설정
		nextArrow : "<div class='control_box control_box_next'><div class='banner-next'><span class='blind'>다음 슬라이드</span></div></div>", */
  });
  $(".banner_slider1").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".current-num1").text(nextSlide + 1);
  })

  $(".banner_slider2").on('init',function(event, slick){
    $(this).append('<div class="slick-counter"><span class="current-num2"></span> / <span class="total-num"></span></div>')
    $(this).append('<div class="line_box"><span class="line"></span></div>')
    $(".current-num2").text(slick.currentSlide + 1);
    $(".total-num").text(slick.slideCount);
    // alert("ss");
  })
  //슬라이더 활성화 + prec / next 버튼
  $('.banner_slider2').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed : 3000,
    prevArrow: $('.control_box_prev2'), 
    nextArrow: $('.control_box_next2')
    // prevArrow : "<div class='control_box control_box_prev'><div class='banner-prev'><span class='blind'>이전 슬라이드</span></div></div>",		// 이전 화살표 모양 설정
		// nextArrow : "<div class='control_box control_box_next'><div class='banner-next'><span class='blind'>다음 슬라이드</span></div></div>",
  });
  $(".banner_slider2").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".current-num2").text(nextSlide + 1);
  })



  //play / stop 버튼 만들기
  $(".con_btn.stop").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active")
      $(this).siblings(".con_btn.play").addClass("active")
    }
  })
  $(".con_btn.play").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active")
      $(this).siblings(".con_btn.stop").addClass("active")
    }
  })
  //버튼 실행
  $('.con_btn.play').click(function(){
    $(this).parent().siblings('.banner_slider').slick('slickPlay');
  });
  $('.con_btn.stop').click(function(){
    $(this).parent().siblings('.banner_slider').slick('slickPause');
  });






  //bottom_slider
  //넘버링 페이지네이션 만들기
  $(".bottom_slider").on('init',function(event, slick){
    $(this).append('<div class="bottom-counter"><span class="bottom-num"></span> / <span class="bt-total-num"></span></div>')
    $(".bottom-num").text(slick.currentSlide + 1);
    $(".bt-total-num").text(slick.slideCount);
    // alert("ss");
  })



  $('.bottom_slider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed : 1000,
    slidesToShow: 3,
    prevArrow: $('.bt_control_box_prev'), 
    nextArrow: $('.bt_control_box_next')
    /* prevArrow : "<div class='bt_control_box bt_control_box_prev'><div class='bottom-prev'><span class='blind'>이전 슬라이드</span></div></div>",		// 이전 화살표 모양 설정
		nextArrow : "<div class='bt_control_box bt_control_box_next'><div class='bottom-next'><span class='blind'>다음 슬라이드</span></div></div>", */
  });
  $(".bottom_slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".bottom-num").text(nextSlide + 1);
  })





  //play / stop 버튼 만들기
  $(".bt_con_btn.stop").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active")
      $(".bt_con_btn.play").addClass("active")
    }
  })
  $(".bt_con_btn.play").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active")
      $(".bt_con_btn.stop").addClass("active")
    }
  })
  //버튼 실행
  $('.bt_con_btn.play').click(function(){
    $('.bottom_slider').slick('slickPlay');
  });
  $('.bt_con_btn.stop').click(function(){
    $('.bottom_slider').slick('slickPause');
  });




})
