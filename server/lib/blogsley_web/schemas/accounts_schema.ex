defmodule BlogsleyWeb.Schema.Accounts do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  #import Absinthe.Resolution.Helpers

  alias BlogsleyWeb.Resolvers.AccountsResolver

  node object :user do
    field :id, non_null(:id)
    field :username, :string
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    #field(:posts, list_of(:blog_post), resolve: assoc(:blog_posts))
  end

  connection(node_type: :user)

  input_object :user_input do
    field :username, :string
    field :email, :string
    field :password, :string
  end

  input_object :login_input do
    field :username, :string
    field :password, :string
  end

  object :session do
    field(:token, :string)
  end


  object :accounts_queries do
    @desc "Get User"
    field :user, :user do
      arg(:id, non_null(:id))
      resolve(&AccountsResolver.get_user/2)
    end
    @desc "List Users"
    connection field :all_users, node_type: :user do
      resolve(&AccountsResolver.list_users/2)
    end
  end

  object :accounts_mutations do
    @desc "Create a user"
    field :create_user, :user do
      arg :data, non_null(:user_input)
      resolve(&AccountsResolver.create/2)
    end

    @desc "Login user"
    field :login, type: :session do
      arg(:data, non_null(:login_input))

      resolve(&AccountsResolver.login/2)
    end
  end
end
