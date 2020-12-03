class Addressbook{
    constructor(...params){
        this.firstName=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phone=params[6];
        this.email=params[7];
    }

    get firstName() {return this._firstName;}
    set firstName(firstName) {
        var nameRegex=RegExp('^[A-Z][a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName=firstName;
        else
            throw 'First name is incorrect.';
        }
    get lastname() {return this._lastname;}
    set lastname(lastname) {
        if(nameRegex.test(lastname))
            this._lastname=lastname;
        else
            throw 'Last name is incorrect.';
        }
    get address() {return this._address;}
    set address(address) {
        var addrRegex=RegExp('^[A-Z][a-z]{3,}$');
        if(addrRegex.test(address))
            this._address=address;
        else
            throw 'Address is incorrect.';
        }
    get city() {return this._city;}
    set city(city) {
        if(addrRegex.test(city))
            this._city=city;
        else
            throw 'City is incorrect.';
    }
    get state() {return this._state;}
    set state(state) {
        if(addrRegex.test(state))
            this._state=state;
        else
            throw 'State is incorrect.';}
    get zip() {return this._zip;}
    set zip(zip) {
        let zipCodeRegex=RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipCodeRegex.test(zip))
            this._zip=zip;
        else
            throw 'Zip code is incorrect.';
        }
    get phone() {return this._phone;}
    set phone(phone) {
        let phoneRegex=RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(phoneRegex.test(phone))
            this._phone=phone;
        else
            throw 'Phone number is incorrect.';
        }
    get email() {return this._email;}
    set email(email)    {
        let emailRegex=RegExp('^[a-zA-Z0-9]{1,}([_+-.][a-zA-Z0-9]+)*@[a-zA-Z0-9]{2,}.[a-z]{2,4}([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
            this._email=email;
        else
            throw 'Email is incorrect.';
    }

    toString(){
        return "First Name: "+this.firstName+", Last Name: "+this.lastname+", Address: "+
        this.address+", City: "+this.city+", State: "+this.state+", Zip: "+this.zip+
        ", Phone No: "+this.phone+", Email: "+this.email;
    }
}