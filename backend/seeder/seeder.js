const mongoose = require('mongoose')
const Ticket = require('../models/ticket')
const User = require('../models/user')

mongoose.connect(
  'mongodb://localhost:27017/helpdesk'
  // "mongodb+srv://robz:EnyhIPVvwPUkeqeE@cluster0-zpzps.mongodb.net/helpdesk?retryWrites=true"
)

var users = [
  new User
  (
    {
      'userType': 'administrator',
      'name': 'John',
      'surname': 'Doe',
      'email': 'test2@test.com',
      'password': '$2b$10$gWHKRbbFrojKg8Tl/SDEHuu0BngC8BaXv1vu/fnbNRFfh9fZGsWsK',
      '__v': 0,
      'nickname': 'Johnnie',
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png'
    }
  ),
  new User
  (
    {
      'userType': 'employee',
      'name': 'test3',
      'surname': 'test3surname',
      'email': 'test3@test.com',
      'password': '$2b$10$ncPHqmbwkb7Th0Bmddu3se0GmaAiMOedm0HVIK8GQi4JiOZhmYCii',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'employee',
      'name': 'test5',
      'surname': 'test5sur',
      'email': 'test5@test.com',
      'password': '$2b$10$affo7AKq.JZUaT.4KwL9QekjG7hoY92tOBswAzJJGfcdFpXTj0B7G',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'employee',
      'name': 'test4',
      'surname': 'test4sur',
      'email': 'test4@test.com',
      'password': '$2b$10$9yM4uMnvwMOolWvvN37tsuPrpgjfOY7b3F0YXpzLYauTSKH20DrCS',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'employee',
      'name': 'Test6',
      'surname': 'Test6sur',
      'email': 'test6@test.com',
      'password': '$2b$10$r3GNYjb2WBMafRdGNuo6ue8t0k.XJN4MaW3g5UocHxuPQjk1feR3.',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'administrator',
      'name': 'testtype',
      'surname': 'testtypeSur',
      'email': 'testtype@test.com',
      'password': '$2b$10$cHlf7xYZQf4X3HD4WK3I0OFDY4rnoGli4PD0Qie4movk69intgb8m',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'administrator',
      'name': 'test1',
      'surname': 'test1',
      'email': 'test1@test.com',
      'password': '$2b$10$5I2wttZFfr6nztbZ07Nq1uS6xDyG283D8tge3C2GoAo5yejl1fpWS',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'employee',
      'name': 'Nicknametest',
      'surname': 'Justasurname',
      'email': 'nickname@test.com',
      'password': '$2b$10$KbNEozfAAIu04efK0nEf4u2Y6j8xONlUPJr9og8uXPx5ACoC5ayi6',
      'nickname': 'Weirdo',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png'
    }
  ),
  new User
  (
    {
      'status': 'Rejected',
      'title': 'asdsadfs',
      'priority': 'Normal',
      'description': 'dsad',
      'creator': {
        '$oid': '5beef3d885619503903d63b9'
      },
      'creationDate': '2018/11/21',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png',
      'nickname': ''
    }
  ),
  new User
  (
    {
      'userType': 'employee',
      'name': 'Justname',
      'surname': 'dasdas',
      'email': 'sdadas@test.com',
      'password': '$2b$10$736X9X0gHabRccNOTLJYVe1xOIJbVqADi4cdr9/GoexYY5Nm0AnFC',
      'nickname': 'Mynickname',
      '__v': 0,
      'avatarPath': 'http://localhost:3000/files/images/missing_user_avatar.png'
    }
  )
]

var ticketsSeedFinished = false
var usersSeedFinished = false
var usersCount = 0

for (var i = 0; i < users.length; i++) {
  users[i].save(function () {
    usersCount++
    if (usersCount === users.length) {
      usersSeedFinished = true
      populateTickets()
    }
  })
}

