# Documentation

## Installation

Berikut ini langkah-langkah dalam menjalankan project  `stunting-api`
Clone repo stunting-api:

```bash
git clone http://github.com/mohamilin/stunting-api
cd stunting-api
```

Install dependencies:

```bash
npm install
```

Set  environment variables:

```bash
cp .env.example .env
```
# buka .env kemudian modifikasi environment:
```bash
NODE_ENV=development

DB_NAME_DEV=
DB_USERNAME_DEV=
DB_PASSWORD_DEV=
DB_PORT=5432 
DB_HOSTNAME_DEV=localhost

PORT=8001

JWT_SECRET=
JWT_ACCESS_EXPIRATION_MINUTES=
JWT_REFRESH_EXPIRATION_DAYS=
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=

TOKEN_TYPE_REFRESH=refresh
TOKEN_TYPE_ACCESS=access
TOKEN_TYPE_RESET_PASSWORD=resetPassword
TOKEN_TYPE_VERIFY_EMAIL=verifyEmail
```