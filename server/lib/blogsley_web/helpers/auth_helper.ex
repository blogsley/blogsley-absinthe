defmodule Blogsley.AuthHelper do
  @moduledoc false

  #import Comeonin.Bcrypt, only: [checkpw: 2]
  alias Blogsley.Repo
  alias Blogsley.Accounts.User

  def login_with_username_pass(username, given_pass) do
    user = Repo.get_by(User, username: username)

    cond do
      user && Bcrypt.verify_pass(given_pass, user.password_hash) ->
        {:ok, user}

      user ->
        {:error, "Incorrect login credentials"}

      true ->
        {:error, :"User not found"}
    end
  end

  def login_with_email_pass(email, given_pass) do
    user = Repo.get_by(User, email: String.downcase(email))

    cond do
      user && Bcrypt.verify_pass(given_pass, user.password_hash) ->
        {:ok, user}

      user ->
        {:error, "Incorrect login credentials"}

      true ->
        {:error, :"User not found"}
    end
  end
end
