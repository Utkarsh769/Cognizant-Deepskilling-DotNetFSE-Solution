using Microsoft.AspNetCore.Mvc;

namespace WebApiHandson.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Welcome to Employee API");
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
