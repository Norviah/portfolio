import { Repos } from '../schemas';

import { GET } from '../utils/GET';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../structs';

export type GetUserRepoOptions = {
  /**
   * The username to fetch.
   */
  username: string;
};

/**
 * Search for repositories by a user.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/search-movie
 * @param options Options for the request.
 * @returns The response.
 */
export async function repos(options: GetUserRepoOptions): Promise<Repos> {
  return await GET({ path: `/users/${options.username}/repos`, schema: Repos });
}
