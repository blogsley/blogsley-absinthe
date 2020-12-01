defmodule BlogsleyWeb.Schema.Media do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern
  # Important: Needed to use the `:upload` type
  import_types Absinthe.Plug.Types

  alias BlogsleyWeb.Resolvers.MediaResolver

  @desc "Media Upload"
  object :media_upload do
    field :presigned_url, :string
    field :url, :string
  end

  @desc "Image"
  node object :image do
    field :id, :id
    field :title, :string
    field :filename, :string
    field :src, :string
  end

  connection(node_type: :image)

  input_object :image_input do
    field :title, :string
    field :filename, :string
    field :src, :string
  end

  object :image_event do
    field :kind, :string
    field :ok, :boolean
  end

  object :media_queries do

    @desc "Get Image"
    field :image, :image do
      arg(:id, non_null(:id))
      resolve(&MediaResolver.get_image/2)
    end

    @desc "List Images"
    connection field :all_images, node_type: :image do
      resolve(&MediaResolver.list_images/2)
    end
  end

  object :media_mutations do
    @desc "Create Image"
    field :create_image, :image do
      arg :data, non_null(:image_input)
      resolve(&MediaResolver.create_image/2)
    end

    @desc "Image Upload"
    field :image_upload, :media_upload do
      arg :filename, non_null(:string)
      resolve(&MediaResolver.image_upload/2)
    end

    @desc "Upload Image"
    field :upload_image, :image do
      arg :data, non_null(:image_input)
      arg :upload, :upload
      resolve(&MediaResolver.upload_image/2)
    end

    @desc "Update Image"
    field :update_image, :image_event do
      arg :id, non_null(:id)
      arg :data, non_null(:image_input)
      resolve(&MediaResolver.update_image/2)
    end
    @desc "Delete Image"
    field :delete_image, :image_event do
      arg :id, non_null(:id)
      resolve(&MediaResolver.delete_image/2)
    end
  end

end
