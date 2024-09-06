# Differencse in making a put request with different tools

```js
// 1. Fetch API
fetch('/api/user/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John Doe' }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// 2. XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('PUT', '/api/user/1', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send(JSON.stringify({ name: 'John Doe' }));

// 3. Axios
axios.put('/api/user/1', { name: 'John Doe' })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// 4. jQuery
$.ajax({
  url: '/api/user/1',
  type: 'PUT',
  data: JSON.stringify({ name: 'John Doe' }),
  contentType: 'application/json',
  success: function(data) {
    console.log(data);
  }
});

// 5. HTML Form (with server-side handling)
<form action="/api/user/1" method="POST">
  <input type="hidden" name="_method" value="PUT">
  <input type="text" name="name" value="John Doe">
  <button type="submit">Update</button>
</form>
```
