
function insert(number) {
    $('#display').val($('#display').val() + number);
}

$('#calculate').on('click', function () {
    $('#display').val(eval($('#display').val()))
}
    )

$("#delete-all").on('click', function () {
    $('#display').val('')
})

$("#delete").on('click', function () {
    value = $('#display').val();
    $('#display').val(value.substring(0, value.length - 1));
})

let time = new Date().getHours();
if (time > 18 || time < 6) {
    $('#body').addClass('night-mode');
    $('#day-mode').show();
    $('#night-mode').hide();
} 

$('#night-mode').on('click', function () {
    $('#body').addClass('night-mode');
    $('#day-mode').show();
    $('#night-mode').hide();
})

$('#day-mode').on('click', function () {
        $('#body').removeClass('night-mode');
        $('#day-mode').hide();
        $('#night-mode').show();
    })
