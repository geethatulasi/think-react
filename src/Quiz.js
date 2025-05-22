import React, { useState } from "react";

function handleTextChange(e,setAnswers){
    const {name, value} = e.target;
    setAnswers((prev)=>({
        ...prev,
        [name]: value,
    }))    
}
async function handleSubmit(e,answers,original_answers,count,setCount) {
    e.preventDefault();
    try{
        await submitForm(answers,original_answers,count,setCount);
        // setStatus('success')
    }
    catch(error){
        // setStatus('typing')
    }
}
function QuizForm(){
    const original_answers = {q1: 'finland', q2: 'Guinness', q3: 'Amazon'}
    // const [status, setStatus] = useState('empty')
    const [count, setCount] = useState(0)
    const [answers, setAnswers] = useState({})
    // if(status === 'success'){
    //     return <h1>That's Correct Answer</h1>
    // }
    return(
        <>
            <h1>Quiz Starts!</h1>
            <form onSubmit={(e)=>{handleSubmit(e,answers,original_answers,count,setCount)}}>
                <label>
                    Which country drinks the most coffee per capita?
                    <input type="text" name="q1" value={answers.q1 || ''} onChange={(e)=>{handleTextChange(e,setAnswers)}} />
                </label>
                <br />
                <label>
                    What is the world’s best-selling stout beer?
                    <input type="text" name="q2" value={answers.q2 || ''} onChange={(e)=>{handleTextChange(e, setAnswers)}} />
                </label>
                <br />
                <label>
                    Which company was originally called "Cadabra"?
                    <input type="text" name="q3" value={answers.q3} onChange={(e)=>{handleTextChange(e, setAnswers)}} />
                </label>
                <button>Submit</button>
                {count &&
                    <p className="error" style={{color: 'green', fontSize: '18px'}}>You got {count} marks!</p>
                }
            </form>
        </>
    )
}

function submitForm(answers,original_answers,count,setCount){
    const answers_marks = {}
    return new Promise((resolve)=>{
        setTimeout(()=>{
           Object.entries(answers).forEach(([key, value]) => {
            // console.log(answers)
                if (
                value &&
                original_answers[key] &&
                value.toLowerCase() === original_answers[key].toLowerCase()
                ) {
                    answers_marks[key] = 1;
                    setCount(Object.values(answers_marks).reduce((sum,value)=> sum + value, 0))
                    // console.log(answers_marks);
                    console.log(`correct ${count}`)
                }
                resolve();
            })
        },1500)
        // console.log(answers_marks)
    })
}
export default QuizForm;