function populateTickets () {
  var tickets = [
    new Ticket
    (
      {
        'status': 'Unassigned',
        'title': 'Test ticket',
        'priority': 'Low',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mollis ante. Integer eget nisi blandit odio cursus malesuada vitae at neque.',
        'creator': users[6]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'lastModificationDate': '2018/11/16',
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    ),
    new Ticket
    (
      {
        'status': 'Pending',
        'title': 'Test1, ticket 2',
        'priority': 'Low',
        'description': ' Please enter a description',
        'creator': users[6]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    ),
    new Ticket
    (
      {
        'status': 'Resolved',
        'title': 'Test 2, this is a more detailed ticket description',
        'priority': 'High',
        'description': 'Phasellus consecte\u003cb\u003etur commodo libero, sit amet varius ligula fringilla a. \u003c/b\u003e',
        'creator': users[6]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    ),
    new Ticket
    (
      {
        'status': 'Pending',
        'title': 'Test3. just a titledd',
        'priority': 'High',
        'description': 'Vivamus vestibulum volutpat bibendum. Quisque porta lacus tellus, non varius orci tincidunt at. Donec ut ligula at est feugiat mollis sed et mauris. Proin finibus neque orci, ac aliquet lacus tincidunt nec. Donec malesuada neque magna, sit amet cursus lacus dignissim at. Suspendisse potenti. Sed malesuada, mauris id tincidunt ultrices, diam odio eleifend est, ac rutrum lac\u003ci\u003eus velit non diam. Praesent a mauris at turpis elementum interdum. Sed ullamcorper velit in felis faucibus tempus. Vestibulum a venenatis elit. Praesent sapien ex, rhoncus ac dapibus a, cursus mattis sem.ads\u003c/i\u003e',
        'creator': users[6]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    ),
    new Ticket
    (
      {
        'status': 'Resolved',
        'title': 'Test5 resolved',
        'priority': 'High',
        'description': 'Ut ut sem at tellus malesuada dapibus.',
        'creator': users[0]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    ),
    new Ticket
    (
      {
        'status': 'Unassigned',
        'title': 'Test 5 unassigned',
        'priority': 'Normal',
        'description': 'Ut ut sem at tellus malesuada dapibus.',
        'creator': users[0]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    ),
    new Ticket
    (
      {
        'status': 'Pending',
        'title': 'Test 5, very long descdadsda',
        'priority': 'Normal',
        'description': 'Ut ut sem at tellus malesuada dapibus. Sed odio diam, mattis vel diam sit amet, pretium rutrum nisl. Donec lobortis, nibh eu consequat pellentesque, sem lacus laoreet velit, vitae commodo lectus lectus consectetur est. Etiam mauris leo, dignissim ac ex vel, malesuada euismod elit. Nulla consequat magna justo, ut porta sapien fermentum quis. Vivamus libero enim, consequat at pellentesque quis, tincidunt quis orci. Vestibulum magna felis, pharetra at viverra at, tincidunt vel ligula. Integer quis maximus felis. Maecenas sagittis enim non tristique vehicula. In quis tristique orci. Suspendisse pretium leo non leo euismod interdum. Aenean iaculis sem sapien, ut lobortis mauris luctus aliquet. Aenean volutpat placerat aliquet. Quisque pretium, est molestie tincidunt aliquet, est nibh fringilla nulla, sit amet congue turpis sem in urna.  Maecenas hendrerit, est in consectetur maximus, erat justo varius erat, ut vulputate ipsum orci ut purus. Maecenas ultricies erat eget diam molestie imperdiet. Sed libero justo, dignissim non commodo eget, pellentesque vel sapien. Duis accumsan in ipsum nec efficitur. Morbi ut massa sed felis tristique mattis sed eget ligula. Donec vitae sagittis orci. Aenean est velit, tempus ut mollis vitae, ultrices maximus lorem. Morbi quis mi ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et diam vel nunc malesuada vehicula.',
        'creator': users[0]._id,
        'creationDate': '2018/11/16',
        '__v': 0,
        'uploadedFilePath': null,
        'uploadedFileName': null
      }
    )
  ]

  var ticketsCount = 0
  for (var j = 0; j < tickets.length; j++) {
    tickets[j].save(function () {
      ticketsCount++
      if (ticketsCount === tickets.length) {
        ticketsSeedFinished = true
        exit()
      }
    })
  }
}

function exit () {
  if (usersSeedFinished && ticketsSeedFinished) {
    console.log('Seed successfull')
    mongoose.disconnect()
  }
}
