defmodule BlogsleyWeb.Absinthe.Schema do
  use Absinthe.Schema # add this to power up our schema

  alias BlogsleyWeb.Resolvers.PostResolver

  import_types BlogsleyWeb.Types.PostTypes

  query  do
    @desc "list_all_posts"
    field :all_posts, list_of(:post) do
      resolve &PostResolver.list_all_posts/3
    end
  end

end
