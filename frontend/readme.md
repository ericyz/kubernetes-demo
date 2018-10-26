### Run without Docker
npm install
npm run build
npm start

### Command
docker build . -t k8s-demo-frontend
docker run --rm --network=mybridge --name k8s-demo-frontend -p 3000:3000 -e BACKEND_ENDPOINT=http://k8s-demo-backend k8s-demo-frontend  
