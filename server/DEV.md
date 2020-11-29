Building the images

    docker-compose build

Bootstrapping the phoenix image/service

    alias mix="docker-compose run --rm phoenix mix"
    mix phx.new . --app blogsley

Or locally if you don't want a bunch of root owned files

    mix archive.install hex phx_new
    mix phx.new . --app blogsley

Basically

    mix local.hex --force && \
    mix local.rebar --force && \
    mix archive.install hex phx_new

Without assets

    mix phx.new blogsley --no-webpack --no-html

We are almost there! The following steps are missing:

    $ cd app

Then configure your database in config/dev.exs and run:

    $ mix ecto.create

Start your Phoenix app with:

    $ mix phx.server

You can also run your app inside IEx (Interactive Elixir) as:

    $ iex -S mix phx.server

@##@#$
    docker-compose run phoenix mix ecto.create
    docker-compose exec phoenix /bin/bash

    mix phx.gen.context Blog Post posts title:unique body

    mix phx.gen.context Accounts User users email:unique username:unique password password_hash

## Nuke the Database

Stop the containers

    ./bin/nuke

Start containers
Attach shell to phoenix container

    mix ecto.migrate