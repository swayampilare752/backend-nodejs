const express = require("express");  // import express

const app = express();  // Initialize express


const dummyUsersData =  [
        {
            userid: 1,
            name: "Peter"
        },
        {
            userid: 2,
            name: "Tony"
        },
        {
        "id": 1,
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@example.com",
        "birthDate": "1973-01-22",
        "login": {
            "uuid": "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
            "username": "johndoe",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2023-01-10T10:03:20.022Z"
        },
        "address": {
            "street": "123 Main Street",
            "suite": "Apt. 4",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.1234",
                "lng": "-71.2345"
            }
        },
        "phone": "(555) 555-1234",
        "website": "www.johndoe.com",
        "company": {
            "name": "ABC Company",
            "catchPhrase": "Innovative solutions for all your needs",
            "bs": "Marketing"
        }
    },
    {
        "id": 2,
        "firstname": "Jane",
        "lastname": "Smith",
        "email": "janesmith@example.com",
        "birthDate": "1983-02-22",
        "login": {
            "uuid": "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
            "username": "janesmith",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2022-06-10T12:45:20.022Z"
        },
        "address": {
            "street": "456 Oak Street",
            "suite": "Suite 200",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.3456",
                "lng": "-71.6789"
            }
        },
        "phone": "(555) 555-5678",
        "website": "www.janesmith.com",
        "company": {
            "name": "XYZ Corporation",
            "catchPhrase": "Leading the way in innovation",
            "bs": "Finance"
        }
    },
    {
        "id": 3,
        "firstname": "Bob",
        "lastname": "Johnson",
        "email": "bobjohnson@example.com",
        "birthDate": "1974-11-12",
        "login": {
            "uuid": "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
            "username": "bobjohnson",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2022-06-10T12:45:20.022Z"
        },
        "address": {
            "street": "789 Elm Street",
            "suite": "Apt. 100",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.5678",
                "lng": "-71.1234"
            }
        },
        "phone": "(555) 555-9012",
        "website": "www.bobjohnson.com",
        "company": {
            "name": "Acme Corporation",
            "catchPhrase": "Your trusted partner",
            "bs": "Manufacturing"
        }
    },
    {
        "id": 4,
        "firstname": "Emily",
        "lastname": "Davis",
        "email": "emilydavis@example.com",
        "birthDate": "1974-11-30",
        "login": {
            "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
            "username": "emilydavis",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2022-07-10T11:21:20.033Z"
        },
        "address": {
            "street": "321 Maple Street",
            "suite": "Apt. 50",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.9012",
                "lng": "-71.5678"
            }
        },
        "phone": "(555) 555-3456",
        "website": "www.emilydavis.com",
        "company": {
            "name": "GHI Corporation",
            "catchPhrase": "Your success is our priority",
            "bs": "Consulting"
        }
    },
    {
        "id": 5,
        "firstname": "William",
        "lastname": "Brown",
        "email": "williambrown@example.com",
        "birthDate": "1974-11-22",
        "login": {
            "uuid": "5a0eed11-9430-4d68-901f-c0d4c1c3bf22",
            "username": "williambrown",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2021-02-10T10:38:03.030Z"
        },
        "address": {
            "street": "567 Pine Street",
            "suite": "Apt. 2",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.6789",
                "lng": "-71.9012"
            }
        },
        "phone": "(555) 555-6789",
        "website": "www.williambrown.com",
        "company": {
            "name": "JKL Industries",
            "catchPhrase": "Quality products for a better world",
            "bs": "Engineering"
        }
    },
    {
        "id": 6,
        "firstname": "Laura",
        "lastname": "Wilson",
        "email": "laurawilson@example.com",
        "birthDate": "1984-12-14",
        "login": {
            "uuid": "6a0eed12-9430-4d68-901f-c0d4c1c3bf14",
            "username": "laurawilson",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2022-01-10T09:03:03.030Z"
        },
        "address": {
            "street": "789 Maple Street",
            "suite": "Apt. 10",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.3456",
                "lng": "-71.2345"
            }
        },
        "phone": "(555) 555-1234",
        "website": "www.laurawilson.com",
        "company": {
            "name": "LMN Corporation",
            "catchPhrase": "Innovative solutions for a better future",
            "bs": "Technology"
        }
    },
    {
        "id": 7,
        "firstname": "Michael",
        "lastname": "Garcia",
        "email": "michaelgarcia@example.com",
        "birthDate": "1984-12-14",
        "login": {
            "uuid": "7a0eed12-9430-4d68-901f-c0d4c1c3bf14",
            "username": "michaelgarcia",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2023-01-10T09:03:03.030Z"
        },
        "address": {
            "street": "234 Elm Street",
            "suite": "Apt. 20",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.5678",
                "lng": "-71.6789"
            }
        },
        "phone": "(555) 555-9012",
        "website": "www.michaelgarcia.com",
        "company": {
            "name": "NOP Enterprises",
            "catchPhrase": "Your partner in success",
            "bs": "Consulting"
        }
    },
    {
        "id": 8,
        "firstname": "Stephanie",
        "lastname": "Lee",
        "email": "stephanielee@example.com",
        "birthDate": "1983-02-13",
        "login": {
            "uuid": "8a0eed02-9430-4d68-901f-c0d4c1c3bf13",
            "username": "stephanielee",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2023-01-10T09:03:34.330Z"
        },
        "address": {
            "street": "345 Oak Street",
            "suite": "Suite 500",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.9012",
                "lng": "-71.1234"
            }
        },
        "phone": "(555) 555-3456",
        "website": "www.stephanielee.com",
        "company": {
            "name": "PQR Industries",
            "catchPhrase": "Innovative solutions for your needs",
            "bs": "Manufacturing"
        }
    },
    {
        "id": 9,
        "firstname": "David",
        "lastname": "Hernandez",
        "email": "davidhernandez@example.com",
        "birthDate": "2000-11-10",
        "login": {
            "uuid": "9a0eed11-9430-4d68-901f-c0d4c1c3bf10",
            "username": "davidhernandez",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2023-01-10T09:02:34.330Z"
        },
        "address": {
            "street": "456 Pine Street",
            "suite": "Apt. 100",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.5678",
                "lng": "-71.9012"
            }
        },
        "phone": "(555) 555-6789",
        "website": "www.davidhernandez.com",
        "company": {
            "name": "RST Corporation",
            "catchPhrase": "Innovative solutions for your business",
            "bs": "Consulting"
        }
    },
    {
        "id": 10,
        "firstname": "Jessica",
        "lastname": "Perez",
        "email": "jessicaperez@example.com",
        "birthDate": "1988-11-13",
        "login": {
            "uuid": "10aeed11-9430-4d68-901f-c0d4c1c3bf13",
            "username": "jessicaperez",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2023-01-09T09:01:33.330Z"
        },
        "address": {
            "street": "789 Oak Street",
            "suite": "Suite 300",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.9012",
                "lng": "-71.5678"
            }
        },
        "phone": "(555) 555-9012",
        "website": "www.jessicaperez.com",
        "company": {
            "name": "UVW Corporation",
            "catchPhrase": "Innovative solutions for a better world",
            "bs": "Technology"
        }
    }
    ]

