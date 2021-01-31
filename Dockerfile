FROM node:14

WORKDIR /muhittin_abinin_sitesi/

COPY src/ .

RUN npm install

EXPOSE 3000

CMD ["node","app.js"]