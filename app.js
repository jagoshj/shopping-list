//function to add items to the list
function addItem() {
    var itemName = $('#itemName').val();
    console.log(itemName);
    var itemPrice = $('#itemPrice').val();
    console.log(itemPrice);
    var itemQuantity = $('#itemQuantity').val();
    console.log(itemQuantity);
    //validate input
    if (itemName.length === 0) {
        alert('You have to add something!!!');

    } else if (itemPrice.length === 0) {
        alert('You have to add something!!!');

    } else if (itemQuantity.length === 0) {
        alert('You have to add something!!!');

    }

    //if the input is valid ....
    else {

        //dynamicaly create one row inside the shopping list
        var row = $('<li class="items"><span class="item-name">' + itemName + '</span><span class="item-price">' + itemPrice + '</span><span class="item-quantity">' + itemQuantity + '</span><button class="checkbox"><img src="images/checkmark.png" width="25px"></button><button class="delete"><img src="images/xmark.png" width="25px"></button><span class="sub-total" id="subTotal">' + (itemPrice * itemQuantity) + '</span></li>');
        //add each row to the previous ones
        $('.shopping-list').append(row);
        //empty the input box after submit by reseting the value
        var itemName = $('#itemName').val('');
        var itemPrice = $('#itemPrice').val('');
        var itemQuantity = $('#itemQuantity').val('');
        var grandTotal = $('#grandTotal').val('.sub-total')
    }
}
//function to check items from the list
function checkItem() {
    $(this).parent().toggleClass('ticked');
}
//function to calculate grand total
$.fn.sumValues = function () {
    var sum = 0;
    this.each(function () {
        if ($(this).is(':input')) {
            var val = $(this).val();
        } else {
            var val = $(this).text();
        }
        sum += parseFloat(('0' + val).replace(/[^0-9-\.]/g, ''), 10);
    });
    return sum;
};
//functiom to delete items from the list
function deleteItem() {
    $(this).parent().remove();
}

//function to delete all items from the list
function deleteAll() {
    $('.shopping-list').empty();
}
//function to sort list items
/*$('.shopping-list').sortable({ axis: "y" });
    };
}*/
$(document).ready(function () {
    $('span.sub-total').bind('keyup', function () {
        $('span.grand-total').html($('span.subtotal').sumValues());
    });
    //on click on the "#submitForm" button fire the action called addItem()
    $('#submitForm').on('click', addItem);


    //on click on the "#deleteAll" button fire the action called deleteAll()
    $('#deleteAll').on('click', deleteAll);
    //enter key to add list items
    $('.entry').keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#submitForm').click();
        }
    });
});
//on click on the "#.checkbox" button fire the action called checkItem()
$(document).on('click', '.checkbox', checkItem);
//on click on the ".delete" button fire the action called deleteItem()
$(document).on('click', '.delete', deleteItem);
