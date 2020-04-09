
function insert(number) {
    $('#display').val($('#display').val() + number);
}

function calculate() {
    $('#display').val(eval($('#display').val()))
}

$("#delete-all").on('click', function () {
    $('#display').val('')
})

