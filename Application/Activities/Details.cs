using Domain;
using MediatR;
using Persistence;

namespace Application;

public class Details
{
    public class Query : IRequest<Result<Activity>>
    {
        public Guid Id { get; set; }
    }

    public class Handler(DataContext context) : IRequestHandler<Query, Result<Activity>>
    {
        public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync(request.Id);
            return Result<Activity>.Success(activity);
        }
    }
}
