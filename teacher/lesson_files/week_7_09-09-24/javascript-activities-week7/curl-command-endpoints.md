# In PowerShell, use this command:
curl -X GET http://localhost:3000/users

# If you want to see the headers as well, you can use:
curl -X GET -i http://localhost:3000/users

# To save the output to a file:
curl -X GET http://localhost:3000/users -o users.json