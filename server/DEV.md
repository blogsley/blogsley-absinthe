Building the images

    docker-compose build

Bootstrapping the phoenix image/service

    alias mix="docker-compose run --rm phoenix mix"
    mix phx.new . --app blogsley

Or locally if you don't want a bunch of root owned files
    mix archive.install hex phx_new
    mix phx.new . --app blogsley

We are almost there! The following steps are missing:

    $ cd app

Then configure your database in config/dev.exs and run:

    $ mix ecto.create

Start your Phoenix app with:

    $ mix phx.server

You can also run your app inside IEx (Interactive Elixir) as:

    $ iex -S mix phx.server