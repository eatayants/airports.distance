using Airports.Distance.Model;
using Flurl;
using Flurl.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;


namespace Airports.Distance.Service.Implementation
{
    internal class DataService : IDataService
    {
        private readonly IConfiguration _configuration;

        public DataService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<IEnumerable<Airport>> AirportsAsync(string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return Array.Empty<Airport>();
            }
            var getUrl = _configuration["airports"] ?? throw new ConstraintException("airports");
            return await getUrl.SetQueryParams(new { q = query }).GetJsonAsync<Airport[]>();
        }
    }
}
