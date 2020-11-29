defmodule BlogsleyWeb.Resolvers.PostResolver do
  alias Blogsley.Blog

  def all(_, _, _) do
    {:ok, Blog.list_posts()} #here we use an ok tuple
  end

end
