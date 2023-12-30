using Airports.Distance.Model;
using AutoMapper;

namespace Airports.Distance
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<LocationModel, Location>().ReverseMap();
            CreateMap<AirportModel, Airport>().ReverseMap();
        }
    }
}
