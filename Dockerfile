# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with NGINX

###C:\MKS_STORAGE_DRIVE\WORKING_ENVIRONMENT\ANGULAR_PROJECT_WS\dockerize-angular-app\dist\dockerize-angular-app\browser

FROM nginx:alpine
COPY --from=build /app/dist/dockerize-angular-app/browser /usr/share/nginx/html
##COPY dist/dockerize-angular-app/browser /usr/share/nginx/html
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
COPY nginx.conf /etc/nginx/conf.d/default.conf
