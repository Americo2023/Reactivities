﻿using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application;

public class Edit
{
    public class Command : IRequest
    {
        public Activity Activity { get; set; }
    }

    public class Handler(DataContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync(request.Activity.Id);

            mapper.Map(request.Activity, activity);

            await context.SaveChangesAsync();
        }
    }
}
