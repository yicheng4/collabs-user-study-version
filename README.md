# collabs-user-study-version
## Background
The Pittsburgh animal shelter wants to develop a system that can let them keep track of the different animals that they have. They are asking for you to develop a program that will let the staff collaboratively manage the animals.

The application is a web page that allows clients to update the same state concurrently on different devices. We’d like to have a list of animals, each of which has different attributes. There are two kinds of animals – cats and dogs. Users should be able to add, remove, and edit individual animals. The app does not allow users to add new kinds of animals.

You have an HTML document and a sketch of how this might work in Typescript, but the part of the code that takes care of collaboration is not yet implemented. You must complete this program so that animals can be collaboratively added, removed, and edited.

## What to do
For this task, you'll need to do the following:  
- Implement the collaboration functionality in the template provided.  
- Run the web page and ensure that different users can concurrently add/remove/edit individual animals.
 
To assist you in this task, we've provided you with simplified instructions for launching the app using the `Collabs` library. If you have any questions, please ask the researchers.
## Task

The following instructions indicate the steps that need to be followed to complete the task:

- Download the template code.  
- Implement the collaboration functionality in the template provided.  
- Launch the collaborative app and ensure that different users can concurrently add/remove/edit individual animals.

In the following paragraphs, we describe each step in detail and, in some steps, we provide commands that you need to execute to complete that step. 
### Download and install the template code.  
  
  `$ git clone https://github.com/yicheng4/collabs-user-study-version.git`  
  `$ cd collabs-user-study-version/ckpt1`  
  `$ npm i`  
  `$ cd collabs-user-study-version/ckpt2`  
  `$ npm i`  
  `$ cd collabs-user-study-version/ckpt3`  
  `$ npm i`  
  The file you will work on are the ones in `src/` in each checkpoint folder.

### Implement the collaboration functionality in the template provided.
   
In `async function ()` part, we’ve pointed out the variables where the frontend gets inputs. Please follow the comments and update (or fetch) the values in the data structures.  

You can refer to the [project documentation](https://collabs.readthedocs.io/en/latest/). If you have any questions, please feel free to ask the researcher.   

While working, you can test the code you have written so far by following the instructions [below](#launch-the-collaborative-website). Checking the console would help you to debug. When you are updating the data, please update all the non-empty data read from the html form. If the form is empty, you can either update the data as an empty string or not change it.  

When you finish a checkpoint, please let the researcher know. If you are planning to start writing code, please describe to the researcher the approach that you’d like to take before you get started.  

#### Checkpoint1:
Fill in the TODOs in the template so that the animal’s `name` (i.e. Alice, Bob) and height (i.e. 5 inches) can be collaboratively edited. That way, the animal shelter staff can edit them on different devices!

At checkpoint1, we only have one animal and we would like the animal shelter staff to be able to update its `name` and `height`.

#### Checkpoint2:
We now have two kinds of animals in the animal shelter, Dog and Cat.

The Dog has an `obedience` value with type `DogObedience` (defined in the code we provided) and Cat has a `purrs` value which is a `Boolean`. We’d like the animal’s name (i.e. Alice, Bob) and height (i.e. 5 inches), and the characteristics of Dog or Cat (like `obedience` and `purrs`) to be collaboratively editable so that the animal shelter staff can edit them on different devices!

For the front-end, we still have only one animal so far. The users can collaboratively change its name, its type (whether it is a Dog or Cat), and its characteristics (like `obedience` and `purrs`)

#### Checkpoint3:
Now the animal shelter has multiple Dogs and Cats. Starting with an empty list of animals, users should be able to append any number of animals. 

Also ensure that it’s possible for the animal shelter staff to update the `name`, `height`, and characteristics of individual animals (e.g., `obedience` and `purrs`). 
Please demonstrate to the researcher that users can add at least 3 animals to the list.

### Launch the collaborative website
`cd` into the checkpoint folders  
`$ npm run dev`  
`$ npm start`  
Open the website shown in the command line. You can test it in multiple tabs/windows to see if you can collaboratively launch it.
 
### Clean up (Optional)
If you'd like to clean up the packages:  
`cd` into the checkpoint folders  
`$ npm run clean`  

