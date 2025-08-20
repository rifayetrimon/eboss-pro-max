import { GoogleGenerativeAI } from '@google/generative-ai';
import { type NextRequest, NextResponse } from 'next/server';

const API_KEY = 'AIzaSyBGm3mj0DOnQAE8vNIs64JXzLj6oz_bNI8';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        // Logs
        // console.log('Gemini text output:', text);
        // console.log('Full Gemini API raw result:', JSON.stringify(result, null, 2));

        return NextResponse.json({ text });
    } catch (error: any) {
        console.error('Error calling Gemini API:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to generate response' }, { status: 500 });
    }
}
