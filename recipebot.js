import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

async function getCompletionWithMessages(messages, model = "gpt-3.5-turbo", temperature = 0 ) {
    const response = await openai.chat.completions.create({
        messages: messages,
        model: model,
        temperature: temperature
    });

    console.log(response);
    return response.choices[0].message["content"];
}

const testMessages =  [  
    {'role':'system', 'content':'You are an assistant that speaks like Shakespeare.'},    
    {'role':'user', 'content':'tell me a joke'},   
    {'role':'assistant', 'content':'Why did the chicken cross the road'},   
    {'role':'user', 'content':'I don\'t know'}  ]

getCompletionWithMessages(testMessages);