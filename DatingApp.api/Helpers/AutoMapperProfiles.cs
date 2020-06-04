using System.Linq;
using AutoMapper;
using DatingApp.api.Dtos;
using DatingApp.api.Models;

namespace DatingApp.api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(d => d.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(d => d.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<MessageForCreationDto, Message>().ReverseMap();
            CreateMap<Message, MessageToReturnDto>()
                    .ForMember(m => m.SenderPhotoUrl, opt => opt.MapFrom(u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).Url))
                    .ForMember(m => m.RecipientPhotoUrl, opt => opt.MapFrom(u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).Url))
                    ;
        }
    }
}