using Airports.Distance.Service.Implementation;
using Microsoft.Extensions.DependencyInjection;

namespace Airports.Distance.Service
{
    public static class ServiceCollectionExtensions
    {

        public static void AddCustomService(this IServiceCollection services)
        {
            services.AddScoped<ICalcDistanceService, CalcDistanceService>();
            services.AddScoped<IDataService, DataService>();
        }
    }
}