
export class AuthStudentService{

    loggedIn: boolean = false;

    login(){
        this.loggedIn=true;
    }

    logout(){
        this.loggedIn=false;
    }

    isLoggedIn(){
        return this.loggedIn;
    }
}