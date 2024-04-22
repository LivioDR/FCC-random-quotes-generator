const getRandomQuote = async() => {
    const requestUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    let response = await fetch(requestUrl).then(res => res.json())
    
    const numOfQuotes = response.quotes.length
    const index = (Math.floor(Math.random() * numOfQuotes))
    return response.quotes[index]
}
export default getRandomQuote