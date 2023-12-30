using Airports.Distance.Model;
using System.Threading.Tasks;

namespace Airports.Distance.Service
{
    public interface ICalcDistanceService
    {
        Task<double> DistanceAsync(Location origin, Location destination);
    }
}