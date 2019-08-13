$(document).ready(function(){

$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.wrapper').toggleClass('active');
    });



    $('.form-login .form-group > input').on('focus', function(e) {
        $(this).parent().addClass('active');
    }).on('blur', function(e) {

    if ($(this).val() == ""){

        $(this).parent().removeClass('active');
    }
    });


    //Removing active class on table icon parent while not active
    $('.nav-item').click(function() {
        $(this).next('.has-child').removeClass('active');
    });



    /*for active class on menu items*/
    // $('nav li > a').on('click', function(e) {
    //     $(this).parent().addClass('active');
    // });

    //for right tab click tab
    // $('.tab-r-items').on('click', function(e) {
    //     $('.tab-r-items').removeClass('active');
    //     $(this).addClass('active');
    // });

    //FOR MAIN TAB SUB TABS
       $('.tab-content .nav-tabs .nav-item.has-child a').on('click', function(e) {
         e.preventDefault();
        $(this).parent().addClass('active');
    });


    $('select').niceSelect();

    /*(function() {
        var tabContentBlue = $('.tab-content-blue');
        var tabContentGreen = $('.tab-content-green');
        var tabContentPurple = $('.tab-content-purple');
        var tabContentOrange = $('.tab-content-orange');
        var tabContentMaroon = $('.tab-content-maroon');
        var tabContentDarkGreen = $('.tab-content-darkgreen');

        // Right etab selectors
        var quebecBlueTab = $('#quebec-blue');
        var quebecGreenTab = $('#quebec-green');
        var quebecPurpleTab = $('#quebec-purple');
        var quebecOrangeTab = $('#quebec-orange');
        var quebecMaroonTab = $('#quebec-maroon');
        var quebecDarkGreenTab = $('#quebec-darkgreen');

        // Left tab click
        quebecBlueTab.click(function() {
            toggleMainTabs('blue');
        });

        quebecGreenTab.click(function() {
            toggleMainTabs('green');
        });

        quebecPurpleTab.click(function() {
            toggleMainTabs('purple');
        });

        quebecOrangeTab.click(function() {
            toggleMainTabs('orange');
        });

        quebecMaroonTab.click(function() {
            toggleMainTabs('maroon');
        });

        quebecDarkGreenTab.click(function() {
            toggleMainTabs('d-green');
        });

        // Toggle hide and display of left tabs
        function toggleMainTabs(tab) {
            switch(tab) {
                case 'blue':
                    tabContentBlue.addClass('show active');
                    tabContentBlue.css('display', 'block');

                    // hide all
                    tabContentGreen.css('display', 'none');
                    tabContentPurple.css('display', 'none');
                    tabContentOrange.css('display', 'none');
                    tabContentMaroon.css('display', 'none');
                    tabContentDarkGreen.css('display', 'none');
                    break;
                case 'green':
                    tabContentGreen.addClass('show active');
                    tabContentGreen.css('display', 'block');

                    // hide all
                    tabContentBlue.css('display', 'none');
                    tabContentPurple.css('display', 'none');
                    tabContentOrange.css('display', 'none');
                    tabContentMaroon.css('display', 'none');
                    tabContentDarkGreen.css('display', 'none');
                    break;

                case 'purple':
                    tabContentPurple.addClass('show active');
                    tabContentPurple.css('display', 'block');

                    // hide all
                    tabContentBlue.css('display', 'none');
                    tabContentGreen.css('display', 'none');
                    tabContentOrange.css('display', 'none');
                    tabContentMaroon.css('display', 'none');
                    tabContentDarkGreen.css('display', 'none');
                    break;

                case 'orange':
                    tabContentOrange.addClass('show active');
                    tabContentOrange.css('display', 'block');

                    // hide all
                    tabContentBlue.css('display', 'none');
                    tabContentGreen.css('display', 'none');
                    tabContentPurple.css('display', 'none');
                    tabContentMaroon.css('display', 'none');
                    tabContentDarkGreen.css('display', 'none');
                    break;

                case 'maroon':
                    tabContentMaroon.addClass('show active');
                    tabContentMaroon.css('display', 'block');

                    // hide all
                    tabContentBlue.css('display', 'none');
                    tabContentGreen.css('display', 'none');
                    tabContentPurple.css('display', 'none');
                    tabContentOrange.css('display', 'none');
                    tabContentDarkGreen.css('display', 'none');
                    break;

                case 'd-green':
                    tabContentDarkGreen.addClass('show active');
                    tabContentDarkGreen.css('display', 'block');

                    // hide all
                    tabContentBlue.css('display', 'none');
                    tabContentGreen.css('display', 'none');
                    tabContentPurple.css('display', 'none');
                    tabContentOrange.css('display', 'none');
                    tabContentMaroon.css('display', 'none');
                    break;
            }
        }
    })();*/

    $('.tabs .tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');
        console.log(tab_id);
         var active_box_tab_prev = $('#etab .tab-link.active').attr('data-tab');


        $('ul#icoTab').find('span.tab-link').removeClass('active');
        $('ul#icoTab').find('li.has-child').removeClass('active');

        if( tab_id =='icoprofile' ){
            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
            $(this).parent('.has-child').addClass('active');
            $('div.ico-tabs-content').removeClass('active');
            $('div.ico-tabs-content .custom-tab-content').removeClass('active');
            $('div.tab-content').find('#'+tab_id).addClass('active');
        } else{
            $('.tabs .tab-link').removeClass('active');
            $('.custom-tab-content').removeClass('active');
            $('.ico-tabs-content').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
            $(this).parent('.has-child').addClass('active');

            if($("#"+tab_id).hasClass('active')) {
                $("#"+tab_id).parents('.ico-tabs-content').addClass('active');
            }

            //$('#etab .tabs').find('.tab-link[data-tab="'+active_box_tab+'"]').addClass('active');

            var str1 = tab_id;
            var str2 = 'icohome';
            if(str1.indexOf(str2) != -1){
                $('span[data-tab="icohome"]').addClass('active');

                var active_box_tab = $('#etab .tab-link.active').attr('data-tab');
            } else{
                $('span[data-tab="icohome"]').removeClass('active');
            }
        }
        if( tab_id =='icohome' ){
            if ( active_box_tab == null ){
                //active_box_tab_prev
                $('#etab .tabs').find('.tab-link[data-tab="'+active_box_tab_prev+'"]').addClass('active');
                $('#ico-home').addClass('active');
                $('#ico-home #'+active_box_tab_prev).addClass('active');
            }
        }
    });

    $('.sub-tabs .sub-tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.sub-tabs .sub-tab-link').removeClass('active');
        $('.sub-tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    $('.sub-items .sub-tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.sub-items .sub-tab-link').removeClass('active');
        $('.ico-tabs-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    function tabSelected(selected) {
        if(selected == 'med') {
            $('.right-tab-items').hide();
            $('.tab-med').show();
        }else {
            $('.right-tab-items').hide();
            $('.tab-moy').show();
        }
    }

    function icoTabs(selected) {
        if(selected == 'med') {
            $('.ico-tabs-content').removeClass('active');
            $('.ico-med-home').addClass('active');
        }else {
            $('.ico-tabs-content').removeClass('active');
            $('.ico-home').addClass('active');
        }
    }


    var _tabSelected = $('.custom-content-wrapper .select1 .selected').data('value');
    tabSelected(_tabSelected);
    icoTabs(_tabSelected);

    $('.custom-content-wrapper .select1 li').click(function(){
        _tabSelected = $(this).data('value');
        tabSelected(_tabSelected);
        icoTabs(_tabSelected);

        $('.tabs .row > div:first-child .tab-link').addClass('active');
        $('.ico-tabs-content.active .custom-tab-content:first-child').addClass('active');
    });
});
