defmodule BlogsleyWeb.Absinthe.Schema do
  use Absinthe.Schema

  alias BlogsleyWeb.Resolvers.PostResolver
  alias BlogsleyWeb.Resolvers.UserResolver

  import_types BlogsleyWeb.Types.PostTypes
  import_types BlogsleyWeb.Types.UserTypes

  query do
    @desc "list_all_posts"
    field :all_posts, list_of(:post) do
      resolve &PostResolver.all/3
    end
  end

  mutation do
    field :create_user, type: :user do
      arg(:username, non_null(:string))
      arg(:email, non_null(:string))
      arg(:password, non_null(:string))

      resolve(&UserResolver.create/2)
    end
  end

end
