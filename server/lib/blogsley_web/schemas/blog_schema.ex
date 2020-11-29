defmodule BlogsleyWeb.Schema.Blog do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern
  #import Absinthe.Resolution.Helpers, only: [dataloader: 1]

  alias BlogsleyWeb.Resolvers.BlogResolver

  @desc "Blog Post"
  node object :post do
    @desc "The post id"
    field :id, :id
    @desc "The title of the post"
    field :title, :string
    @desc "The post slug"
    field :slug, :string
    @desc "The post block"
    field :block, :string
    @desc "The post body"
    field :body, :string
  end

  connection(node_type: :post)

  @desc "list_all_posts"
  object :blog_queries do
    connection field :all_posts, node_type: :post do
      resolve(&BlogResolver.list_posts/2)
    end
  end

end
