/**
 * Created by ashishtotla on 26-03-2015.
 */
define(function(){
    var num=0;
    return{

        displayResult : function(num){
            $('#answerDiv').css('opacity',1);
            $('#answer').text(num);
            setTimeout(function(){
                $('#answerDiv').css('opacity',0);
            },3000);
            $('.cardsShowcase').find("#onefront").prop('hidden',false);
            $('.cardsShowcase').css('opacity',1);
        }

    }

});
