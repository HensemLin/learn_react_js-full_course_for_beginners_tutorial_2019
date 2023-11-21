const Joke = (props) => {    
    return (  
        <div>
            <p style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</p>  // if there is no question, display None
            <p>Punch line: {props.joke.punchline}</p>
            <hr /> 
        </div>
    );
}
 
export default Joke;