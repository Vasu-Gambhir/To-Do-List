$("ul").on("click","li",function () {
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function (event) {
  $(this).parent().fadeOut(500, function () {
      $(this).remove();
    });

  event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        let todoText = $(this).val();
        $("ul").append(`<li><span><i class="fa-solid fa-trash-can"></i></span> ${todoText}</l1>`);
        $(this).val("");
    }
})

$(".fa-pen-to-square").click(function(){
  $("input[type=text]").fadeToggle();
})