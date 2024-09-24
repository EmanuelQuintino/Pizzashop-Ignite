import { http, HttpResponse } from "msw";
import { SignInProps } from "../signIn";

export const signInMock = http.post<never, SignInProps>(
  "/authenticate",
  async ({ request }) => {
    const { email } = await request.json();

    if (email == "jonhdoe@email.com") {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          "Set-Cookie": "auth=sample-jwt",
        },
      });
    }

    return new HttpResponse(null, { status: 401 });
  },
);
