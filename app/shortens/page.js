"use client"
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState(false);

  const generate = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("");
        setshorturl("");
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
  <div className="p-4 sm:p-8 mx-auto max-w-md sm:max-w-lg text-center mt-10 sm:mt-20 rounded-lg shadow-lg ">
    <h1 className="text-2xl sm:text-3xl font-bold ">Shorten Your Links</h1>
    <p className="mt-3 sm:mt-4 text-base sm:text-lg ">Paste your long URL below to get started:</p>
    <div>
      <form className="mt-4 flex flex-col gap-2" onSubmit={generate}>
        <input
          onChange={(e) => { seturl(e.target.value) }}
          value={url}
          type="text"
          placeholder="Enter your URL"
          className="border p-2 w-full focus:outline-teal-300 rounded-lg bg-white text-black text-sm sm:text-base"
        />
        <input
          onChange={(e) => { setshorturl(e.target.value) }}
          value={shorturl}
          type="text"
          placeholder="Enter your preferred short URL Text"
          className="border p-2 w-full focus:outline-teal-300 rounded-lg bg-white text-black text-sm sm:text-base"
        />
        <button
          type="submit"
          className="relative px-4 py-2 mt-2 font-semibold text-white rounded-lg 
          bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 
          bg-[length:200%_200%] animate-gradient-x 
          shadow-lg hover:scale-105 transition-transform duration-300 w-full"
        >
          Generate
        </button>
      </form>
    </div>
    {generated && (
      <>
        <span className="font-bold text-lg block mt-4 text-slate-800">Your URL's</span>
        <code className="p-2 block break-all">
          <Link target="_blank" href={generated} className="text-blue-600 underline">{generated}</Link>
        </code>
      </>
    )}
    </div>
)
}

export default Page;