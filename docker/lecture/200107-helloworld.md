## 도커 간단 예제
> 커맨드 입력창에서 예시 하나를 작성해보자

우선 git 을 이용하여 github 에서 Dockerfile 을 
```shell
$ git clone https://github.com/docker/doodle.git
```

Now let's build and tag a Docker image.
A Docker image is a private filesystem, just for your container. It provides all the files and code your container will need. Running the docker build command creates a Docker image using the Dockerfile. This built image is in your machine's local Docker image registry.
```shell
$ cd doodle\cheers2019
$ docker build -t <dockerID>/cheers2019 .
```

Great! Now let's run your first container.
Running a container launches your software with private resources, securely isolated from the rest of your machine.
```shell
$ docker run -it --rm <dockerID>/cheers2019
```

Share your image on Docker Hub
Once you're ready to share your container with the world, push the image that describes it to Docker Hub.
```shell
$ docker login
$ docker push <dockerID>/cheers2019
```