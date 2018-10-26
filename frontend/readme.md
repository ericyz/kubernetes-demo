### Command
docker network create -d bridge mybridge
docker build . -t k8s-demo-frontend
docker build . -t k8s-demo-backend
docker run --rm --network=mybridge --name k8s-demo-backend -d -p 5000:80 k8s-demo-backend  
docker network inspect mybridge
docker run --rm --network=mybridge --name k8s-demo-frontend -p 3000:3000 -e BACKEND_ENDPOINT=http://k8s-demo-backend k8s-demo-frontend  

