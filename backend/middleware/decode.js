const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzUzZmI3ZTBjMzNiMzUxOWNkZmIzIn0sImlhdCI6MTY5MjY4NzIzN30.MYDNdcFuZbWZQpSWxHyNyuq-QGhpyoZ02cxgL4UobSE';
const tokenDecodablePart = token.split('.')[1];
const decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
console.log(decoded)