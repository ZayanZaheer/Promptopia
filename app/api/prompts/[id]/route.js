// GET (Read)
import { connectToDB } from "@utils/database";
import Prompts from "@models/prompts";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        console.log("Connected to database successfully");

        const prompts = await Prompts.findById(params.id).populate('creator');
        if(!prompts) return new Response("Prompt not found", {status:404})
        console.log("Fetched Prompts:", prompts);  // Log what you fetch
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error('Error fetching prompt:', error);
        return new Response("Failed to fetch prompt", { status: 500 });
    }
};

// PATCH (Update)
export const PATCH = async (request , {params}) => {
    try{
        await connectToDB();
        const {prompt, tag} = await request.json();
        const existingPrompt = await Prompts.findById(params.id);
        if(!existingPrompt) return new Response("Prompt not found", {status:404})
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), {status:200})
    }
    catch(error){
        return new Response("Failed to update prompt", {status:500})
    }
}
// DELETE (Remove)
export const DELETE = async (request, {params}) => {
    try{
        await connectToDB();
        await Prompts.findByIdAndRemove(params.id);
        return new Response("Prompt deleted Succesfully", {status:200})
    }
    catch(error){
        return new Response ("Failed to delete prompt", {status:500})
    }
}