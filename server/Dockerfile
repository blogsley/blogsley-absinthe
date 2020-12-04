FROM elixir:latest as dev

RUN apt-get update && \
    apt-get install -y direnv && \
    apt-get install -y postgresql-client && \
    apt-get install -y inotify-tools && \
    apt-get install -y nodejs && \
    curl -L https://npmjs.org/install.sh | sh && \
    mix local.hex --force && \
    mix archive.install hex phx_new && \
    mix local.rebar --force

#COPY .envrc .envrc
#RUN direnv allow

ENV APP_HOME /app
#RUN mkdir $APP_HOME
RUN mkdir $APP_HOME && useradd -d $APP_HOME -u 1000 blogsley && chown -R blogsley $APP_HOME
#USER blogsley
WORKDIR $APP_HOME

#CMD ["mix", "phx.server"]
ENTRYPOINT ["bash", "./startdev.sh"]