// import { connectToDB } from "@utils/database";
// import Prompts from "@models/prompts";

// export const GET = async (request) => {
//     try {
//         await connectToDB()

//         const prompts = await Prompts.find({}).populate('creator')
//         console.log(prompts);
//         return new Response(JSON.stringify(prompts), { status: 200 })
//     } catch (error) {
//         console.error('Error fetching prompts:', error);
//         return new Response("Failed to fetch all prompts", { status: 500 })
//     }
// } 


import { connectToDB } from "@utils/database";
import Prompts from "@models/prompts";

export const GET = async (request) => {
    try {
        await connectToDB();
        console.log("Connected to database successfully");

        const prompts = await Prompts.find({}).populate('creator');
        console.log("Fetched Prompts:", prompts);  // Log what you fetch
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error('Error fetching prompts:', error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
