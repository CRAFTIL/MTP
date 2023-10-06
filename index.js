 function appendQuestion(div, question) {  
            let wrapper = document.createElement("div")
            wrapper.className = "question-wrraper"
            
            let Qbtn = document.createElement("button")
            Qbtn.classList = "mtclickButton five"
            Qbtn.innerText = question
            
            let ansDiv = document.createElement("div")
            ansDiv.classList = "answer five"
            ansDiv.style = "display: none"
            
            wrapper.appendChild(Qbtn)
            wrapper.appendChild(ansDiv)
            
            div.appendChild(wrapper)
        
        
            }

function doThat($) {


       
        
        document.getElementsByClassName("questions-wrraper").forEach(div => appendQuestion(div, "כן או לא?"))

    /** Mtpedia Login page - show / hide eye **/
    $('.login-password input#user_pass.input').after('<span class="icon-iris_hidden"></span>');
 
    $('span.icon-iris_hidden').click(function () {
        if ($(this).hasClass('icon-iris_hidden')) {
            $(this).removeClass('icon-iris_hidden');
            $(this).addClass('icon-iris_view');
            $('.login-password input#user_pass.input').attr('type', 'text');
        } else {
          $(this).removeClass('icon-iris_view');
          $(this).addClass('icon-iris_hidden');  
          $('.login-password input#user_pass.input').attr('type','password');    
        } 
    });
        
	$('#loginform input[type="text"]').attr('placeholder', 'שם משתמש');
	$('#loginform input[type="password"]').attr('placeholder', 'סיסמה');
	
	$('#loginform label[for="user_login"]').contents().filter(function() {
		return this.nodeType === 3;
	}).remove();
	$('#loginform label[for="user_pass"]').contents().filter(function() {
		return this.nodeType === 3;
	}).remove();
	
	$('input[type="checkbox"]').click(function() {
		$(this+':checked').parent('label').css("background-position","0px -20px");
		$(this).not(':checked').parent('label').css("background-position","0px 0px");
	});      
        
        
        
        
        
        
        
    /** End Mtpedia Login page - show / hide eye **/
        
    //Mobile
    $('button.OffcanvasQuestions').click(function(){
        $('#mobile_menu').addClass('open');
            /** Reset questions **/
                $('.answer.one').text("");
                $('.answer.two').text("");
                $('.answer.three').text("");
                $('.answer.four').text("");
                $('.answer.five').text("");
                $('.questions-wrraper div.question-wrraper .answer').hide();
        
        
            /** End Reset questions **/ 
    }); 
        
    $('button.icon-iris_close-circle').click(function(){
         $('#mobile_menu').removeClass('open');
        $('.answer').removeClass("active");
    });    
        
        
    $('.mobile_trigger.menu').click(function(){
        $(this).toggleClass('close');
        $('#mobile_menu').toggleClass('open');
    });   
        
    $('ul.menu li.menu-item-has-children').click(function(){
        $('ul.sub-menu').toggleClass('show');
        
    });    

    $('ul.sections-navigation li a').on('click', function(event){
       var target = $(this.getAttribute('href'));
        if(target.length){
            event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 400)
        }
    });
    
  
        
    /** Side Navigation **/
    $('ul.sections-navigation li a').click(function() {
        $('ul.sections-navigation li a').removeClass('active');
        $(this).addClass('active');
        $('.tamarButton').removeClass('active');
            /** Reset questions **/
                $('.answer.one').text("");
                $('.answer.one').hide();
                $('.answer.two').text("");
                $('.answer.two').hide();
                $('.answer.three').text("");
                $('.answer.three').hide();
                $('.answer.four').text("");
                $('.answer.four').hide();
                $('.answer.five').text("");
                $('.answer.five').hide();
            /** End Reset questions **/        
        var $findDiv = $('.mt-content').find('.showDiv');
        $findDiv.hide();
        $('.mt-content').fadeOut(200);
    });
        

        
        
    /** End Side Navigation **/
        
        
    /** MT IN CLICK **/ 
    $('.mt-content').hide();
    $('.tamarButton').click(function(e) {
        e.preventDefault();
        $('.answer.one').text("");
        $('.answer.one').hide();
        $('.answer.two').text("");
        $('.answer.two').hide();
        $('.answer.three').text("");
        $('.answer.three').hide();
        $('.answer.four').text("");
        $('.answer.four').hide();
        $('.answer.five').text("");
        $('.answer.five').hide();
        
        
        /** Active States on tamar buttons **/
            $('.tamarButton').removeClass('active');
            if( $('.tamarButton').hasClass('active') ){
                $(this).removeClass('active');
            } else {
                $('.tamarButton').removeClass('active');
                $(this).addClass('active');  
            }
        /** End Active States on tamar buttons **/  
        
        $('.mtclick-content-wrraper .memory-box').find('h4').remove();
        var target = $(this).data('target');
        var $elem = $('#' + target);
        var random = Math.floor(Math.random() * $elem.find('.showDiv').length);
        var $randomElem = $elem.find('.showDiv').eq(random);
        $('.mt-content').fadeOut(200).promise().done(
            function(){
                $elem.find('.showDiv').hide();
                $randomElem.show();
                $elem.fadeIn(200);
            }
        ); 
    });
        
    //**Organ Button **// 
        let organ_data_set = $('.third-body-parts-topic-name');
        let organ_btn = jQuery('a#organ');
        let organ_title = $('.rand-organ-title');
        let organ_memory_box = $('.negative-frequencies .memory-box');
        let thoughts_memory_box = $('.single-thought .memory-box');
        let emotions_memory_box = $('.single-emotion .memory-box');
        let positive_frequency_memory_box = $('.single-positive-frequency-content .memory-box');
        let info_content = $('.rand-organ-info');
        let infinity_content = $('.rand-organ-infinity');
        let tapping_content = $('.rand-organ-tapping');
        $(organ_btn).on('click',function(){
            if($.trim(organ_title.html()!=="")){
                organ_title.html("");
                info_content.html("");
                infinity_content.html("");
                tapping_content.html("");
                organ_memory_box.html("");
            }
            $('.mt-content').find('.showDiv').hide();
            $('#emotions').hide();
            $('#thoughts').hide();
            $('#organ_content').fadeIn(400);
            let item = organ_data_set[Math.floor(Math.random()*organ_data_set.length)];
            let title = $(item).find('.third-topic-name');
            let primary_title = title.data('main-body-part-title');
            let second_title = $(item).closest('.third-body-parts-holder').data('second-body-part-title');
            let info_content_output = $(item).find('[data-btn-id="3"]').data('content'); // info
            let infinity_content_output = $(item).find('[data-btn-id="2"]').data('content'); // infinity
            let tapping_content_output = $(item).find('[data-btn-id="1"]').data('content'); // tapping
            organ_title.html('<h2>' + primary_title + '&nbsp;|&nbsp;' + second_title + '' + title.html() + '</h2>');
            info_content.html(info_content_output);
            infinity_content.html(infinity_content_output);
            tapping_content.html('<h2>' + primary_title + '&nbsp;|&nbsp;' + second_title + '' + title.html() + '</h2>' + 
                                 '<div class="tapping">' + '<span class="icon-iris_tapping"></span>' + tapping_content_output + '</div>');
            organ_memory_box.html('<h2>' + primary_title + '&nbsp;|&nbsp;' + second_title + '' + title.html() + '</h2>' + 
                                '<div class="tapping">' + '<span class="icon-iris_tapping"></span>' + '<p>' + tapping_content_output + '</p>' + '</div>'  );
            thoughts_memory_box.html('<h2>' + primary_title + '&nbsp;|&nbsp;' + second_title + '' + title.html() + '</h2>' + 
                                '<div class="tapping">' + '<span class="icon-iris_tapping"></span>' + '<p>' + tapping_content_output + '</p>' + '</div>'  );
            emotions_memory_box.html('<h2>' + primary_title + '&nbsp;|&nbsp;' + second_title + '' + title.html() + '</h2>' + 
                                '<div class="tapping">' + '<span class="icon-iris_tapping"></span>' + '<p>' + tapping_content_output + '</p>' + '</div>'  );
            positive_frequency_memory_box.html('<h2>' + primary_title + '&nbsp;|&nbsp;' + second_title + '' + title.html() + '</h2>' + 
                                '<div class="tapping">' + '<span class="icon-iris_tapping"></span>' + '<p>' + tapping_content_output + '</p>' + '</div>'  ); 

        });
        
        /** Yes/No Answers to questions **/
        
        var randomAnswerTamar = ["תדר","מחשבה","רגש"]
        var randomAnswer = ["כן","לא"];

        function fetchAnswer1(q){
            var answer = Math.floor(Math.random() * randomAnswerTamar.length);
            $(".answer.one").text(q[answer]);
        }
        
        $('button.mtclickButton.One').click( function(){
            fetchAnswer1(randomAnswerTamar);
            $(".answer.one").addClass("active");
            $(".answer.one").show();
            $('.answer.two').text("");
            $(".answer.two").hide();
            $(".answer.three").hide();
            $(".answer.four").hide();
            $('.answer.five').hide();
        });
        
          function fetchAnswer2(q){
            var answer = Math.floor(Math.random() * randomAnswer.length);
            $(".answer.two").text(q[answer]);
        }
        
        $('button.mtclickButton.Two').click( function(){
            fetchAnswer2(randomAnswer);
            $(".answer.two").show();
            $('.answer.one').text("");
            $(".answer.one").hide();
            $('.answer.three').text("");
            $(".answer.three").hide();
            $('.answer.four').text("");
            $(".answer.four").hide();
            $('.answer.five').text("");
            $('.answer.five').hide();
            
        }); 
        
          function fetchAnswer3(q){
            var answer = Math.floor(Math.random() * randomAnswer.length);
            $(".answer.three").text(q[answer]);
        }
        $('button.mtclickButton.Three').click( function(){
            fetchAnswer3(randomAnswer);
            $(".answer.three").show();
            $('.answer.one').text("");
            $(".answer.two").text("");
            $(".answer.four").text("");
            $(".answer.one").hide();
            $(".answer.two").hide();
            $(".answer.four").hide();
            $('.answer.five').text("");
            $('.answer.five').hide();
        }); 

          function fetchAnswer4(q){
            var answer = Math.floor(Math.random() * randomAnswer.length);
            $(".answer.four").text(q[answer]);
        }
        
        $('button.mtclickButton.four').click( function(){
            fetchAnswer4(randomAnswer);
            $(".answer.four").show();
            $('.answer.one').text("");
            $('.answer.one').hide();
            $(".answer.two").text("");
            $(".answer.two").hide();
            $(".answer.three").text("");
            $(".answer.three").hide();
            $('.answer.five').text("");
            $('.answer.five').hide();
            
        }); 

        function fetchAnswer5(q){
            var answer = Math.floor(Math.random() * randomAnswer.length);
            $(".answer.five").text(q[answer]);
        }
        
        $('button.mtclickButton.five').click( function(){
            fetchAnswer5(randomAnswer);
            $(".answer.five").show();
            $('.answer.one').text("");
            $('.answer.one').hide();
            $(".answer.two").text("");
            $(".answer.two").hide();
            $(".answer.three").text("");
            $(".answer.three").hide();
            $('.answer.four').text("");
            $('.answer.four').hide();
            
        }); 
        
   /** END MT IN CLICK **/       
        
        
        
        
        
        
   /** Accordion Body parts **/
    $('.accordion-card.header').click(function(){

        if($(this).next(".accordion-card.content").hasClass("active") && $(".accordion-card.header").hasClass("active") ){
           $(this).next(".accordion-card.content").removeClass("active").slideUp(); 
           $('.body-parts-topic-name').removeClass("active");
           $('.third-body-parts-topic-name').removeClass("active");    
           $('.third-sub-partsHolder').fadeOut();      
           $(".accordion-card.header").removeClass("active");    
        } else {
        $(".accordion-card.header").removeClass("active");      
        $(".accordion-card.content").removeClass("active").slideUp();
        $('button.mtpediaButton').removeClass("active");    
        $('.third-sub-partsHolder').fadeOut();    
        $(this).addClass("active");    
        $(this).next(".accordion-card.content").addClass("active").slideDown(); 
        $('.third-body-parts-topic-content-wrraper').empty();             
            
       }
    });   

    /** Accordion Body parts - Sub contents - Topics / Subjects **/
    $('.third-sub-partsHolder').hide();
    $('.body-parts-topic-name').removeClass("active");
    $('.body-parts-topic-name').on('click',function(){
        if( $(this).hasClass("active")  ){
            $(this).removeClass("active");
        } else {
            $('.body-parts-topic-name').removeClass("active");
            $(this).addClass("active");
            $('.third-body-parts-topic-content-wrraper').empty();
        }
        $('.third-body-parts-holder').hide();
         $('.third-sub-partsHolder').show();
       $('#bodyPartsGroup' + $(this).attr('target')).show();
    });
    
    /** Accordion Body parts - 3 Buttons - Show Text Content **/ 
    $('button.mtpediaButton').on('click', function(e){
        e.stopPropagation();
        var currentButtonId = $(this).attr('data-btn-id');
        var currentButtonContent = $(this).data('content');
        if(currentButtonId){
            if(currentButtonId == 1){
                $(this).parents().find('.third-body-parts-topic-content-wrraper').html(currentButtonContent);
                if($(this).attr('data-image')!=""){
                    let imageSrc = $(this).attr('data-image');
                    $(this).parents().find('.third-body-parts-topic-content-wrraper').append($('<div>',{class:'image-wrraper'}));
                    $(this).parents().find('.image-wrraper').append($('<img>',{class:'topic-content-image',src:imageSrc}));
                }
            } else if(currentButtonId == 2){
                $(this).parents().find('.third-body-parts-topic-content-wrraper').html(currentButtonContent);
            } else {
                $(this).parents().find('.third-body-parts-topic-content-wrraper').html(currentButtonContent);
            }
        }
    }); 
           
    $('.third-body-parts-topic-name').on('click', function(e){
        e.stopPropagation();
        if( $(this).hasClass("active") ){
            $(this).removeClass("active"); 
        } else {
            $('.third-body-parts-topic-name').removeClass("active");
            $('button.mtpediaButton').removeClass("active");
            $(this).addClass("active");
            
            var ButtonId = $('button.mtpediaButton').attr('data-btn-id');
            if(ButtonId){
                if(ButtonId == 1 ){
                        $(this).find('button.mtpediaButton:first-child').addClass("active");
                }  
            }  
        var currentButtonContent = $(this).data('content');
                $(this).parents().find('.third-body-parts-topic-content-wrraper').html(currentButtonContent);
                if($(this).attr('data-image')!=""){
                    let imageSrc = $(this).attr('data-image');
                    $(this).parents().find('.third-body-parts-topic-content-wrraper').append($('<div>',{class:'image-wrraper'}));
                    $(this).parents().find('.image-wrraper').append($('<img>',{class:'topic-content-image',src:imageSrc})); 
                }
        }
    });
        
    $('button.mtpediaButton').on('click', function(){
        if( $(this).hasClass("active") ){
            $(this).removeClass("active");
        }else{
            $('button.mtpediaButton').removeClass("active");
            $(this).addClass("active");
        }
    });     

    /** End Accordion Body parts **/
    /** End Accordion Body parts **/
    /** End Accordion Body parts **/
       
        
    /** Tabs Body parts - Mobile **/    
     $('.tabs-categorys-header .tab-category').on('click', function(e){
         e.stopPropagation();
         $(this).addClass('active');
         let actives =  $('.mtpedia .active');
         actives.each(function(index){
             $( this ).removeClass('active'); 
         }); 
         if( $('.tab-category').hasClass('active') ){
                $('.tab-category').removeClass('active');
             $(this).addClass('active');
             $('.third-sub-partsHolder').hide();
            }
         if( $('.body-parts-topic-name').hasClass('active') ){
                $('.body-parts-topic-name').removeClass('active');
             $(this).addClass('active');
            }   
         $('.gershon-content').empty();
         $('.third-body-parts-topic-content-wrraper.version-mobile').html("");
         const post_id=$(this).data('id');
         let target = $(".mtpedia>.content").find(`[data-id='${post_id}']`);
         target.parent().addClass('active');
         target.find('.secondary-sub-partsHolder').addClass('active');
     });   
    /** End Tabs Body parts - Mobile **/    
        
    if ($(window).width() < 480) {
        $('ul.mt-diagram-buttons li.desktop').remove();
        $('ul.tamarButtons li.desktop').remove();
    }

  /** Popup Modal - Tamar URL **/  
  $(".tamar-category-wrraper a.mtpediaButton.tamarButton").on('click', function(e){
      e.preventDefault(); 
      $('.popup-modal.modal-overlay').addClass('visible');
      /** AJAX **/
       var url = $(this).data('url');
       var data = '';
       data = {
           url: url,// selected category lvl 1 id
       };
      $.post( data, function(response){
          if(response){
            $('.popup-modal .inside').html(response);
           
          }
      });
  });
    

 /** Popup Modal - Diagrams **/        
