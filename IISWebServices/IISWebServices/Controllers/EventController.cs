using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace IISWebServices.Controllers
{
    public class EventController : ApiController
    {
        public JToken Get(string id = null)
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            return JObject.Parse(System.IO.File.ReadAllText((path + "../../data/event/" + id + ".json")));
        }

        public void Post(string id, JObject eventData)
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            System.IO.File.WriteAllText(path + "../../data/event/" + id + ".json", eventData.ToString(Formatting.None));
        }
    }
}
