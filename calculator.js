
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

$('#night-mode').on('click', function () {
   $(document).toggleClass('night-mode');
})
