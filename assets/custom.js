// 适配
const autoReponsive = () => {
    const width = document.body.clientWidth || window.innerWidth;
    if (width < 1025 && width >= 750) {
        const scale = width / 1023;
        const content = 'width=1023, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', viewport-fit=cover';
        $('meta[name="viewport"]').attr("content",content);
    }
}
autoReponsive()

$(function(){
    $('.switch_tabs .item-tab').click(function() {
        var tabNumber = $(this).data('tab');
        $('.switch_tabs .item-content').addClass('tw-hidden');
        $('.switch_tabs .item-content[data-tab="' + tabNumber + '"]').removeClass('tw-hidden');
        $('.switch_tabs .item-tab').removeClass('active');
        $(this).addClass('active');
    });
})