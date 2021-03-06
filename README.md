# Be the Hero

Project that helps non-governmental organizations to publish requests and find heroes to save them. The requests may have a reward. This project is a complete solution with backend, frontend, and mobile application. The organization put its requests in frontend, and a hero help this organization accessing the mobile application.

## Stack

### Backend

- Node.js
- Express (create HTTP server)
- Crypto (generate hexadecimal ids)
- Knex (migrations in database)
- SQLite
- Celebrate (validations)
- Jest (unit tests) 
- SuperTest (integration tests)

### Frontend

- React
- Axios (request API)

### Mobile
- React Native
- Axios
- Expo (get native components from OS)

## Installation/Usage

#### Backend

```bash
cd backend/
npm install
npm start
```
You can access it using the address [http://localhost:3333](http://localhost:3333).


#### Frontend
```bash
cd frontend/
npm install
npm start
```

You can access it using the address [http://localhost:3000](http://localhost:3000). Be sure that frontend application has access to correct backend URL (you can change in services/api.js file).

#### Mobile
```bash
cd mobile/
npm install
expo start
```
To run the mobile app in your phone, download the expo app in Play Store (Android) or App Store (iOS) and scan the QR code in the page that will be shown on browser. Be sure that mobile application has access to correct backend URL (you can change in services/api.js file. In case of failures in this connection, see this [link](https://github.com/Rocketseat/semana-omnistack-faq?files=1#app-mobile)).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

This application was created in Omnistack week.