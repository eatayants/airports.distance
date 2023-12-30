using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Airports.Distance.Model;
using Airports.Distance.Service;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Airports.Distance.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly ICalcDistanceService _calcDistanceService;
        private readonly IDataService _dataService;
        private readonly IMapper _mapper;

        public DataController(IMapper mapper, ICalcDistanceService calcDistanceService, IDataService dataService)
        {
            _calcDistanceService = calcDistanceService;
            _dataService = dataService;
            _mapper = mapper;
        }

        [HttpPost]
        [ProducesResponseType(typeof(DistanceRequest), StatusCodes.Status200OK)]
        public async Task<IActionResult> CalcDistance([FromBody] DistanceRequest request)
        {
            try
            {
                if (request.From == null)
                {
                    throw new ArgumentNullException(nameof(request.From));
                }
                if (request.To == null)
                {
                    throw new ArgumentNullException(nameof(request.To));
                }
                var result = new DistanceModel
                {
                    Value = await _calcDistanceService.DistanceAsync
                    (
                       _mapper.Map<Location>(request.From), 
                       _mapper.Map<Location>(request.To)
                    )
                };
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{query}")]
        [ProducesResponseType(typeof(IEnumerable<AirportModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Airports(string query)
        {
            try
            {
                var items = await _dataService.AirportsAsync(query);
                return Ok(_mapper.Map<IList<AirportModel>>(items));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
