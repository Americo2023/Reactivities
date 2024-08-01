using MediatR;
using Persistence;

namespace Application;

public class Delete
{
    public class Command: IRequest<Result<Unit>>
    {
        public Guid Id { get; set; }
    }

    public class Handler(DataContext context) : IRequestHandler<Command,Result<Unit>>
    {
        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync(request.Id);

            if (activity == null) return null;

            context.Remove(activity);

            var result = await context.SaveChangesAsync() > 0;

            if (!result) return Result<Unit>.Failure("Failed to delete activity");

            return Result<Unit>.Success(Unit.Value);

        }
    }
}
