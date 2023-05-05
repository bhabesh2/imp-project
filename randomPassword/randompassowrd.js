
class randomPassword{
    constructor(){
        console.log("welcome to the password generator!")
        this.pass = "";
    }
    generatePassword(lan){
        let lowChar = "abcdefghijklmnopqrstuvwxyz";
        let uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let number = "0123456789";
        let specChar = "!@#$%^&*()";
        if(lan < 8){
            alert("password length shoild be more than 8 characters")
        }
        else{
            let i = 0;
            while(i < lan){
                this.pass += lowChar[Math.floor(Math.random() * lowChar.length)];
                this.pass += uppChar[Math.floor(Math.random() * uppChar.length)];
                this.pass += number[Math.floor(Math.random() * number.length)];
                this.pass += specChar[Math.floor(Math.random() * specChar.length)];
                i += 2;
            }
        }
        return this.pass;
    }
}

let pass = new randomPassword();
alert(pass.generatePassword(16));
