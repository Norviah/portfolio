import { User } from '../schemas';

import { GET } from '../utils/GET';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../structs';

export type GetUserOptions = {
  /**
   * The username to fetch.
   */
  username: string;
};

/**
 * Search GitHub users by their username.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/search-movie
 * @param options Options for the request.
 * @returns The response.
 */
export async function user(options: GetUserOptions): Promise<User> {
  return await GET({ path: `/users/${options.username}`, schema: User });
}
