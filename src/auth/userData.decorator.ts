import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

/**
 * Access the user data from the request object i.e `req.user`.
 */
function userFactory(ctx: ExecutionContext): User {
  const contextType = ctx.getType();
  if (contextType === 'http') {
    // do something that is only important in the context of regular HTTP requests (REST)
    const { user } = ctx.switchToHttp().getRequest();
    return user;
  }
  throw new Error('Invalid context');
}

export const UserData = createParamDecorator<undefined, ExecutionContext, User>(
  (data, ctx: ExecutionContext) => userFactory(ctx)
);
