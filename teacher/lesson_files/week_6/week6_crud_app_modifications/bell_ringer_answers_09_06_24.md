1. Q: What are the main parts of the request-response cycle in a web application?
   A: The main parts of the request-response cycle are:

   - Client (usually a web browser) sends a request to the server
   - Server receives and processes the request
   - Server sends back a response
   - Client receives and processes the response (e.g., displays a web page)

2. Q: How does a server receive data from a form submitted with a POST request?
   A: When a form is submitted with a POST request, the server receives the form data in the request body. In Express.js, this data can be accessed using req.body after setting up appropriate middleware (like express.urlencoded for form data or express.json for JSON data).

3. Q: What is req.body in Express.js and when is it typically used?
   A: req.body is an object in Express.js that contains key-value pairs of data submitted in the request body. It's typically used when handling POST requests to access data submitted through forms or sent as JSON in the request body.

4. Q: What HTML attributes are necessary for a form to submit data properly?
   A: The essential HTML attributes for a form are:

   - action: specifies where to send the form data
   - method: specifies the HTTP method to use (GET or POST)
   - name: for each input field, to identify the data on the server side

   Example:
   <form action="/submit" method="POST">
     <input type="text" name="username">
     <input type="submit" value="Submit">
   </form>

5. Q: What's the difference between how data is sent in a GET request versus a POST request?
   A: In a GET request, data is sent as part of the URL in the query string. For example: /search?q=example
   In a POST request, data is sent in the body of the request, not visible in the URL.
   GET requests are typically used for retrieving data, while POST requests are used for submitting data to be processed.
