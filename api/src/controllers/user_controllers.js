export class Luser {
    
    //private object
    #User ={
    id: "",
    username: "",
    password: "",
    }

   constructor(username, password){ // types string and string 
    this.#User.id = this.#generateId();
    this.setUsername(username);
    this.#User.password = password;
   }

   /////// PRIVATE ////
    #generateId = () => { return Date.now().toString(36) } 
    #resetPassword = (newpassword) => {if(newpassword !== this.#User.password){this.#User.password = newpassword; return true}return false} // return boleano
    #isValidUser = (username) => {const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/; if((username.length >= 3 && username.length <= 10) && regex.test(username)){return true}return false} // return boleano
    //#isValidPassword = (this.#resetPassword(newpassword)) => {}

    ///// GET ///////
    getId = () => this.#User.id
    getUsername = () => this.#User.username

   ///// SET ///
    setUsername = (newusername) => {if(this.#isValidUser(newusername) == true){this.#User.username = newusername}else{console.log('error username')}}
    setPassword = (newpassword) => {return this.#resetPassword(newpassword)}
    //createUser = (username, password) => {}

}  