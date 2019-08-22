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

        if( $('.nav-item').hasClass('active')) {
            $('body').addClass('table-view');
        }else {
            $('body').removeClass('table-view');
        }
    });

    $('#dropdownMenuButton').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    })

    var accordion = $('.accordion'),
    opener    = $('h3'),
    slider    = $('.slide');

    if($(opener).parent().hasClass('active')){
        $('.active').find(slider).show();
    }

    $(accordion).find(opener).click(function(e){
        var $this = $(this);
        if($this.parent().hasClass('active')){
            $this.parent().removeClass('active');
            $this.next(slider).slideUp();
        }else{
            $(opener).parent().removeClass('active');
            $this.parents('ul').find(slider).slideUp();
            $this.parent().addClass('active');
            $this.next(slider).slideDown();
        }
        e.preventDefault();
    });

    //FOR MAIN TAB SUB TABS
    $('.tab-content .nav-tabs .nav-item.has-child a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('active');
    });


    $('select').niceSelect();

    //Select Table Color Class
    var table_id = $('.tab-r-items.tab-link.active').attr('data-tab');
    var split_main_table_id = table_id.split('-');
    if( split_main_table_id.length == 4 ){
        var select_color = split_main_table_id[3];
    } else{
        var select_color = split_main_table_id[2];
    }
    $('body').addClass('table-'+ select_color);

    //Custom Tab
    // $('.tabs .tab-link').click(function(){
    //     var tab_id = $(this).attr('data-tab');
    //     var active_box_tab_prev = $('#etab .tab-link.active').attr('data-tab');
    //     if( tab_id == 'ico-home-profile' || tab_id == 'ico-med-home-profile'  ){
    //         $('ul.icoTab .tab-link').removeClass('active');
    //         var tab_parent = $(this).parents('ul.icoTab').attr('data-icon-tab');
    //         $(this).addClass('active');
    //         $('.icoTabContent div#'+tab_parent).find('.custom-tab-content').removeClass('active');
    //         $('.icoTabContent div#'+tab_parent).find('div#'+tab_id).addClass('active');

    //     } else if(  tab_id == 'ico-home' || tab_id == 'ico-med-home' ){
    //         var tab_parent = $(this).parents('ul.icoTab').attr('data-icon-tab');
    //         $('ul.icoTab .has-child').removeClass('active');
    //         $('ul.icoTab .tab-link').removeClass('active');
    //         $(this).addClass('active');
    //         var active_box_tab = $('div.right-tab-items[data-tab-parent="'+tab_parent+'"]').find('.tab-link.active').attr('data-tab');
    //         $('.icoTabContent div#'+tab_parent).find('.custom-tab-content').removeClass('active');
    //         $('.icoTabContent div#'+tab_parent).find('div#'+active_box_tab).addClass('active');

    //     } else{
    //         $('ul.icoTab .tab-link').removeClass('active');
    //     }

    //     var tab_parent = $(this).parents('.right-tab-items').attr('data-tab-parent');
    //     $('div.right-tab-items[data-tab-parent="'+tab_parent+'"]').find('.tab-link').removeClass('active');
    //     $('div#'+tab_parent).find('div.custom-tab-content').removeClass('active');
    //     $('div#'+tab_parent).find('div#'+tab_id).addClass('active');
    //     $(this).addClass('active');
    //     $('ul.icoTab .has-child').removeClass('active');

    //     $('ul.icoTab[data-icon-tab="'+tab_parent+'"] span[data-tab="'+tab_parent+'"]').addClass('active');

    //     if($('.tab-link').hasClass('active')) {
    //         $(this).parent('.has-child').addClass('active');
    //     }

    //     //FOR OVAL TAB
    //     var split_main_tab_id = tab_id.split('-');
    //     if( split_main_tab_id.length == 4 ){
    //         var select_color = split_main_tab_id[3];
    //     } else{
    //         var select_color = split_main_tab_id[2];
    //     }

    //     if( select_color ){
    //         var tab_main_parent = $(this).parents('.right-tab-items').attr('data-type-name');
    //         $('.button-wrap').find('.buttons').removeClass('button-active');
    //         var find_id = tab_main_parent+'-button-'+select_color;
    //         var test = $('.button-wrap').find('div#'+find_id).addClass('button-active');
    //     }

    //     var arr = ["table-blue", "table-green", "table-orange", "table-purple", "table-maroon", "table-darkgreen"];
    //     arr = arr.join(' ');
    //     $('body').removeClass(arr);
    //     $(this).parents('body').addClass('table-'+ select_color);

    //     $('.com-table-wrapper tbody tr').removeClass('active');
    //     $('.com-table-wrapper tbody tr').each(function(){
    //         if($(this).hasClass('tr-' + select_color)){
    //             $(this).addClass('active');
    //         }
    //     });

    // });

    // $('.sub-tabs .sub-tab-link').click(function(){
    //     var tab_id = $(this).attr('data-tab');

    //     $('.sub-tabs .sub-tab-link').removeClass('active');
    //     $('.sub-tab-content').removeClass('active');

    //     $(this).addClass('active');
    //     $("#"+tab_id).addClass('active');
    // });

    // $('.sub-items .sub-nav-link').click(function(){
    //     var tab_id = $(this).attr('data-tab');
    //     $('.sub-items .sub-nav-link').removeClass('active');
    //     $(this).parent().removeClass('active');
    // });

    //Make column width 100%
    $('.nav-tabs .nav-item a').click(function(e) {
        if($(this).hasClass('col-comp-table')) {
            $('.main-tab').addClass('full-col');
        }

        if($(this).hasClass('col-comp-chart')) {
            $('.main-tab').removeClass('full-col');
        }
    });

    function tabSelected(selected) {
        if(selected == 'med') {
            $('.right-tab-items').hide();
            $('.tab-med').show();
            $('ul.icoTab').attr('data-icon-tab', 'ico-med-home');
            $('ul.icoTab').attr('data-icon-tab', 'ico-med-cdj');
            $('ul.icoTab').find('.tab-link').each(function( index ){
                var dataItem = $(this).attr('data-tab');
                var new_data_item = dataItem.replace('ico-home', 'ico-med-home');
                var new_cdj_data_item = dataItem.replace('ico-cdj', 'ico-med-cdj');
                $(this).attr('data-tab', new_data_item);
                $(this).attr('data-tab', new_cdj_data_item);
            });
            $('ul.icoTab').find('.sub-tab-link').each(function( index ){
                var dataItem = $(this).attr('data-tab');
                var new_data_item = dataItem.replace('ico-home', 'ico-med-home');
                var new_cdj_data_item = dataItem.replace('ico-cdj', 'ico-med-cdj');
                $(this).attr('data-tab', new_data_item);
                $(this).attr('data-tab', new_cdj_data_item);
            });

            $('div#etab').find('div[data-tab-parent="ico-med-home"] .tab-link').removeClass('active');
            $('div#etab').find('div[data-tab-parent="ico-med-cdj"] .tab-link').removeClass('active');
            $('div#etab').find('div[data-tab-parent="ico-med-home"] .row > div:first-child .tab-link').addClass('active');
            $('div#etab').find('div[data-tab-parent="ico-med-cdj"] .row > div:first-child .tab-link').addClass('active');

            $('.tab-med .button-wrap .buttons:first-child').addClass('button-active');

        }else {
            $('.right-tab-items').hide();
            $('.tab-moy').show();
            $('ul.icoTab').attr('data-icon-tab', 'ico-home');
            $('ul.icoTab').attr('data-icon-tab', 'ico-cdj');

            $('ul.icoTab').find('.tab-link').each(function( index ){
                var dataItem = $(this).attr('data-tab');
                var new_data_item = dataItem.replace('ico-med-home', 'ico-home');
                var new_cdj_data_item = dataItem.replace('ico-cdj', 'ico-cdj');
                $(this).attr('data-tab', new_data_item);
                $(this).attr('data-tab', new_cdj_data_item);
            });
            $('ul.icoTab').find('.sub-tab-link').each(function( index ){
                var dataItem = $(this).attr('data-tab');
                var new_data_item = dataItem.replace('ico-med-home', 'ico-home');
                var new_cdj_data_item = dataItem.replace('ico-cdj', 'ico-cdj');
                $(this).attr('data-tab', new_data_item);
                $(this).attr('data-tab', new_cdj_data_item);
            });

            $('div#etab').find('div[data-tab-parent="ico-home"] .tab-link').removeClass('active');
            $('div#etab').find('div[data-tab-parent="ico-cdj"] .tab-link').removeClass('active');
             $('div#etab').find('div[data-tab-parent="ico-home"] .row > div:first-child .tab-link').addClass('active');
             $('div#etab').find('div[data-tab-parent="ico-cdj"] .row > div:first-child .tab-link').addClass('active');
             $('.tab-moy .button-wrap .buttons:first-child').addClass('button-active');

        }
    }

    function icoTabs(selected) {
        if(selected == 'med') {
            $('.ico-tabs-content').removeClass('active');
            $('.ico-med-home').addClass('active');
            $('.ico-med-cdj').addClass('active');
            $('.ico-med-urgence').addClass('active');
            $('.ico-med-amb').addClass('active');
        }else {
            $('.ico-tabs-content').removeClass('active');
            $('.ico-home').addClass('active');
            $('.ico-cdj').addClass('active');
            $('.ico-urgence').addClass('active');
            $('.ico-amb').addClass('active');
        }
    }

    var _tabSelected = $('.custom-content-wrapper .select1 option:selected').val();
    tabSelected(_tabSelected);
    icoTabs(_tabSelected);

    $('.custom-content-wrapper .select1 li').click(function(){
        // _tabSelected = $(this).data('value');
        tabSelected(_tabSelected);
        icoTabs(_tabSelected);

        // $('.tab-r-items').removeClass('active');
        // $('.tabs .row > div:first-child .tab-link').addClass('active');
        // $('.ico-tabs-content.active .custom-tab-content:first-child').addClass('active');

        // var arr = ["table-blue", "table-green", "table-orange", "table-purple", "table-maroon", "table-darkgreen"];
        // arr = arr.join(' ');
        // $('body').removeClass(arr).addClass('table-blue');
    });

    $('.reference-lists').find('.ref-list').click(function(e){
        var $this = $(this);
        if($this.hasClass('active')){
          $this.removeClass('active');
          $this.children('.ref-dropdown').slideUp();
        }else{
          $('.ref-list').removeClass('active');
          $this.parents().find('.ref-dropdown').slideUp();
          $this.addClass('active');
          $this.children('.ref-dropdown').slideDown();
        }
    });

    $('.main-tab .check-icon').click(function(){
        var arr = ["table-blue", "table-green", "table-orange", "table-purple", "table-maroon", "table-darkgreen"];
        arr = arr.join(' ');
        $('body').removeClass(arr).addClass('table-blue');
    });

    if($('.search-list').length > 0){
        $(".search-list").mCustomScrollbar();
    }
});
