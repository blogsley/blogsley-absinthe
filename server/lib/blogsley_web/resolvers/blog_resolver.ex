defmodule BlogsleyWeb.Resolvers.BlogResolver do
  alias Absinthe.Relay.Connection

  alias Blogsley.{Blog, Repo}
  alias Blog.{Post}

  def create_post(params, _info) do
    Blog.create_post(params)
  end

  def update_post(params, _info) do
    Blog.update_post(params)
  end

  def delete_post(params, _info) do
    Blog.delete_post(params)
  end

  def get_post(args,_) do
    {:ok, Blog.get_post!(args.id)}
  end

  #def list_posts(_, _, _) do
  #  {:ok, Blog.list_posts()} #here we use an ok tuple
  #end

  def list_posts(args, _) do
    Post
    |> Connection.from_query(&Repo.all/1, args)
  end

end
