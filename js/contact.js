async function addContact() {
    let name = document.getElementById('input_name').value;
    let email = document.getElementById('input_email').value;
    let phone = document.getElementById('input_phone').value;

    let user = {
        'id': 10,
        'input_name': name,
        'input_email': email,
        'input_phone': phone,
        'password': '',
        'color_id': 'rgb(147,39,255)',
    };

    users.push(user);
    response = await setItem('users', users);
    console.log(response);
}