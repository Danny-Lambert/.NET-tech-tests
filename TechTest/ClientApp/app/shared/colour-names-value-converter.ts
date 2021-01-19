import { IColour } from '../people/interfaces/icolour';

export class ColourNamesValueConverter {

  toView(colours: IColour[]) {

    // TODO: Step 4
    //
    // Implement the value converter function.
    // Using the colours parameter, convert the list into a comma
    // separated string of colour names. The names should be sorted
    // alphabetically and there should not be a trailing comma.
    //
    // Example: 'Blue, Green, Red'
    // look to use .sort to alphabetise the colours 
    // add comma's after each colour
    // do not add comma after the final 

    const coloursAlphabetize = colours.sort((a,b) => a.name.localeCompare(b.name));
      const coloursSeperated = coloursAlphabetize.toString();
        return coloursSeperated;
 
  }

}
