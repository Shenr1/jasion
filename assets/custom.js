$(function(){
$('.switch_tabs .item-tab').click(function() {
    var tabNumber = $(this).data('tab');
    $('.switch_tabs .item-content').addClass('tw-hidden');
    $('.switch_tabs .item-content[data-tab="' + tabNumber + '"]').removeClass('tw-hidden');
    $('.switch_tabs .item-tab').removeClass('active');
    $(this).addClass('active');
    });
})