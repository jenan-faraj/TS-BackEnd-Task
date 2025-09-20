# Social App API

1. Copy `.env.example` to `.env` and set values.
2. Run `npm install` for dependencies and `npm run dev` for development.
3. Use Postman to test endpoints under `/api`.

Endpoints examples:
- POST /api/auth/signup
- POST /api/auth/signin
- GET /api/posts
- POST /api/posts (auth)
- POST /api/comments/:postId (auth)
- POST /api/likes/:postId (auth)