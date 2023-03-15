# Documentation Stunting API

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

Set environment variables:

```bash
cp .env.example .env
```
buka .env kemudian modifikasi environment:
```bash
// mode development
NODE_ENV=development

DB_NAME_DEV=
DB_USERNAME_DEV=
DB_PASSWORD_DEV=
DB_PORT=5432
DB_HOSTNAME_DEV=localhost

PORT=8080

JWT_SECRET=
JWT_ACCESS_EXPIRATION_MINUTES=
JWT_REFRESH_EXPIRATION_DAYS=
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=

TOKEN_TYPE_REFRESH=refresh
TOKEN_TYPE_ACCESS=access
TOKEN_TYPE_RESET_PASSWORD=resetPassword
TOKEN_TYPE_VERIFY_EMAIL=verifyEmail

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
Catatan : untuk upload file saya menggunakan `cloudinary`, sehingga perlu untuk membuat akun pada `cloudinary`

## API Documentation
Berikut ini list dari APIs untuk menjalankannya. Pastikan server / project dalam keadaan running (default `port` : `8080`) dan `http://localhost:8080`.

### API Endpoints
List of available routes:

**Auth routes** :\
`POST /auth/register` - register (`default role : kader`)\
`POST /auth/register-nakes` - register nakes\
`POST /auth/login` - login\
`GET /auth/refresh-tokens?token={refreshToken}` - refresh auth tokens\
`POST /auth/logout?token={refreshToken}` - logout

**Toddler / Balita routes** :\
`POST /toddlers` - add toddler / balita\
`GET /toddlers` - get all 

**Week routes** :\
`GET /weeks` - get all week\
`POST /weeks` - create week

**Toddler / Balita routes** :\
`POST /toddlers` - add toddler / balita\
`GET /toddlers` - get all\
`DELETE /toddlers/:toddler_id` - delete balita

**Kader routes** :\
`GET /kader/listing-stunting` - list balita stunting / balita\
`GET /kader/listing-stunting-by-kader` - get balita stunting by kader 
`DELETE /kader/:user_id` - delete kader

**Nakes routes** :\
`GET /nakes` - list nakes\
`PUT /nakes/validate-toddler/:toddlerNik` - validate status stunting\
`GET /nakes/toddler-sign` - list balita yang di asign ke nakes\
`GET /progress/:toddlerId` - progres balita by id

**Measurement routes** :\
`GET /measurements` - get all measurement toddler\
`POST /measurements` - add  measurement toddler