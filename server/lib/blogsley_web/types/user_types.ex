defmodule BlogsleyWeb.Types.UserTypes do
  use Absinthe.Schema.Notation

  object :user do
    field :id, :id
    field :username, :string
    field :email, :string
    #field(:posts, list_of(:blog_post), resolve: assoc(:blog_posts))
  end

  input_object :user_input do
    field :username, :string
    field :email, :string
    field :password, :string
  end

end
