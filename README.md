rm -rf node_modules/

node -v
nvm ls
nvm i 12.16.0
nvm use 12.16.0

npm install
npm start

(bu sekilde calismazsa package-lock.json da yanina eklenerek silinebilir ve tekrar ayni paketler yuklenir)
rm -rf package-lock.json
