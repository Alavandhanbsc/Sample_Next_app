//feedback store
let storage = []

//handle post
export async function POST(req) {
    try {
        const body = await req.json()
        const { feedname, feedcontent, feedtime } = await body
        if (!feedname || !feedcontent) {
            return new Response(JSON.stringify({ error: "Field empty" }), { status: 400 })
        }
        storage.push({ name: feedname, content: feedcontent, time: feedtime })
        return new Response(JSON.stringify({ message: "data saved" }), { status: 200 })
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 })
    }
}

//handle get
export async function GET() {
    return new Response(JSON.stringify({ storage }), { status: 200 })
}