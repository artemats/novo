$('#step-1').validate({
    rules: {
        name: {
            required: true
        },
        birthday: {
            required: true
        },
        sex: {
            required: true
        },
        history: {
            required: true
        }
    },
    messages: {
        name: 'Name is required'
    },
    submitHandler: function(form) {
        console.log(form);
    },
});