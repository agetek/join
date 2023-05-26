function addContact(){
    let name = document.getElementById('input_name').value;
    let email = document.getElementById('input_email').value;
    let phone = document.getElementById('input_phone').value;

    let user = {
        'input_name': name,
        'input_email': email,
        'input_phone': phone
    };

   

    users.push(user);
    console.log(users);
}

function loadAllData(){
    let allDataAsString = localStorage.getItem('allData');
    allData = JSON.parse(allDataAsString);
}

