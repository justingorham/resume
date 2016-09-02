FROM node:6.5
MAINTAINER justingorham@gmail.com
RUN npm install hackmyresume -g \
    && mkdir /workdir \
    && mkdir /resumedir
WORKDIR /resumedir
COPY resume.json .
VOLUME /workdir
CMD hackmyresume BUILD resume.json TO /workdir/README.md -t positive \
    && hackmyresume BUILD resume.json TO /workdir/resume.all -t positive --pdf none