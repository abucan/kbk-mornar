export async function GET(req: Request, res: Response) {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    return Response.json({
      error: 'Page ID or Access Token is missing',
    });
  }

  const queryFields = `full_picture,message,comments.limit(1).summary(true),likes.limit(1).summary(true),created_time`;

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pageId}/posts?fields=${queryFields}&access_token=${accessToken}`
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error fetching data:', error);

    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
