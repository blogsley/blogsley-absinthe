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

  input_object :post_input do
    field :title, :string
    field :block, :string
    field :body, :string
  end

  object :post_event do
    field :kind, :string
    field :ok, :boolean
  end

  object :blog_queries do
    @desc "Get Post"
    field :post, :post do
      arg(:id, non_null(:id))
      resolve(&BlogResolver.get_post/2)
    end

    @desc "List Posts"
    connection field :all_posts, node_type: :post do
      resolve(&BlogResolver.list_posts/2)
    end
  end

  object :blog_mutations do
    @desc "Create Post"
    field :create_post, :post do
      arg :data, non_null(:post_input)
      resolve(&BlogResolver.create_post/2)
    end
    @desc "Update Post"
    field :update_post, :post_event do
      arg :id, non_null(:id)
      arg :data, non_null(:post_input)
      resolve(&BlogResolver.update_post/2)
    end
    @desc "Delete Post"
    field :delete_post, :post_event do
      arg :id, non_null(:id)
      resolve(&BlogResolver.delete_post/2)
    end
  end

end
