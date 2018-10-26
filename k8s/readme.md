### command
eval $(minikube docker-env)

minikube service demo-frontend-svc --url

kubectl deployment rollout undo --