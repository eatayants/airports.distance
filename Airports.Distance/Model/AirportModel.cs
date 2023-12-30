using System.Linq;

namespace Airports.Distance.Model
{
    public class AirportModel
    {
        public string Iata { get; set; }
        public string Title => 
            $"{string.Join(",", new[] { City, Name, Country }.Where(c => !string.IsNullOrEmpty(c)))} ({Iata})";
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public LocationModel Location { get; set; }
    }
}
