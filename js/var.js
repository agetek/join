const STORAGE_TOKEN = 'MUN5KNFTRVLKWHRYHI4AWBPGV0QPFN644A67VODV';

const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

const firstLetters = [];

let active_user_id = -1;


let users =
    [{
        'id': 0,
        'name': 'Anton Mayer',
        'email': 'anton@gmail.com',
        'phone': '+49 1111 111 11 1',
        'password': '',
        'color_id': 'rgb(254,122,0)'
    },
    {
        'id': 1,
        'name': 'Anja Schulz',
        'email': 'schulz@hotmail.com',
        'phone': '',
        'password': '',
        'color_id': 'rgb(147,39,255)',
    },
    {
        'id': 2,
        'name': 'Benedikt Ziegler',
        'email': 'benedikt@gmail.com',
        'phone': '',
        'password': '',
        'color_id': 'rgb(41,171,226)',
    },
    {
        'id': 3,
        'name': 'David Eisenberg',
        'email': 'davidberg@gmail.com',
        'phone': '',
        'password': '',
        'color_id': 'rgb(252,113,255)',
    },
    {
        'id': 4,
        'name': 'Eva Fischer',
        'email': 'eva@gmail.com',
        'phone': '',
        'password': '',
        'color_id': 'rgb(25,207,48)',
    },
    {
        'id': 5,
        'name': 'Emmanuel Mauer',
        'email': 'emmanuelMa@gmail.com',
        'phone': '',
        'password': '',
        'color_id': 'rgb(175,22,22)',
    },
    {
        'id': 6,
        'name': 'Marcel Bauer',
        'email': 'bauer@gmail.com',
        'phone': '',
        'password': '',
        'color_id': 'rgb(70,47,138)',
    },
    {
        'id': 7,
        'name': 'Tatjana Wolf',
        'email': 'wolf@gmail.com',
        'phone': '+49 2222 222 22 2',
        'password': '',
        'color_id': 'rgb(147,39,255)',
    },
    {
        'id': 8,
        'name': 'Stefanie Farber',
        'email': '',
        'phone': '',
        'password': '',
        'color_id': 'rgb(203,27,207)',
    }
    ];


let todos = [{
    'topic': 'Design',
    'id': 0,
    'title': 'Website redesign',
    'description': 'Modify the contents of the main website...',
    'category': 'window1'
},
{
    'topic': 'Sales',
    'topic-color': '#FC71FF',
    'id': 1,
    'title': 'In progress',
    'description': 'Make the product presentation to prospective buyers',
    'category': 'window2'
},
{
    'topic': 'Backoffice',
    'id': 2,
    'title': 'Accounting invoices',
    'description': 'Make the product presentation to prospective buyers',
    'category': 'window3'
},
{
    'topic': 'Marketing',
    'id': 3,
    'title': 'Call potential clients',
    'description': 'Make the product presentation to prospective buyers',
    'category': 'window4'
},
{
    'topic': 'Media',
    'id': 4,
    'title': 'Video Cut',
    'description': 'Edit the new company',
    'category': 'window4'
    
}





];

let currentDraggedElement;