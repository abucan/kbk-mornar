export async function GET(req: Request, res: Response) {
  const pageId = '652350221455822'; // Pass the Page ID as a query parameter
  const accessToken =
    'EAAomJjc9k6gBO48nxh3RXSH6LaimHZB4x5av24VgwAHHN0P9IBoscvamahwKDMf9ufJY4YsO5mdXl1qpy0QjekCCzPbtZAONzZAVRihPs4SzNxCdnTrdxEqZBCjZAe5H4JiegooD2PBboKwuIBv0ZCZBF0ZAQu0brkccodr3EoUK5JRVViSxlOZBzifIDu2ieDPUV';

  if (!pageId || !accessToken) {
    return Response.json({
      error: 'Page ID or Access Token is missing',
    });
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pageId}/posts?fields=message,full_picture,created_time&access_token=${accessToken}`
    );
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
