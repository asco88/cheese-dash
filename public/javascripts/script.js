$('#new-block-btn').click(() => {
    $('#new-block-wrapper').fadeIn(100);
});

$('#submit-btn').click(() => {
    // $('#new-block-btn').fadeOut(400);
    const value = $('#new-block-text').val();

    $.post("new-block", { value }, (data) => {
        location.reload();
        // $('#new-block-wrapper').fadeOut(100);
    });
});

function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
}
