# Boilerplate Next.js + PostgreSQL

A full-stack starter template using Next.js (App Router), Prisma ORM, and PostgreSQL.

---

## 🎯 Features

* **Fullstack**: API routes & React UI in one codebase
* **Authentication**: JWT & session via HTTP-only cookies
* **Database**: Prisma connected to PostgreSQL
* **Dockerized**: Dockerfile & docker-compose for local development
* **Validation**: Joi schema for request payloads
* **Middleware**: Auth, role-check, and more reusable functions

---

## 🚀 Quick Start / เริ่มต้นอย่างรวดเร็ว

1. Clone repository / โคลนโปรเจกต์

   ```bash
   git clone https://github.com/your-org/boilerplate-nextjs-pg.git
   cd boilerplate-nextjs-pg
   ```

2. Create `.env` based on `.env.example` / สร้างไฟล์ `.env` ตามตัวอย่าง

   ```env
   PORT=3099
   PREFIX=/nextjs-test
   VERSION_PATH=api/v1

   POSTGRES_USER=test
   POSTGRES_PASSWORD="test1234$$"
   POSTGRES_DB=nextjs_test
   DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public"

   JWT_SECRET=your_jwt_secret
   ```

3. Run with Docker Compose / รันด้วย Docker Compose

   ```bash
   docker compose up --build
   ```

   * Frontend: [http://localhost:3000](http://localhost:3000)
   * Backend API: [http://localhost:3099/nextjs-test/api/v1](http://localhost:3099/nextjs-test/api/v1)
   * PostgreSQL: localhost:5432

4. Development / พัฒนาแบบปกติ

   ```bash
   npm install
   npm run dev
   ```

---

## 📂 Project Structure / โครงสร้างโปรเจกต์

```
├── app/                       # Next.js App Router pages & API
│   ├── api/                   # API routes
│   └── login/ dashboard/ ...  # UI pages
├── features/                  # Business logic by domain
│   └── auth/                  # Auth controller, service, model, schema
├── middleware/                # request handlers (auth, validation...)
├── lib/                       # Prisma client, helpers
├── prisma/                    # Prisma schema & migrations
├── docker/                    # entrypoint scripts
├── Dockerfile                 # multi-stage build for fullstack
├── docker-compose.yml         # dev environment (db + backend + frontend)
└── README.md
```

---

## ⚙️ Scripts

| Command                  | Description                       |
| ------------------------ | --------------------------------- |
| `npm run dev`            | Run Next.js in development mode   |
| `npm run build`          | Build the app for production      |
| `npm run start`          | Start the production server       |
| `npx prisma migrate dev` | Create & run migrations in dev DB |
| `npx prisma studio`      | Open Prisma Studio GUI            |

---

## 🐳 Docker / คำสั่ง Docker

* **Build & run all**

  ```bash
  docker compose up --build
  ```
* **Bring down**

  ```bash
  docker compose down
  ```

---

## 📖 Learn More / เรียนรู้เพิ่มเติม

* Next.js Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
* Prisma Docs: [https://www.prisma.io/docs](https://www.prisma.io/docs)
* Docker Docs: [https://docs.docker.com/](https://docs.docker.com/)

---

© 2025 Zero Bomb / พัฒนาโดย Zero Bomb
