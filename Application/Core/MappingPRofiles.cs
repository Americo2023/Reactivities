using AutoMapper;
using Domain;

namespace Application;

public class MappingPRofiles : Profile
{
    public MappingPRofiles()
    {
        CreateMap<Activity, Activity>();
        
    }
}
