using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private const string BlueColor = "#1E90FF";
        private const string BlackColor = "#111111";
        private const string Title = "This is an awesome website!!!";
        private const string Size = "20px";
        // GET api/values
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(new HomeOutputModel{
                Color = BlueColor,
                Title = Title,
                Size = Size
            });
        }
    }

    public class HomeOutputModel{
        public string Color { get; set; }
        public string Title {get; set;}
        public string Size { get;  set; }
    }
}
