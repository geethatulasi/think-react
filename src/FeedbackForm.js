import React, { useState } from "react";

// example for choosing the state structure
function FeedbackForm(){
    const [text,setText] = useState('')
    const [isSending,setSending] = useState(false)
    const [isSent, setSent] = useState(false)
    async function handleSubmit(e){
        e.preventDefault();
        setSending(true);
        await SubmitEvent(text);
        setSending(false);
        setSent(true);
    }
    if(isSent){
        return <h1>Thank you for your feedback!</h1>
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>How was your stay at the Prancing Pony?</h2>
            <textarea 
                disabled={isSending}
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button disabled={isSending} type="submit">Send</button>
            {isSending && <p>Sending.....</p>}
        </form>
    )
}

function SubmitEvent(text){
    return new Promise(resolve=>{
        setTimeout(resolve, 2000)
    })
}
export default FeedbackForm;