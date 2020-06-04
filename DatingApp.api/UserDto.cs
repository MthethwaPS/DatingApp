using System.ComponentModel.DataAnnotations;

namespace DatingApp.api
{
    public class UserDto
    {
        [Required]
        public string Username { get; set; } 
        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage = "You must have a password between 4 and 8 characters")]
        public string Password { get; set; }

    }
}