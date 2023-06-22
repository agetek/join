const STORAGE_TOKEN = 'MUN5KNFTRVLKWHRYHI4AWBPGV0QPFN644A67VODV';

const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

let firstLetters = [];

let currentDraggedElement = -1;

let oldContent = "";

let oldContentContactOverview = "";

let activeUserId = -2;

let selectedUserId = -2;

let categoryOpen = false;

let contactsOpen = false;

let categorySelected = -1;

let addTaskContactsSelected = [];

let priority = -1;

let activeSubtasks = [];

let addTaskSlider = -1;

const colors = [
    'rgb(254,122,0)',
    'rgb(147,39,255)',
    'rgb(41,171,226)',
    'rgb(252,113,255)',
    'rgb(25,207,48)',
    'rgb(175,22,22)',
    'rgb(70,47,138)',
    'rgb(147,39,255)',
    'rgb(203,27,207)'
];

const taskColors = [
    '#8AA4FF',
    '#FF0000',
    '#2AD300',
    '#FF8A00',
    '#E200BE',
    '#0038FF'
];

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


    let usersOld =
    [{
        'id': 0,
        'name': 'Anton Mayer',
        'email': 'anton@gmail.com',
        'phone': '+49 1111 111 11 1',
        'password': 'testxyz',
        'color_id': 'rgb(254,122,0)'
    },
    {
        'id': 1,
        'name': 'Anja Schulz',
        'email': 'schulz@hotmail.com',
        'phone': '',
        'password': 'test123',
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




let todos = [
    {
        'id': 0,
        'bucket': 'window1',
        'title': 'Beispiel Task',
        'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'category_id': 2,
        'user_ids': [0, 1, 2],
        'due_date': 123134346,
        'prio' : 0,
        'subtasks' : [
            {
                'id': 0,
                'title': 'Lorem ipsum dolor',
                'checked': true
            },
            {
                'id': 1,
                'title': 'sit amet consectetur',
                'checked': false
            }
        ]
    },
    {
        'id': 1,
        'bucket': 'window2',
        'title': 'Beispiel Task',
        'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'category_id': 2,
        'user_ids': [0, 1, 2],
        'due_date': "01-01-2024",
        'prio' : 0,
        'subtasks' : [
            {
                'id': 0,
                'title': 'Lorem ipsum dolor',
                'checked': true
            },
            {
                'id': 1,
                'title': 'sit amet consectetur',
                'checked': false
            }
        ]
    },
    {
        'id': 2,
        'bucket': 'window3',
        'title': 'Beispiel Task',
        'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'category_id': 2,
        'user_ids': [0, 1, 2],
        'due_date': "01-01-2024",
        'prio' : 0,
        'subtasks' : [
            {
                'id': 0,
                'title': 'Lorem ipsum dolor',
                'checked': true
            },
            {
                'id': 1,
                'title': 'sit amet consectetur',
                'checked': false
            }
        ]
    }
];

let oldTodos = [
    {
       "id":0,
       "bucket":"window1",
       "title":"Beispiel Task",
       "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
       "category_id":2,
       "user_ids":[
          0,
          1,
          2
       ],
       "due_date":"01-01-2024",
       "prio":0,
       "subtasks":[
          {
             "id":0,
             "title":"Lorem ipsum dolor",
             "checked":true
          },
          {
             "id":1,
             "title":"sit amet consectetur",
             "checked":false
          }
       ]
    },
    {
       "id":1,
       "bucket":"window2",
       "title":"Beispiel Task",
       "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
       "category_id":2,
       "user_ids":[
          0,
          1,
          2
       ],
       "due_date":"01-01-2024",
       "prio":0,
       "subtasks":[
          {
             "id":0,
             "title":"Lorem ipsum dolor",
             "checked":true
          },
          {
             "id":1,
             "title":"sit amet consectetur",
             "checked":false
          }
       ]
    },
    {
       "id":2,
       "bucket":"window3",
       "title":"Beispiel Task",
       "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
       "category_id":2,
       "user_ids":[
          0,
          1,
          2
       ],
       "due_date":"01-01-2024",
       "prio":0,
       "subtasks":[
          {
             "id":0,
             "title":"Lorem ipsum dolor",
             "checked":true
          },
          {
             "id":1,
             "title":"sit amet consectetur",
             "checked":false
          }
       ]
    }
 ];


// let todos = [{
//     'topic': 'Design',
//     'id': 0,
//     'title': 'Website redesign',
//     'description': 'Modify the contents of the main website...',
//     'category': 'window1',
//     'users': 'MB'
// },
// {
//     'topic': 'Sales',
//     'topic-color': '#FC71FF',
//     'id': 1,
//     'title': 'In progress',
//     'description': 'Make the product presentation to prospective buyers',
//     'category': 'window2'
// },
// {
//     'topic': 'Backoffice',
//     'id': 2,
//     'title': 'Accounting invoices',
//     'description': 'Make the product presentation to prospective buyers',
//     'category': 'window3'
// },
// {
//     'topic': 'Marketing',
//     'id': 3,
//     'title': 'Call potential clients',
//     'description': 'Make the product presentation to prospective buyers',
//     'category': 'window4'
// },
// {
//     'topic': 'Media',
//     'id': 4,
//     'title': 'Video Cut',
//     'description': 'Edit the new company',
//     'category': 'window4'
    
// }

// ];

let category = [
    {
        'id': 0,
        'name': 'Design',
        'color_id': 0,
    },
    {
        'id': 1,
        'name': 'Sales',
        'color_id': 1,
    },
    {
        'id': 2,
        'name': 'Backoffice',
        'color_id': 2,
    },
    {
        'id': 3,
        'name': 'Marketing',
        'color_id': 3,
    },
    {
        'id': 4,
        'name': 'Media',
        'color_id': 4,
    },
    {
        'id': 5,
        'name': 'Other',
        'color_id': 5,
    }
];

let categoryOld = [
    {
        'id': 0,
        'name': 'Design',
        'color_id': 0,
    },
    {
        'id': 1,
        'name': 'Sales',
        'color_id': 1,
    },
    {
        'id': 2,
        'name': 'Backoffice',
        'color_id': 2,
    },
    {
        'id': 3,
        'name': 'Marketing',
        'color_id': 3,
    },
    {
        'id': 4,
        'name': 'Media',
        'color_id': 4,
    },
    {
        'id': 5,
        'name': 'Other',
        'color_id': 5,
    }
];

let todos_suggested = [
    {
        'id': 0,
        'bucket': 0,
        'title': 'Beispiel Task',
        'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'category_id': 2,
        'user_ids': [0, 1, 2],
        'due_date': 123134346, // Unix timestamp
        'prio' : 0,
        'subtasks' : [
            {
                'id': 0,
                'title': 'Lorem ipsum dolor',
                'checked': true
            },
            {
                'id': 1,
                'title': 'sit amet consectetur',
                'checked': false
            }
        ]
    }
];