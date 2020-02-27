## Cakes By Toni

### Deployment
1. Copy the environment file: `cp .env.example .env`
2. Update `.env` variables:
    ```
    APP_NAME="Cakes By Toni"
    APP_ENV=production
    ...
    APP_DEBUG=false
    APP_URL=https://cakesbytoni.com
    ...
    DB_DATABASE=<db-name>
    DB_USERNAME=<db-username>
    DB_PASSWORD=<db-password>
    ...
    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.mailgun.org
    MAIL_PORT=2525
    MAIL_USERNAME=postmaster@cakesbytoni.com
    MAIL_PASSWORD=
    MAIL_ENCRYPTION=
    MAILGUN_DOMAIN=www.cakesbytoni.com
    MAILGUN_SECRET=
    MAIL_FROM_ADDRESS=toni@cakesbytoni.com
    MAIL_FROM_NAME="Cakes By Toni"
    ADMIN_EMAIL=tstewart13311@gmail.com
    ```
3. Install PHP dependencies: `composer install`
4. Auto-generate key for the project: `php artisan key:generate`
5. Clear cached config code, such as `.env` variables that may have changed: `php artisan config:clear`
6. Clear view and route cache: `php artisan cache:clear`
7. Run migrations and seed the database: `php artisan migrate --seed`
8. Install JavaScript dependencies and build for production: `npm install && npm run production`
