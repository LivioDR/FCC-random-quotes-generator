import React, {useState, useEffect} from "react";
import getRandomQuote from "../services/getRandomQuote";
import NewQuoteButton from "./NewQuoteButton";
import TweetButton from "./TweetButton";
import { Della_Respira } from 'next/font/google'
const della = Della_Respira({weight: "400", subsets: ["latin"]})


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '35%',
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
    padding: '10%',
    fontSize: '1.5em',
    transition: 'opacity 1s',
    fontSize: '1.5em',
}

const authorStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '5% 10% 5% 0%',
    transition: 'opacity 1s',
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2em',
    backgroundColor: 'black',
    color: 'lightblue',
    cursor: 'pointer',
    padding: '3%',
    fontSize: '1.5em',
    textAlign: 'center',
    height: '2em',
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
            quoteContainer.innerText = quote
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
                <div id="author" className={della.className} style={authorStyle}>
                    {/* TO BE POPULATED WITH JS */}
                </div>
                <div id="btnContainer" style={btnContainerStyle}>
                    <TweetButton id="tweet-quote" url={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" ' + author)} style={btnStyle}>
                        <i class="fi fi-br-bird"></i>
                    </TweetButton>
                    <NewQuoteButton id={"new-quote"} func={setResponse} style={btnStyle}>
                        <i class="fi fi-br-rotate-right"></i>
                    </NewQuoteButton>
                </div>
            </div>  
        </div>
    )
}

export default QuoteBox