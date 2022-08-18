defmodule Blogsley.MixProject do
  use Mix.Project

  def project do
    [
      app: :blogsley,
      version: "0.1.0",
      elixir: "~> 1.13",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Blogsley.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.6.6"},
      {:phoenix_ecto, "~> 4.4.0"},
      {:ecto_sql, "~> 3.7.2"},
      {:ecto_psql_extras, "~> 0.7.4"},
      {:postgrex, "~> 0.16.1"},
      {:phoenix_html, "~> 3.2.0"},
      {:phoenix_live_reload, "~> 1.3.3", only: :dev},
      {:phoenix_live_dashboard, "~> 0.6.4"},
      {:exsync, "~> 0.2.4", only: :dev},
      {:telemetry_metrics, "~> 0.6.1"},
      {:telemetry_poller, "~> 1.0.0"},
      {:gettext, "~> 0.19.1"},
      {:jason, "~> 1.3.0"},
      {:plug_cowboy, "~> 2.5.2"},
      #{:absinthe, "~> 1.7.0"},
      {:absinthe, "~> 1.5"},
      {:absinthe_plug, "~> 1.5.8"},
      {:absinthe_relay, "~> 1.5.1"},
      {:absinthe_phoenix, "~> 2.0.2"},
      {:guardian, "~> 2.2.1"},
      {:comeonin, "~> 5.3.3"},
      {:bcrypt_elixir, "~> 3.0.0"},
      {:corsica, "~> 1.1.3"},

      {:ex_aws, "~> 2.2.10"},
      {:ex_aws_s3, "~> 2.3.2"},
      {:poison, "~> 5.0.0"},
      {:hackney, "~> 1.18.0"},
      {:sweet_xml, "~> 0.7.2"},
      {:dotenv, "~> 3.1.0", only: [:dev, :test]}    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "ecto.setup", "cmd npm install --prefix assets"],
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
    ]
  end
end
