using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
   [Required]
   public required String UserName {get; set;} 

   [Required]
   public required string Password { get; set;}
}
