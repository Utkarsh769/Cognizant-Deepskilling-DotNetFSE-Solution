using Microsoft.AspNetCore.Mvc;
using WebApiHandson.Models;
using WebApiHandson.Filters;
using Microsoft.AspNetCore.Authorization;
namespace WebApiHandson.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin,POC")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>()
            {
                new Employee
                {
                    Id = 1,
                    Name = "Utkarsh",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(2003,1,1),

                    Department = new Department
                    {
                        Id = 101,
                        Name = "IT"
                    },

                    Skills = new List<Skill>()
                    {
                        new Skill
                        {
                            Id = 1,
                            Name = "C#"
                        },

                        new Skill
                        {
                            Id = 2,
                            Name = "ASP.NET Core"
                        }
                    }
                }
            };
        }

        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(GetStandardEmployeeList());
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok("POST Method");
        }

        [HttpPut]
        public IActionResult Put()
        {
            return Ok("PUT Method");
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return Ok("DELETE Method");
        }
    }
}