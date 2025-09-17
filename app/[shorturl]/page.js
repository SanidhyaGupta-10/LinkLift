import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const { shorturl } = await params
    const client = await clientPromise
    const db = client.db("LinkLift")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl: shorturl })
    if (doc) {
        redirect(doc.url)
    }
    else{
        // Redirect to home page if short URL not found
        redirect('/')
    }

    return <div>My Post: {shorturl}</div>
}