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
    @desc "Create a user"
    field :create_user, :user do
      arg :data, non_null(:user_input)
      resolve(&UserResolver.create/2)
    end

    @desc "Login user"
    field :login, type: :session do
      arg(:data, non_null(:login_input))

      resolve(&UserResolver.login/2)
    end

  end

end
