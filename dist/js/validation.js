$(document).on('keyup', 'input[data-type]', function () {
    let inputValue = $(this).val();
    let container = $(this).closest('.input-container');
    let type = $(this).attr('data-type');
    switch (type) {
        case 'string':
            validateString(inputValue) ? container.removeClass('is-error') : container.addClass('is-error');
            break;
        case 'numbers':
            validateNumbers(inputValue) ? container.removeClass('is-error') : container.addClass('is-error');
            break;
        case 'email':
            validateEmail(inputValue) ? container.removeClass('is-error') : container.addClass('is-error');
            break;
    }
});

function validateString(inputValue) {
    let filter = /\d/;
    return !filter.test(inputValue);
}

function validateNumbers(inputValue) {
    let filter = /\d+$/;
    return filter.test(inputValue);
}

function validateEmail(inputValue) {
    let filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(inputValue)) {
        return true;
    } else return inputValue.length <= 0;
}

function validateEmpty(inputValue) {
    return inputValue.length;
}