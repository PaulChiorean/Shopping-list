$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//Click on X to delete an item
$("ul").on("click", "span", function(event){     
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add another item
$("input[type='text']").keypress(function(event){
    if(event.which === 13){         //enter=13
        var newItem = $(this).val();
        $(this).val("");   // clean input field after i hit enter
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newItem + "</li>")   //create new li
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()

});
