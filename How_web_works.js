// Part One: Solidify Terminology
// In your own terms, define the following terms:

// What is HTTP?
// Hyper Text Transfer Protocol, the protocol that is used to communicate between the server and the client

// What is a URL? Uniform Resource Locator: an address for some internet resource

// What is DNS? Domain Name System is like a phone book for the web, takes human readable URLS and turns them into IP addresses

// What is a query string? A string at the end of the URL, after ?, takes in key-value pairs, multiple queries are 
// seperated by &

// What are two HTTP verbs and how are they different?
// GET requests from the server
// POST sends data to the server


// What is an HTTP request? A request from the server from a client that uses the HTTP protocol

// What is an HTTP response? A response from the server to a client following the HTTP protocol

// What is an HTTP header? Give a couple examples of request and response headers you have seen.

// gives additional information on the request or repsonse
// request headers: httmp/text, cookies, date of last visit, host, cache control
//response headers: cookies, cache control, content ttype, last modifier

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// the browser make the name of the DNS into an IP address
// browser sends a request to the server including headers
// servers sends a response typically HtML with a status code
// the browser makes a dom with the received HTML and finds any other resources needed 
// The browser makes seperate requests for those resources and recieves responses for each. 


// Part Two: Practice Tools
// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
// curl https://icanhazdadjoke.com/search\?term\=pirate    
// curl is a command-line tool used to send data to or receive data from a server. In particular, it can be used to make HTTP requests.

// Use dig to find what the IP address is for icanhazdadjoke.com
// On the Terminal: dig icanhazdadjoke.com
// Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser. DONE

