defmodule Blogsley.Repo do
  use Ecto.Repo,
    otp_app: :blogsley,
    adapter: Ecto.Adapters.Postgres
end
