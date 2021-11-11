# dockerReverseProxy
Toy project to understand NGINX reverse-proxy better and how to build and run numerous docker images.

## Learnings of NGINX

- What is NGINX?
    - According to the NGINX website,
        - "Nginx, stylized as NGINX, nginx or NginX, is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."
- Why NGINX?
    - Extremely fast *(speed)*
    - Designed to accommodate to many requests per second *(scale)*
    - Lightweight *(memory-light + hassle-free)*
    - Optimized for serving static-files
    

---

## How to build and run Docker images?

1. Building NGINX Image
    1. Go to the root directory (i.e. \dockerReverseProxy )
    2. `cd nginx` 
    3. `docker build -t nginxproxy .`      
    4. `cd ..`
2. Building Node Image
    1. `cd node`
    2. `docker build -t nodeserver .`        
    3. `cd ..`
3. Running Docker Images (From root folder i.e. \dockerReverseProxy)
    1. `docker-compose -up`

---

## Testing Reverse Proxy

1. Go to `localhost:8888`
2. See the welcome page  
3. Try accessing `[localhost:8888/getNumTimesCalledMainRoute](http://localhost:8888/getNumTimesCalledMainRoute)` once 
4. Refresh the page to note the increment of the number of times it was visited
5. Now try accessing `localhost:8888/getNumTimesCalled2ndRoute`. Note that it only shows it has been visited once, even though this route shares the same server-side code as the previous route.

- This means there are 2 different servers. Therefore, the reverseProxy has successfully worked, since it can direct requests made to [localhost:8888](http://localhost:8888) to different servers listening at port 3000. (Refer to my Node.js code in /node)
