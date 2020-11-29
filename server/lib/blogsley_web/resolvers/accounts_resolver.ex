defmodule BlogsleyWeb.Resolvers.AccountsResolver do
  alias Absinthe.Relay.Connection

  alias Blogsley.{Accounts, Repo}
  alias Accounts.{User}
  import Blogsley.AuthHelper

  #def all(_, _, _) do
  #  {:ok, Accounts.list_users()} #here we use an ok tuple
  #end

  def list_users(args, _) do
    User
    |> Connection.from_query(&Repo.all/1, args)
  end

  def create(params, _info) do
    Accounts.create_user(params)
  end

  #def login(%{username: username, password: password}, _info) do
  def login(data, _info) do
    data = data.data
    with {:ok, user} <- login_with_username_pass(data.username, data.password),
         {:ok, jwt, _} <- Blogsley.Guardian.encode_and_sign(user) ,
         {:ok, _ } <- Blogsley.Accounts.store_token(user, jwt) do
      {:ok, %{token: jwt}}
    end
  end

  def logout(_args,  %{context: %{current_user: current_user, token: _token}}) do
    Blogsley.Accounts.revoke_token(current_user, nil)
    {:ok, current_user}
  end

  #def logout(_args, _info) do
  #  {:error, "Please log in first!"}
  #end

end
