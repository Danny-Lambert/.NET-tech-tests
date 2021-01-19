using System;
using Microsoft.AspNetCore.Mvc;
using TechTest.Repositories;
using TechTest.Repositories.Models;

namespace TechTest.Controllers
{
    [Route("api/people")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        public PeopleController(IPersonRepository personRepository)
        {
            this.PersonRepository = personRepository;
        }

        private IPersonRepository PersonRepository { get; }
        public els E { get => e; set => e = value; }

        [HttpGet]
        public IActionResult GetAll()
        {
            Get / employees
            // TODO: Step 1
            //
            // Implement a JSON endpoint that returns the full list
            // of people from the PeopleRepository. If there are zero
            // people returned from PeopleRepository then an empty
            // JSON array should be returned.

// Create empty array, then a for loop to go through the repository length and add the employee details if any value is found to new array
// If no employees are found then return an empty array []
        let employeesArray = [];
            for (let i = 0; i < length; i++){
                if(PersonRepository[i] == value)
                    employeesArray.push(employeesArray[i])
                        else
                        {
                            return [];
                        }
            } 
        } 
                    throw new NotImplementedException();
    

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            

            // TODO: Step 2
            //
            // Implement a JSON endpoint that returns a single person
            // from the PeopleRepository based on the id parameter.
            // If null is returned from the PeopleRepository with
            // the supplied id then a NotFound should be returned.

// Need to iterate over the employees and to return a person if they have ID, if there is no ID then return NotFound (12 employees with ID)

  let employeesArray = [];
            for (let i = 0; i < length; i++){
                if(PersonRepository.Id < 12)
                    employeesArray.push(employeesArray[i])
                        else
                        {
                            return "NotFound";
                        }
            } 
        } 
  

            throw new NotImplementedException();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, PersonUpdate personUpdate)
        {
            // TODO: Step 3
            //
            // Implement an endpoint that receives a JSON object to
            // update a person using the PeopleRepository based on
            // the id parameter. Once the person has been successfully
            // updated, the person should be returned from the endpoint.
            // If null is returned from the PeopleRepository then a
            // NotFound should be returned.

            // When the endpoint recieves the object, from the repository, update and return the 
            // endpoint using potentially async and await 

            throw new NotImplementedException();
        }
    }
