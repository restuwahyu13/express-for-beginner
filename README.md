### Express Beginner Series

Berikut ini adalah **Basic** penggunaan **Framework Express** yang dimana ini saya buat khususnya untuk **Pemula**, untuk memudahkan agar bisa maju ke tahap selanjutnya dan juga semoga dengan adanya tutorial ini dapat membantu teman - teman khususnya yang sedang belajar **Nodejs** .

#### Run Application:

- install semua module dengan mengetikan `npm install` pada terminal
- jalankan dengan mengetik `npm start` atau `yarn start` pada terminal

#### Features:

- [x] **Template Engine**
- [x] **Authentication Passport**
- [x] **Auth Middleware JWT**
- [x] **Validation Form**
- [x] **Private Route**
- [x] **File Upload**
- [x] **Flash Message**
- [x] **Any More**

#### Endpoit Routes :

| Name | Route Name | Request Method |
| ----------------------- | ------------------|
|  Register                    | http://localhost:3000/user/register | POST
|  Login                    | http://localhost:3000/user/login | POST
|  Home                 | http://localhost:3000/  | GET
|  Logout                  | http://localhost:3000/resendtoken  | GET


#### How To Deploy Application:

+	install **Heroku CLI** terlebih dahulu [disini](https://bit.ly/3eHzVjH)
+	buka **terminal** ketikan `heroku login` pada **terminal**
+	buat nama domain anda sendiri dengan mengetikan `heroku create` di ikuti dengan nama yang anda inginkan
+	 ketikan `git Init` -> `git add .` -> `git commit -m` pada **terminal** jika ingin mendeploy aplikasi
+	kemudian tes aplikasi via local server **Heroku** dengan mengetikan `heroku local` jika sudah berjalan dengan lancar, tekan **CTRl + C** dan kemudian ketikan `git push heroku master`