# nodejs-demo-app: CI/CD with GitHub Actions + Docker

A small Node.js web app with a complete CI/CD pipeline. Every push to `main` automatically
**tests → builds a Docker image → pushes it to DockerHub**.

## Tech stack
GitHub, GitHub Actions, Node.js 20, Docker, DockerHub

## Project structure
```
.
├── .github/workflows/main.yml   # CI/CD pipeline
├── test/app.test.js             # automated tests (node:test)
├── app.js                       # request handler
├── server.js                    # starts the HTTP server
├── Dockerfile
├── .dockerignore
└── package.json
```

## Pipeline flow
1. **test job**: checkout, setup Node 20, `npm install`, `npm test`
2. **build-and-push job** (runs only if tests pass): login to DockerHub, build image, push with tags `latest` and the commit SHA

## Setup
1. Create a DockerHub access token (Account Settings → Security → New Access Token).
2. In the GitHub repo: Settings → Secrets and variables → Actions → add:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`
3. Push to `main`. Watch the run in the **Actions** tab.

## Run locally
```bash
npm install
npm test
npm start                      # http://localhost:3000

docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```

## Screenshots
Add screenshots of: successful workflow run, DockerHub repo with pushed image, app running in browser.
