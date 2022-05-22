$('#show-more-filter .btn').on("click", function () {
    $('.more-filter').removeClass('d-none');
    $(".home-filter-area .filter-content-area .filter-item").not(".first-items").css("width", "25%");
});

$("#searchButton").click(function () {
    $('.more-filter').addClass('d-none');
    $(".home-filter-area .filter-content-area .filter-item").not(".first-items").css("width", "33.33%");
});


$("#searchButton").click(function () {
    $('.more-filter').addClass('d-none');
    $(".home-filter-area .filter-content-area .filter-item").not(".first-items").css("width", "33.33%");
});

$('.action-item .btn').on("click", function () {
    var t = $(this).addClass("active"),
        n;
    $(".action-item .btn").not(t).removeClass("active");
});
$("body").on("click", ".filter-content-area .filter-item", function () {
    var t = $(this).toggleClass("active"),
        n;
    $(".filter-content-area .filter-item").not(t).removeClass("active");
    n = $(this).children(".item-dropdown");
    $(".item-dropdown").not(n).hide();
    n.slideToggle(300)
});
$(document).on("click", function (n) {
    $(".filter-content-area .filter-item").is(n.target) || $(".filter-content-area .filter-item").has(n.target).length || $(".item-dropdown").is(n
            .target) ||
        $(".item-dropdown").has(n.target).length || ($(".item-dropdown").hide(), $(".filter-content-area .filter-item")
            .removeClass(
                "active"))
});
$("body").on("click", ".number-item-min .item-content-area .content-item", function (e) {
    var t = $(this).addClass("active");
    $(".number-item-min .item-content-area .content-item").not(t).removeClass("active");
    $(".number-item input").val(" ");
    e.stopPropagation();
});

$("body").on("click", ".number-item-max .item-content-area .content-item", function (e) {
    var t = $(this).addClass("active");
    $(".number-item-max .item-content-area .content-item").not(t).removeClass("active");
    $(".number-item input").val(" ");
    e.stopPropagation();
});


$(".number-item .item-content-area .content-item").click(function () {
    var id = $(this).data("id");
    var value = $(this).data("value");
    $(`#${id}`).text(value);
    if (value.length < 1) {
        $(`#${id}`).text("");
    }
});


$(".number-item input").change(function () {
    var id = $(this).data("id");
    var value = $(this).val();
    $(`#${id}`).text(value);
    if (value.length > 1) {
        $(".number-item-min .item-content-area .content-item").removeClass("active");
        $(".number-item-max .item-content-area .content-item").removeClass("active");
    }

});

$(".check-item input, .check-item label").click(function (e) {
    var headId = $(this).data("head-id");
    var chkArray = [];
    $(`#${headId} .check-item input:checked`).each(function () {
        chkArray.push($(this).val());
    });
    var id = $(this).data("id");
    var title = $(this).data("title");
    var selected = chkArray.join(', ');
    $(`#${id}`).text(selected);
    if (selected.length < 1) {
        $(`#${id}`).text(title);
    }
    e.stopPropagation();
});