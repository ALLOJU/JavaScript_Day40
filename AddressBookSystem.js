/**
 * Purpose: This program is written to create a address-book-system and to perform various functinalities
 */
//Printing a welcome note to console
console.log("Welcome to address book system!");

/**
 * Created a class for contacts as blue print
 */
class AddressBookContact{
    constructor (firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    /**
     * Method to log the data to console
     * gets all the arguments given while creating new contact
     * @returns String formatted contact
     */
     toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zipCode+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }
}

/**
 * Created a new contact
 */
let addressBook = new AddressBookContact("Mounika", "Alloju", "Girmajipet", 
    "Warangal", "Telangana", 506002, "9866349586", "mounika.allou@gmail.com");

//Printing the added contact to console
console.log(addressBook.toString());
