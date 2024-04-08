import { ParseError, RateLimitError, UnknownResourceError } from '../structs';

import type { ZodError, ZodSchema, z } from 'zod';

const BASE_URL = 'https://api.github.com' as const;

export type ApiOptions<Schema extends ZodSchema> = {
  /**
   *
   */
  path: `/${string}`;

  /**
   * The schema to validate the response against.
   */
  schema: Schema;
};

/**
 * Calls a GET request to GitHub's API.
 *
 * This method will fetch the data from the specified path with the given
 * queries and validate the response with the given schema.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If the desired resource does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @template Schema The schema to validate the response against.
 * @param options The options for the request.
 * @returns The parsed response.
 */
export async function GET<Schema extends ZodSchema>({
  path: rawPath,
  schema,
}: ApiOptions<Schema>): Promise<z.infer<Schema>> {
  const path: string = `${BASE_URL}${rawPath}`;

  const response = await fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new UnknownResourceError();
    }

    if (response.status === 401) {
      throw new RateLimitError();
    }

    throw new Error(response.statusText);
  }

  try {
    return schema.parse(await response.json());
  } catch (error) {
    console.log(error);
    throw new ParseError(path);
  }
}
