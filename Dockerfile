FROM node:12-alpine as preparation

WORKDIR /app
COPY ./package.json .

# Create temporary package.json where version is set to 0.0.0
# – this way the cache of the build step won't be invalidated
# if only the version changed.

RUN ["node", "-e", "\
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));\
fs.writeFileSync('package.json', JSON.stringify({ ...pkg, version: '0.0.0' }));\
"]

# Do the npm install or yarn install in the full image
FROM node:12-alpine AS builder
WORKDIR /app
COPY --from=preparation /app/package.json  .
COPY ./yarn.lock .
RUN yarn --frozen-lockfile

COPY . .
ENV NODE_ENV=production
RUN yarn build
RUN yarn --frozen-lockfile --production

FROM node:12-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY ./package.json .
EXPOSE 3000
CMD ["yarn", "start"]