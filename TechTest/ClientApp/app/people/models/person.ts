import { computedFrom } from 'aurelia-framework';
import { IPerson } from '../interfaces/iperson';
import { IColour } from '../interfaces/icolour';

export class Person implements IPerson {

  constructor(person: IPerson) {
    this.id = person.id;
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.authorised = person.authorised;
    this.enabled = person.enabled;
    this.colours = person.colours;
  }

  id: number;
  firstName: string;
  lastName: string;
  authorised: boolean;
  enabled: boolean;
  colours: IColour[];

  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @computedFrom('fullName')
  get palindrome(): boolean {

    // TODO: Step 5
    //
    // Implement the palindrome computed field.
    // True should be returned When the FullName is spelt the same
    // forwards as it is backwards. The match should ignore any
    // spaces and should also be case insensitive.
    //
    // Example: 'Bo Bob' is a palindrome.

    // Need to create a new array to decapitalise and join together the first and second name
    // Create same array but reverse it so its the opposite way around
    // compare the index of each new array to the other to see if similar
    // person data longest name is 14 letters so a 13 long [i] required or use i++
    
    let nameOneArray = Person.map((Person) => {
        const fullName = Person.firstName + Person.secondName;
        const fullNameLowerCase = fullName.value.toLowerCase ();
        const fullNameJoinedTogether = fullNameLowerCase.text.split(' ').join(' ');
        return fullNameJoinedTogether;
          })

    let nameTwoArray = Person.map((Person) => {
      const secondFullName = Person.firstName + Person.secondName;
      const secondFullNameLowerCase = secondFullName.toLowerCase ();
      const secondFullJoinedTogether = secondFullNameLowerCase.text.split(' ').join(' ');
      const secondFullNameReverse = secondFullJoinedTogether.reverse();
      return secondFullJoinedTogether;
  })

  if(
    (nameOneArray[0] === nameTwoArray[0]) &&
    (nameOneArray[1] === nameTwoArray[1]) &&
    (nameOneArray[2] === nameTwoArray[2]) &&
    (nameOneArray[3] === nameTwoArray[3]) &&
    (nameOneArray[4] === nameTwoArray[4]) &&
    (nameOneArray[5] === nameTwoArray[5]) &&
    (nameOneArray[6] === nameTwoArray[6]) &&
    (nameOneArray[7] === nameTwoArray[7]) &&
    (nameOneArray[8] === nameTwoArray[8]) &&
    (nameOneArray[9] === nameTwoArray[9]) &&
    (nameOneArray[10] === nameTwoArray[10]) &&
    (nameOneArray[11] === nameTwoArray[11]) &&
    (nameOneArray[12] === nameTwoArray[12]) &&
    (nameOneArray[13] === nameTwoArray[13])
  ) { 
    return true;
  }
  else {
    return false;
  };
}}
