import * as collabs from "@collabs/collabs";
import { CRDTContainer } from "@collabs/container";



(async function () {
  const container = new CRDTContainer();

  // TODO: Declare collaborative variables here. (You can also add things outside the async function)

  
  const display = document.getElementById("display")!;
  const display2 = document.getElementById("display2")!;
  function refreshDisplay() {
    // This function is called when the Collab state changes, possibly
    // due to a message from another replica.
    display.innerHTML = "TODO: return the animalName.";
    display2.innerHTML = "TODO: return the height of animal.";
  }

  // When Collabs state changes, call refreshDisplay
  container.on("Change", refreshDisplay);
  
  const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#myform');
  form.onsubmit = () => {
    const formData = new FormData(form);
    const animal_name = formData.get('animal_name') as string;
    const height_string = formData.get('height') as string;
    let height: number = +height_string;
    // animal_name contains the name of animal and height contains the hight of the animal
    //TODO: apply new values to the animal
    
    return false; // prevent reload
    };


  // DO NOT CHANGE BELOW THIS LINE  
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