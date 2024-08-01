using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application;

public class List
{
    public class Query : IRequest<Result<List<Activity>>>
    {

    }

    public class Handler(DataContext context) : IRequestHandler<Query, Result<List<Activity>>>
    {
        public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
        {

            return Result<List<Activity>>.Success(await context.Activities.ToListAsync());
        }
    }
}
