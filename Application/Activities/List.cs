﻿using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application;

public class List
{
    public class Query : IRequest<List<Activity>>
    {

    }

    public class Handler(DataContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            
            return await context.Activities.ToListAsync();
        }
    }
}
