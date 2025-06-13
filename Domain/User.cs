using System;
using Microsoft.AspNetCore.Identity;

namespace Domain;

public class User : IdentityUser
{
    public string? DispalyName { get; set; }
    public string? Bio { get; set; }
    public string? ImageUrl { get; set; }
}
