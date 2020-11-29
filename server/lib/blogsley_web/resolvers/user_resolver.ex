defmodule BlogsleyWeb.Resolvers.UserResolver do
  alias Blogsley.Accounts
  import Blogsley.AuthHelper

  def all(_, _, _) do
    {:ok, Accounts.list_users()} #here we use an ok tuple
  end

  def create(params, _info) do
    Accounts.create_user(params)
  end

  def login(%{email: email, password: password}, _info) do
    with {:ok, user} <- login_with_email_pass(email, password),
         {:ok, jwt, _} <- Blogsley.Guardian.encode_and_sign(user) ,
         {:ok, _ } <- Blogsley.Accounts.store_token(user, jwt) do
      {:ok, %{token: jwt}}
    end
  end

  def logout(_args,  %{context: %{current_user: current_user, token: _token}}) do
    Blogsley.Accounts.revoke_token(current_user, nil)
    {:ok, current_user}
  end

  def logout(_args, _info) do
    {:error, "Please log in first!"}
  end

end
