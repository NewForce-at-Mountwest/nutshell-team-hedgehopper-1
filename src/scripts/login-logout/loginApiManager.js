const loginApiManager = {
    //fetch single user object for login authentication, returns single user object.
    checkLogin: (name) => {
         return fetch(`http://localhost:8088/users?name=${name}`)
            .then(user => user.json())
    },

    //takes a new user and will post it to the user table in db.json
    postNewUser : (newUser) =>{
             fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)

    })

    },
    //returns a  the users in db.json
    allUsers: () => {
        return fetch("http://localhost:8088/users")
            .then(allUsers => allUsers.json())
        },







}

export default loginApiManager;