const prompt = require('prompt-sync')();

class Addressbook{
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phone=params[6];
        this.email=params[7];
    }

    get firstName() {return this._firstName;}
    set firstName(firstName) {
        let nameRegex=RegExp('^[A-Z][a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName=firstName;
        else
            throw 'First name is incorrect.';
        }
    get lastName() {return this._lastName;}
    set lastName(lastName) {
        let nameRegex=RegExp('^[A-Z][a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName=lastName;
        else
            throw 'Last name is incorrect.';
        }
    get address() {return this._address;}
    set address(address) {
        let addrRegex=RegExp('^[A-Z][a-z]{3,}$');
        if(addrRegex.test(address))
            this._address=address;
        else
            throw 'Address is incorrect.';
        }
    get city() {return this._city;}
    set city(city) {
        let addrRegex=RegExp('^[A-Z][a-z]{3,}$');
        if(addrRegex.test(city))
            this._city=city;
        else
            throw 'City is incorrect.';
    }
    get state() {return this._state;}
    set state(state) {
        let addrRegex=RegExp('^[A-Z][a-z]{3,}$');
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
        let phoneRegex=RegExp('^[1-9]{2,3}\\s[7-9]{1}[0-9]{9}$');
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
        return "\nFirst Name: "+this.firstName+", Last Name: "+this.lastName+"\nAddress: "+
        this.address+", City: "+this.city+", State: "+this.state+", Zip: "+this.zip+
        "\nPhone No: "+this.phone+", Email: "+this.email;
    }
}
var addressbookData=new Array();
addressbookData.push(new Addressbook("Mark","Noo","Cstm","Mumb","Maha","410101","91 9878543210","mn@gmail.com"));
addressbookData.push(new Addressbook("Terrisa","Soo","Dadar","Nashik","Maha","400101","91 9876543210","ts@gmail.com"));

function addContact(firstName){
    let lastName=prompt("Enter Last Name :");
    let address=prompt("Enter address :");
    let city=prompt("Enter city :");
    let state=prompt("Enter state :");
    let zip=prompt("Enter zip code :");
    let phone=prompt("Enter phone number :");
    let email=prompt("Enter email id :");
    addressbookData.push(new Addressbook(firstName,lastName,address,city,state,zip,phone,email));
    console.log("\n New Contact added..");
}
function updateContact(name){
    let found=0;
    for (i = 0; i < addressbookData.length; i++) {
        let data=addressbookData[i];
        if(name.toLowerCase() === data.firstName.toLowerCase()){
            found=1;
            addressbookData.splice(i, 1);
        }
    }
    if(found == 1){
        addContact(name);
    }
    else console.log("No contact found.");    
}
function deleteContact(){
    let name=prompt("Enter First Name to delete contact :");
    let found=0;
    for (i = 0; i < addressbookData.length; i++) {
        let data=addressbookData[i];
        if(name.toLowerCase() === data.firstName.toLowerCase()){
            found=1;
            addressbookData.splice(i, 1);
        }
    }
    if(found == 1)
        console.log("Contact deleted.");
    else console.log("No contact found.");    
}
function searchPersonByCity(){
    let cityName=prompt("Enter city :");
    let name=prompt("Enter name to search :");
    let cityPerson=addressbookData.filter(contact => cityName.toLowerCase() === contact.city.toLowerCase() && name.toLowerCase() === contact.firstName.toLowerCase())
                    .map(contact => contact.toString());
    if(cityPerson.length != 0){
    console.log("Person "+name+" found in city "+cityName+" . ");
    console.log(cityPerson.toString());
    }
    else console.log("Person "+name+" not found in city "+cityName+" . ");
}
function searchPersonByState(){
    let stateName=prompt("Enter state :");
    let name=prompt("Enter name to search :");
    let statePerson=addressbookData.filter(contact => stateName.toLowerCase() === contact.state.toLowerCase() && name.toLowerCase() === contact.firstName.toLowerCase())
                    .map(contact => contact.toString());
    if(statePerson.length != 0){
    console.log("Persons "+name+" found in state "+stateName+" . ");
    console.log(statePerson.toString());
    }
    else console.log("Persons "+name+" not found in state "+stateName+" . ");
}
function viewByCity(){
    let city_Name=prompt("Enter city to view persons :");
    let viewCityPerson=addressbookData.filter(contact => city_Name.toLowerCase() === contact.city.toLowerCase())
                    .map(contact => contact.toString());
    if(viewCityPerson.length != 0){
    console.log("Persons in city "+city_Name+" are : ");
    console.log(viewCityPerson.toString());
    }
    else console.log("Persons in city "+city_Name+" are : 0 ");
}
function viewByState(){
    let state_Name=prompt("Enter state to view persons :");
    let viewStatePerson=addressbookData.filter(contact => state_Name.toLowerCase() === contact.state.toLowerCase())
                    .map(contact => contact.toString());
    if(viewStatePerson.length != 0){
    console.log("Persons in state "+state_Name+" are : ");
    console.log(viewStatePerson.toString());
    }
    else console.log("Persons in state "+state_Name+" are : 0");
}
function countByCity(){
    let city_Name=prompt("Enter city to count persons :");
    let countCityPerson=addressbookData.filter(contact => city_Name.toLowerCase() === contact.city.toLowerCase())
                                        .reduce((countCityPerson) => countCityPerson+=1,0);
    if(countCityPerson != 0)
        console.log("Number of contacts in "+city_Name+" city are : "+countCityPerson); 
    else  console.log("Number of contacts in "+city_Name+" city are : 0");
}
function countByState(){
    let state_Name=prompt("Enter state to count persons :");
    let countStatePerson=addressbookData.filter(contact => state_Name.toLowerCase() === contact.state.toLowerCase())
                                        .reduce((countStatePerson) => countStatePerson+=1,0);
    if(countStatePerson != 0)
        console.log("Number of contacts in "+state_Name+" state are : "+countStatePerson); 
    else  console.log("Number of contacts in "+state_Name+" state are : 0");
}

do{
    var choice=Number(prompt("Enter option : 1.Add New contact 2.Update Contact 3.Display all contacts 4.Delete Contact 5.Total Contacts 6.Search Person By City 7.Search Person By State 8.View Persons by City 9.View Persons by State "
    +"10. Count by city 11. Count by state 12.Sort By name 13.Sort By city 14.Sort By state 15.Sort By zip code 16.Exit== "));
    switch(choice){
        case 1: let fName=prompt("Enter First Name to add contact :");
                let found=addressbookData.filter(contact => fName.toLowerCase() === contact.firstName.toLowerCase())
                                        .map(contact => contact.toString());
                if(found.length == 0){
                    addContact(fName);
                }
                else console.log("Contact already exists.");
                break;
        case 2: let name=prompt("Enter First Name to update contact :");
                updateContact(name);
                break;
        case 3: console.log("All Contacts are :"+addressbookData.toString());
                break;
        case 4: deleteContact();
                break;
        case 5: let totalContacts=addressbookData.reduce((totalContacts) => totalContacts+=1,0);
                console.log("Number of contacts in addressbook are : "+totalContacts); 
                break;
        case 6: searchPersonByCity();
                break;
        case 7: searchPersonByState();
                break;
        case 8: viewByCity();
                break;
        case 9: viewByState();
                break;
        case 10:    countByCity();
                    break;    
        case 11:    countByState();
                    break;   
        case 12:    let sortByName=addressbookData.sort((a, b) => a.firstName.localeCompare(b.firstName));
                    console.log("Sorted contacts by Name : "+sortByName.toString());
                    break;
        case 13:    let sortByCity=addressbookData.sort((a, b) => a.city.localeCompare(b.city));
                    console.log("Sorted contacts by city : "+sortByCity.toString());
                    break;
        case 14:    let sortByState=addressbookData.sort((a, b) => a.state.localeCompare(b.state));
                    console.log("Sorted contacts by state : "+sortByState.toString());
                    break;
        case 15:    let sortByZip=addressbookData.sort((a, b) => a.zip.localeCompare(b.zip));
                    console.log("Sorted contacts by zip code : "+sortByZip.toString());
                    break;
        case 16:    console.log("You exit the program.");
                    break;
        default:    console.log("Wrong choice.");
    }
}while(choice != 16);