const dummyTodosData = {
    result: [
        {
            todoid: 1,
            title: "Lorem ipsum dor sit amet"
        },
         {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
    },
    {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
    },
    {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
    },
    {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
    },
    {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
    },
    {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false
    },
    {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true
    },
    {
        "userId": 2,
        "id": 26,
        "title": "aliquam aut quasi",
        "completed": true
    },
    {
        "userId": 2,
        "id": 27,
        "title": "veritatis pariatur delectus",
        "completed": true
    },
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false
    },
    {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true
    },
    {
        "userId": 2,
        "id": 31,
        "title": "repudiandae totam in est sint facere fuga",
        "completed": false
    },
    {
        "userId": 2,
        "id": 32,
        "title": "earum doloribus ea doloremque quis",
        "completed": false
    },
    {
        "userId": 2,
        "id": 33,
        "title": "sint sit aut vero",
        "completed": false
    },
    {
        "userId": 2,
        "id": 34,
        "title": "porro aut necessitatibus eaque distinctio",
        "completed": false
    },
    {
        "userId": 2,
        "id": 35,
        "title": "repellendus veritatis molestias dicta incidunt",
        "completed": true
    },
    {
        "userId": 2,
        "id": 36,
        "title": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
        "completed": true
    },
    {
        "userId": 2,
        "id": 37,
        "title": "sunt cum tempora",
        "completed": false
    }
    ]
}

app.get("/todos", (req, res) => {
     console.log(req.query.id);
        if(req.query.id){

        } 
        else {

             res.json({
        message: "TODO GET API",
        result: dummyTodosData
    })
        }
   ///express has a functionality of JSON.stringyfy() by default  so we use "res.json ({data})"

});

    app.post("/todos", (req, res) => {
       
        res.json({
            message: "POST TODO API"
        })
    });

    app.get("/users",(req, res) => {
        res.json({
            message: "USERS GET API",
            result: dummyUsersData
        })
    })

      app.post("/users",(req, res) => {
        res.json({
            message: "USERS POST API",
            result: dummyUsersData
        })
    })


app.listen(8080, () => console.log("Server is Running at Port 8080"));