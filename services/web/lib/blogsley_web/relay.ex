defmodule BlogsleyWeb.Schema.Relay do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias Blogsley.{Blog, Accounts}
  alias Blog.{Post}
  alias Accounts.{User}

  object :relay do
    node field do
      resolve(fn
        %{type: :post, id: id}, _ -> {:ok, Blog.get_post!(id)}
        %{type: :user, id: id}, _ -> {:ok, Accounts.get_user!(id)}
        _, _ -> {:error, "Unknown node ID supplied."}
      end)
    end
  end

  node interface do
    resolve_type fn
      %Post{}, _ ->
        :post

      %User{}, _ ->
        :user

      _, _ ->
         nil

    end
  end

end
