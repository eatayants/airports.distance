using Airports.Distance.Model;
using Geolocation;
using System;
using System.Threading.Tasks;

namespace Airports.Distance.Service.Implementation
{
    internal class CalcDistanceService : ICalcDistanceService
    {
        public async Task<double> DistanceAsync(Location origin, Location destination)
        {
            if (origin == null)
            {
                throw new ArgumentNullException(nameof(origin));
            }
            if (destination == null)
            {
                throw new ArgumentNullException(nameof(destination));
            }
            return await Task.Run(() => GeoCalculator.GetDistance
            (
                new Coordinate(origin.Lat, origin.Lon),
                new Coordinate(destination.Lat, destination.Lon),
                1, DistanceUnit.Kilometers)
            ).ConfigureAwait(false);
        }
    }
}
