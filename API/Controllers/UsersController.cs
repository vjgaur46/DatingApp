using System;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
[Authorize]
public class UsersController(IUserRepository userRepository) : BaseAPIController
{
  [HttpGet]
  public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
  {
    var users = await userRepository.GetMemberAsync();
    return Ok(users);
  }


  [HttpGet("{username}")]  //api/users/2
  public async Task<ActionResult<MemberDto>> GetUsers(string username)
  {
    var user = await userRepository.GetMemberAsync(username);
    if (user == null)
    {
      return NotFound();
    }
    return user;
  }
}
