var users = [
    {id:1,name:'Amirali',username:'atanabian',password:'123456'},
    {id:2,name:'Javad',username:'agabii',password:'a87948794'},
    {id:3,name:'Soltan',username:'jazanfar',password:'Amirali1234'},
    {id:4,name:'Reza',username:'beyranvand',password:'13601360'}
]
var userName = 'reza pishro'
var userPassword = users.find(function (user){
    return user.username === userName
})


console.log(userPassword)