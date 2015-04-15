/**
 * Created by ashishtotla on 26-03-2015.
 */
require(["DisplayResult"], function(displayResult) {

    var totalValue= 0, cards,cardsCount=1;
    var mylatesttap;

    $('.cardsShowcase').hover(function(){
        if($(this).attr('currentlyShowing')==="back") {
            $(this).find("#onefront").css('-webkit-transform', 'rotateY(0deg)');
            $(this).find("#onefront").css('transform', 'rotateY(0deg)');
            $(this).find("#oneback").css('z-index', '-1');
            $(this).find("#oneback").css('transform', 'rotateY(-180deg)');
            $(this).find("#oneback").css('-webkit-transform', 'rotateY(-180deg)');

            $(this).attr('currentlyShowing',"front");
        }
        else{
            $(this).find("#oneback").css('-webkit-transform', 'rotateY(0deg)');
            $(this).find("#oneback").css('transform', 'rotateY(0deg)');
            $(this).find("#oneback").css('z-index', '1');

            $(this).find("#onefront").css('-webkit-transform', 'rotateY(180deg)');
            $(this).find("#onefront").css('transform', 'rotateY(180deg)');
            $(this).attr('currentlyShowing',"back");
        }
    });

    function doubletap() {
        var now = new Date().getTime();
        var timesince = now - mylatesttap;
        if((timesince < 300) && (timesince > 0)){

            mylatesttap = new Date().getTime();
            return true;

        }else{
            mylatesttap = new Date().getTime();
            return false;
        }
    }

    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers
            || 'onmsgesturechange' in window; // works on ie10
    };

    $('.cardsShowcase').bind('Doubletap',function(e){
        e.preventDefault();
        $('.cardsShowcase').hover()
    });

    $('.cardsShowcase').click(function(){
        if(!is_touch_device()) {
            $(this).css('opacity', 0.2);
            totalValue += (Number($(this).attr('value')));
            $(this).find('#onefront').prop('hidden', true);
        }
        else{
            $(this).hover();
            if(doubletap()){
                $(this).css('opacity', 0.2);
                totalValue += (Number($(this).attr('value')));
                $(this).find('#onefront').prop('hidden', true);
            }
        }
    });

    $('#deckDiv').click(function(){
        cards = setInterval(function(){
            if(cardsCount<7){
                var myCard = $('#card'+cardsCount+'Div');
                myCard.css('visibility','visible');
                myCard.css('left',$('#card'+cardsCount+'Div').attr('left'));
                myCard.css('top','50%');
                cardsCount++;
            }
            else{
                clearInterval(cards);
            }
        },1000);
    });

    $('#button').click(function(){
        displayResult.displayResult(totalValue);
        totalValue=0;
    });

});
