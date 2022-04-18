import * as collabs from "@collabs/collabs";

import { CRDTContainer } from "@collabs/container";
import { Int } from "automerge";



enum DogObedience {
  UNKNOWN = 0,
  BAD = 1,
  OKAY = 2,
  GOOD = 3,
}

//TODO: copy your task2 code here and find a place to define your list of animals.



(async function () {
  const container = new CRDTContainer();
  
  
  // You can decleare global variables here

  
    // Refresh the display when the Collab state changes, possibly
  // due to a message from another replica.
  const display3 = document.getElementById("display3")!;
  const display0 = document.getElementById("display0")!;
  const display1 = document.getElementById("display1")!;
  const display2 = document.getElementById("display2")!;
  
  function refreshDisplay() {
    display0.innerHTML = "TODO: return the list index (-1 for nothing in list"
    display1.innerHTML = "TODO: return the animal type(Cat or Dog) and status of its special feature (by whatever form you like).";
    display2.innerHTML = "TODO: return the animalName.";
    display3.innerHTML = "TODO: return the hight of animal.";
    
  }
  

  container.on("Change", refreshDisplay);
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  const radioButtons = document.querySelectorAll('input[name="Animal"]');
  form.onsubmit = () => { //adding animal
    console.log("click\n");
    var animal_kind : number = 0;
    for (const radioButton of radioButtons) {
      const buttons = <HTMLFormElement>radioButton;
      if (buttons.checked) {
        animal_kind = +buttons.value;
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
   //TODO: add an animal to your list
    
    return false; // prevent reload
  };

  const form1: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform1');
  
  form1.onsubmit = () => { //editting animal
    const formData = new FormData(form1);
    var animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    if (animal_name.length === 0){
      animal_name = " ";
    }
    //TODO: edit the animal that is shown on the screen.
    
    return false; // prevent reload
  };

  document.getElementById("prev")!.onclick = () => {
    //TODO: show the previous element on the list
  };
  document.getElementById("next")!.onclick = () => {
    //TODO: show the next element on the list
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