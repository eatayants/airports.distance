using Airports.Distance.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Airports.Distance.Service
{
    public interface IDataService
    {
        Task<IEnumerable<Airport>> AirportsAsync(string query);
    }
}
