import React, {useState, useEffect} from "react";
import getRandomQuote from "../../services/getRandomQuote.js";
import NewQuoteButton from "./NewQuoteButton.jsx";
import TweetButton from "./TweetButton.jsx";
import { Della_Respira } from 'next/font/google'
const della = Della_Respira({weight: "400", subsets: ["latin"]})


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '500px',
    margin: '0 auto',
    padding: '0%',
}

const quoteBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    color: 'black',
    borderRadius: '10px',
    transition: 'height width 1s'
}

const textStyle = {
    padding: '10% 10% 5% 10%',
    fontSize: '1.75em',
    transition: 'opacity 1s',
}

const authorStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0% 10% 5% 0%',
    fontSize: '1.2em',
    transition: 'opacity 1s',
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.5em',
    height: '2.5em',
    backgroundColor: 'black',
    color: 'lightblue',
    cursor: 'pointer',
    padding: '3%',
    fontSize: '1.5em',
    textAlign: 'center',
    borderRadius: '10px',
}

const btnContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '5% 0%',
    height: '3em',
    alignItems: 'center',
}

const QuoteBox = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const setResponse = async() => {
        const data = await getRandomQuote()
        setQuote(data.quote)
        setAuthor(data.author)
    }

    useEffect(()=>{
        setResponse()
    },[])
    
    useEffect(() => {
        const quoteContainer = document.getElementById("text")
        const authorContainer = document.getElementById("author")

        quoteContainer.style.opacity = 0;
        authorContainer.style.opacity = 0;
        setTimeout(()=>{
            quoteContainer.innerHTML = `<i class="fi fi-ss-comment-quote"></i> ${quote}`
            authorContainer.innerText = `- ${author}`
            quoteContainer.style.opacity = 1
            authorContainer.style.opacity = 1
        },1000)

    },[quote, author])

    
    return(
        <div id="wrapper" style={containerStyle}>
            <div id="quote-box" style={quoteBoxStyle}>
                <div id="text" className={`${della.className}`} style={textStyle}>
                    {/* TO BE POPULATED WITH JS */}
                </div>
                <div id="author" style={authorStyle}>
                    {/* TO BE POPULATED WITH JS */}
                </div>
                <div id="btnContainer" style={btnContainerStyle}>
                    <TweetButton id="tweet-quote" url={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" ' + author)} style={btnStyle}>
                        <i className="fi fi-brands-twitter-alt"></i>
                    </TweetButton>
                    <NewQuoteButton id={"new-quote"} func={setResponse} style={btnStyle}>
                        <i className="fi fi-br-rotate-right"></i>
                    </NewQuoteButton>
                </div>
            </div>  
        </div>
    )
}

export default QuoteBox