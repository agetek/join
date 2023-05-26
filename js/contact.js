let allData = [];

function addData(){
    let name = document.getElementById('input_name').value;
    let email = document.getElementById('input_email').value;
    let phone = document.getElementById('input_phone').value;

    let data = {
        'input_name': name,
        'input_email': email,
        'input_phone': phone
    };

    console.log(allData);

    allData.push(data);

    let allDataAsString = JSON.stringify(allData);
    localStorage.setItem('allData', allDataAsString);
}

function loadAllData(){
    let allDataAsString = localStorage.getItem('allData');
    allData = JSON.parse(allDataAsString);
}