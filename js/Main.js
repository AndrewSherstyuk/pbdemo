
$("[data-info]").on("mouseover", function(){
    $($(this).data("info")).addClass("active");
});
$("[data-info]").on("mouseout", function(){
    $($(this).data("info")).removeClass("active");
});