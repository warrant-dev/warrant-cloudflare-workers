import { WarrantClient } from "@warrantdev/warrant-node";

export interface Env {
    WARRANT_API_KEY: string;
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        if (request.method !== "POST" || !request.headers.get('content-type')?.includes('application/json')) {
            return new Response(JSON.stringify({
                error: "invalid_request"
            }), {
                status: 400,
            });
        }

        try {
            const warrant = new WarrantClient({
                apiKey: env.WARRANT_API_KEY,
            });

            const requestJson = await request.json();
            const sessionToken = await warrant.Session.createAuthorizationSession({
                /* @ts-ignore */
                userId: requestJson.userId,
            });

            return new Response(JSON.stringify({
                warrantSessionToken: sessionToken,
            }), {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
            });
        } catch (e) {
            console.log(e);
            return new Response(JSON.stringify(e), {
                status: 500,
            });
        }
    },
};
