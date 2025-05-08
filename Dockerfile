# Root Dockerfile

### Stage 1: Build Client ###
FROM node:22-alpine AS client-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

### Stage 2: Build Server ###
FROM node:22-alpine AS server-builder
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .

### Stage 3a: Final Client Image ###
FROM node:22-alpine AS client-app
WORKDIR /app
COPY --from=client-builder /app/client ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

### Stage 3b: Final Server Image ###
FROM node:22-alpine AS server-app
WORKDIR /app
COPY --from=server-builder /app/server ./
EXPOSE 3001
CMD ["npm", "run", "dev"]
