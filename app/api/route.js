export async function GET(req) {
    return new Response('Hello World!', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }