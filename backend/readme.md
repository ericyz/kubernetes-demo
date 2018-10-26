### Command
docker network create -d bridge mybridge
docker build . -t k8s-demo-backend
docker run --rm --network=mybridge --name k8s-demo-backend -d -p 5000:80 k8s-demo-backend  
docker network inspect mybridge

### Clean up
docker network rm bridge mybridge