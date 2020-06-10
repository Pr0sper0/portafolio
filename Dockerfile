FROM node:lts-buster

WORKDIR /workspace/portfolio

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]