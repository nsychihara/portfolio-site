FROM nginx:alpine


ENV nome_teste="Portfolio Teste"


COPY . /usr/share/nginx/html


EXPOSE 8080














