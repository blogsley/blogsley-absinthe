# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :blogsley,
  ecto_repos: [Blogsley.Repo]

# Configures the endpoint
config :blogsley, BlogsleyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "zVVjdhtjLGBiHt6ObxxHjMfsSi2npcGZ2D8T1p9lCJjgou1lZn4LlmCVPVVL7iQv",
  render_errors: [view: BlogsleyWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Blogsley.PubSub,
  live_view: [signing_salt: "wTiPt1iM"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# configures Guardian
config :blogsley, Blogsley.Guardian,
  # optional
  allowed_algos: ["HS512"],
  # optional
  verify_module: Guardian.JWT,
  issuer: "Blogsley",
  ttl: {30, :days},
  allowed_drift: 2000,
  # optional
  verify_issuer: true,
  # generated using: JOSE.JWK.generate_key({:oct, 16}) |> JOSE.JWK.to_map |> elem(1)
  secret_key: %{"k" => "3gx0vXjUD2BJ8xfo_aQWIA", "kty" => "oct"},
  serializer: Blogsley.Guardian

config :ex_aws,
  access_key_id:     System.get_env("AWS_ACCESS_KEY_ID"),
  secret_access_key: System.get_env("AWS_SECRET_ACCESS_KEY"),
  region: "us-east-1",
  s3: [
    scheme: "https://",
    host: "s3.amazonaws.com",
    region: "us-east-1" ]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
