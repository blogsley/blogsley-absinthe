defmodule BlogsleyWeb.Resolvers.BlogResolver do
  alias Absinthe.Relay.Connection

  alias Blogsley.{Blog, Repo}
  alias Blog.{Post}

  #def list_posts(_, _, _) do
  #  {:ok, Blog.list_posts()} #here we use an ok tuple
  #end

  def list_posts(args, _) do
    Post
    |> Connection.from_query(&Repo.all/1, args)
  end

end