$('.mtpediaButton.mtdiagrams .buttons a').click(function (e) {
    e.preventDefault(); 
    $('.popup-modal.modal-overlay').addClass('visible');
    
    var url = $(this).data('url'),
    image = new Image();
    image.src = url;
    image.onload = function () {
        $('.popup-modal.inside').empty().append(image);
    };
    image.onerror = function () {
        $('.popup-modal.inside').empty().html('That image is not available.');
    }

    $('.popup-modal.inside').empty().html('Loading...');

    return false;
});       
        
        
 $("button.popup-btn-close").on('click', function(e){
      e.preventDefault();
      $('.popup-modal.modal-overlay').removeClass('visible');
     $('.popup-modal.content .viewer').remove();
     
  }); 
                     
    

    
/** Cards **/
    $('.cards-content-wrraper .choose-card').on('click', function(e){
        e.preventDefault();
        displayCard();

    });

    
    function displayCard(){
        var cardsArray = new Array();
        var cardsArray = [
            '../wp-content/themes/gddesignBasicTheme/images/cards/1.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/2.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/3.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/4.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/5.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/6.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/7.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/8.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/9.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/10.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/11.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/12.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/13.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/14.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/15.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/16.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/17.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/18.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/19.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/20.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/21.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/22.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/23.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/24.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/25.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/26.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/27.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/28.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/29.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/30.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/31.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/32.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/33.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/34.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/35.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/36.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/37.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/38.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/39.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/40.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/41.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/42.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/43.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/44.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/45.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/46.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/47.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/48.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/49.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/50.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/51.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/52.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/53.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/54.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/55.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/56.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/57.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/58.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/59.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/60.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/61.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/62.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/63.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/64.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/65.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/66.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/67.png',
            '../wp-content/themes/gddesignBasicTheme/images/cards/68.png'

        ]
        
        var num = Math.floor(Math.random() * cardsArray.length);
        var img = cardsArray[num];
        $("#randCard").attr("src", img);
    }
     
    function resetleftCard(){
        var resetImage = document.getElementById("randCard");
        resetImage.src = "../wp-content/themes/gddesignBasicTheme/images/cards/mtpedia_back_card.png"; 
    }
    
    $('button.mtpediaCardButton.reset-card').on('click', function(){
        resetleftCard();
    });
    
    
    
    $.fn.disableSelection = function() {
        return this
        .attr('unselectable', 'on')
        .css('user-select', 'none')
        .on('selectstart', false);
    };  
    
    $(function(){
          $('body').disableSelection();
    });   

    $('p:empty').remove();

    
};

