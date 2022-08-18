import Config

if config_env() != :test do

  config :blogsley,
    in_docker: System.get_env("IN_DOCKER")

  if !Application.get_env(:blogsley, :in_docker) do
    Dotenv.load!("../../config/.#{config_env()}.env")
  end

  # Use Minio for Dev S3
  config :ex_aws, :s3,
    region: "local",
    scheme: "http://",
    host: System.get_env("MINIO_DOMAIN"),
    bucket: System.get_env("MINIO_BUCKET")

  config :ex_aws,
    access_key_id:     System.get_env("MINIO_ACCESS_KEY"),
    secret_access_key: System.get_env("MINIO_SECRET_KEY")

  # Configure your database
  config :blogsley, Blogsley.Repo,
    username: System.get_env("POSTGRES_USER"),
    password: System.get_env("POSTGRES_PASSWORD"),
    database: System.get_env("POSTGRES_DB"),
    hostname: System.get_env("POSTGRES_HOST"),
    pool_size: 10,
    show_sensitive_data_on_connection_error: true

  if !Application.get_env(:blogsley, :in_docker) do
    config :blogsley, Blogsley.Repo,
      hostname: "localhost"
  end
end
