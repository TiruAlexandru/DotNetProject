using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR;

public class CommentHub(IMediator mediator) : Hub
{
    public async Task SendComment(AddComment.Command command)
    {
        var comment = await mediator.Send(command);

        await Clients.Group(command.ActivityId).SendAsync("ReceiveComment", comment.Value);
    }
    
    public override async Task OnConnectedAsync()
    {
        var httpContext = Context.GetHttpContext();
        var activitId = httpContext?.Request.Query["activityId"];

        if (string.IsNullOrEmpty(activitId)) throw new HubException("No activity with this id");

        await Groups.AddToGroupAsync(Context.ConnectionId, activitId!);

        var result = await mediator.Send(new GetComments.Query { ActivityId = activitId! });

        await Clients.Caller.SendAsync("LoadComments", result.Value);
    } 
}
