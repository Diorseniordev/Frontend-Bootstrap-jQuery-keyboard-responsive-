$(function () {

    
    $('#message').focus(function() {
        this.blur();
    });
    $('#email_btn').hide();
    $('#email_msg').hide();

    $('#email_btn').on('click', function(){
        $('#email_msg').show();
       
    });
  
    $('#messageback').on('click', function(){
        $('#message').val("");
        myKeyboard.setInput("");
        $('#email_btn').hide();
        $('#email_msg').hide();
    });

    $('#phoneback').on('click', function(){
        $('#phone').val("");
        dialPad.setInput("");
        dialPad.setInput("__________________");
        $('#phone_btn').hide();
        $('#phone_msg').hide();

    });

    $('#phone').focus(function() {
        this.blur();
    });
    $('#phone_btn').hide();
    $('#phone_msg').hide();


    $('#phone_btn').on('click', function(){
        $('#phone_msg').show();
    });
  
    

    /*=== PHONE NUMBER KEYPAD JQUERY ===*/

    


    /*=== PHONE KEYPAD HIDE SHOW JQUERY ===*/
    
    function getPageIndex(e) {
        pages = $('.carousel-item');
        for (var i = 0; i < pages.length; i++) {
            if (e == pages[i]) {
                return i;
            }
        }
        return -1;
    }

    $('.schedule-free').click(function(e) {
        res = $(e.currentTarget).parentsUntil('.carousel-inner')[3];
        oldPage = getPageIndex(res);
        res = $('.demo-free')[3];
        $(res.firstElementChild.firstElementChild.firstElementChild).attr('data-slide-to', oldPage);
    });

    $($('.demo-info-inenr')[1]).click(function(e) {
        $($('.demo-free')[3].firstElementChild.firstElementChild.firstElementChild).attr('data-slide-to', 0);
    });
});

