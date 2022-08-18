FROM erlang:latest

# Elixir
# elixir expects utf8.
ENV ELIXIR_VERSION="v1.13.3" \
	LANG=C.UTF-8

RUN set -xe \
	&& ELIXIR_DOWNLOAD_URL="https://github.com/elixir-lang/elixir/archive/${ELIXIR_VERSION}.tar.gz" \
	#&& ELIXIR_DOWNLOAD_SHA256="03afed42dccf4347c4d3ae2b905134093a3ba2245d0d3098d75009a1d659ed1a" \
	&& curl -fSL -o elixir-src.tar.gz $ELIXIR_DOWNLOAD_URL \
	#&& echo "$ELIXIR_DOWNLOAD_SHA256  elixir-src.tar.gz" | sha256sum -c - \
	&& mkdir -p /usr/local/src/elixir \
	&& tar -xzC /usr/local/src/elixir --strip-components=1 -f elixir-src.tar.gz \
	&& rm elixir-src.tar.gz \
	&& cd /usr/local/src/elixir \
	&& make install clean \
	&& find /usr/local/src/elixir/ -type f -not -regex "/usr/local/src/elixir/lib/[^\/]*/lib.*" -exec rm -rf {} + \
	&& find /usr/local/src/elixir/ -type d -depth -empty -delete

#CMD ["iex"]

# Phoenix
RUN apt-get update && \
    apt-get install -y direnv && \
    apt-get install -y postgresql-client && \
    apt-get install -y inotify-tools && \
    apt-get install -y nodejs && \
    curl -L https://npmjs.org/install.sh | sh && \
    mix local.hex --force && \
    mix archive.install hex phx_new && \
    mix local.rebar --force

ENV APP_HOME /app
RUN mkdir $APP_HOME && useradd -d $APP_HOME -u 1000 blogsley && chown -R blogsley $APP_HOME
#USER blogsley
WORKDIR $APP_HOME

ENTRYPOINT ["bash", "./entrypoint.sh"]