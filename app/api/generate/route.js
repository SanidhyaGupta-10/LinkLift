import clientPromise from "@/lib/mongodb"
// import { Truculenta } from "next/font/google" // Remove if unused

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("LinkLift")
    const collection = db.collection("url")

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'URL Already Exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'URL Shortened successfully' })
}