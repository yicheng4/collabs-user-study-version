import * as collabs from "@collabs/collabs";

import { CRDTContainer } from "@collabs/container";
import { Int } from "automerge";


enum DogObedience {
  UNKNOWN = 0,
  BAD = 1,
  OKAY = 2,
  GOOD = 3,
}

// TODO: Create a class called "Dog" that has the properties that is contained in "Animal".
// It has an extra variable that is called "obedience" that takes in "DogObedience"
// Please write a constructor for this class.


// TODO: Create a class called "Cat" that has the properties from "Animal" in previous task.
// It has an extra variable that is called "purrs" that takes in "booleans"
// Please write a constructor for this class.



(async function () {
  const container = new CRDTContainer();
  
  

  // You can decleare global variables here

    // Refresh the display when the Collab state changes, possibly
  // due to a message from another replica.
  const display3 = document.getElementById("display3")!;
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  function refreshDisplay() {
    
    display1.innerHTML = "TODO: return the animal type(Cat or Dog) and status of its special feature (by whatever form you like).";
    display2.innerHTML = "TODO: return the animalName.";
    display3.innerHTML = "TODO: return the hight of animal.";
  }
  

  container.on("Change", refreshDisplay);
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = () => {
    console.log("click\n");
    for (const radioButton of radioButtons) {
      const buttons = <HTMLFormElement>radioButton;
      if (buttons.checked) {
        animal_kind.value = +buttons.value;
        break;
      }
    }
    //Animal_kind saves 1 if it is a Dog, saves 2 if it is a Cat.
    
    
    const formData = new FormData(form);
    var animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
    // animal_name contains the name of animal and height contains the hight of the animal
    //TODO: apply new values to the animal shown on the screen
    

    return false; // prevent reload
  };
   
  

  
  //DO NOT CHANGE BELOW THIS LINE  
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  // Wait for the container to load the previous saved state,
  // if any.
  // Observe that unlike CRDTApp.load, we don't need to provide
  // the save data ourselves, and the method is async.
  await container.load();

  // Display the loaded state.
  refreshDisplay();

  // Signal that we're ready.
  container.ready();

  
})();