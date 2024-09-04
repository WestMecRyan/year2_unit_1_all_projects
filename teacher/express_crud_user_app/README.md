## Instructions September 4, 2024
- destroy `other_js_topics` in `unit 1`
- destroy `express-form-app`
- from `week6-projects/student/express_crud_user_app/`
> run `npm i`

- make two terminal windows. The can both be in the same path as above.
> run `npm run client` in one terminal
> run `npm run server` in the other terminal

### teacher note
We can run both scripts from the root of the project because the script gives relative paths to the necessary files for each part
``` json
    "server": "nodemon server/index.js",
    "client": "node browser-sync.js"
```