/*
Step 1
Medical history потрібно удалити fieldset https://prnt.sc/vxiook
Аналогічно у статті, потрібно удалити fieldset https://prnt.sc/vxipns
 */
const step1Form = $('#step1');
step1Form.validate({
    rules: {
        name: 'required',
        birthday: 'required',
        sex: 'required',
        height: {
            required: true,
            number: true
        },
        weight: {
            required: true,
            number: true
        },
        medHistory: 'required',
        clientReasons: 'required'
    }
});

step1Form.on('submit', function (event) {
    event.preventDefault();
    console.log(step1Form.valid());
});

/*
Step 2
 */
const step2Form = $('#registration');
step2Form.validate({
    rules: {
        email: 'required',
        password: 'required',
    }
});

step2Form.on('submit', function (event) {
    event.preventDefault();
    console.log(step2Form.valid());
});

/*
Step 4
До інпутів які тоглять кнопку потрібно добавити класс check-agree https://prnt.sc/vy0oj1
 */

/*
Step 5
Потрібно select https://prnt.sc/vxkiif огорнути в блок <div class="input-container __select"></div> https://prnt.sc/vxkj9u
 */
const step5Form = $('#payment-form');
step5Form.validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true,
        },
    }
});

step5Form.on('submit', function (event) {
    event.preventDefault();
    console.log(step5Form.valid());
});

/*
Login
 */
const loginForm = $('#login');
loginForm.validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        password: 'required'
    }
});

loginForm.on('submit', function (event) {
    event.preventDefault();
    console.log(loginForm.valid());
});

/*
Registration
До поля "password" потрібно добавити id="password" для того працювала перевірка на порівняння паролів
 */
const regFrom = $('#popup-registration');
regFrom.validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true,
        },
        phone: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
        password: 'required',
        password_confirm: {
            equalTo: '#password'
        }
    }
});

regFrom.on('submit', function (event) {
    event.preventDefault();
    console.log(regFrom.valid());
});

/*
Order
 */
const orderForm = $('#order');
orderForm.validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true,
        },
        phone: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
    }
});

orderForm.on('submit', function (event) {
    event.preventDefault();
    console.log(orderForm.valid());
});