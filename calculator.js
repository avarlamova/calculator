
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
    $('#day').show();
    $('#night').hide();
} 

$('#night').on('click', function () {
    $('#body').addClass('night-mode');
    $('#day').show();
    $('#night').hide();
})

$('#day').on('click', function () {
        $('#body').removeClass('night-mode');
        $('#day').hide();
        $('#night').show();
    })


$(window).keydown(function (e) {
	switch (e.which) {
		case 48:
			insert(0)
			break;
		case 49:
			insert(1)
			break;
		case 50:
			insert(2)
			break;
		case 51:
			insert(3)
			break;
		case 52:
			insert(4)
			break;
		case 53:
			insert(5)
			break;
		case 54:
			insert(6)
			break;
		case 55:
			insert(7)
			break;
		case 56:
			insert(8)
			break;
		case 57:
			insert(9)
			break;
		case 191:
			insert('+')
			break;
		case 190:
			insert('.')
			break;
		case 88:
			insert('*')
			break;
		case 189:
			insert("-")
			break;
		case 187:
			insert('+')
			break;
		case 96:
			insert(0)
			break;
		case 97:
			insert(1)
			break;
		case 98:
			insert(2)
			break;
		case 99:
			insert(3)
			break;
		case 100:
			insert(4)
			break;
		case 101:
			insert(5)
			break;
		case 102:
			insert(6)
			break;
		case 103:
			insert(7)
			break;
		case 104:
			insert(8)
			break;
		case 105:
			insert(9)
			break;
		case 106:
			insert("*")
			break;
		case 107:
			insert("+")
			break;
		case 13:
			$('#display').val(eval($('#display').val()))
			break;
		case 8:
			value = $('#display').val();
			$('#display').val(value.substring(0, value.length - 1));
			break;
		case 110:
			insert(".")
			break;
		default:
			return false;
	}
}
)
