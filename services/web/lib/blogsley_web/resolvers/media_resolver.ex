defmodule BlogsleyWeb.Resolvers.MediaResolver do
  alias Absinthe.Relay.Connection

  alias Blogsley.{Media, Repo}
  alias Media.{Image}

  def create_image(params, _info) do
    Media.create_image(params)
  end

  def image_upload(params, _info) do
    filename = params.filename
    config = ExAws.Config.new(:s3)
    bucket = System.get_env("S3_BUCKET")
    path = filename
    # Set the file permission so this file can be publicly linked
    # NOTE: Also set option `virtual_host: true` if using an EU region
    content_type = MIME.from_path(filename)
    IO.puts content_type
    query_params = [{"ContentType", content_type}, {"ACL", "public-read"}]
    presign_options = [virtual_host: false, query_params: query_params]

    {:ok, presigned_url} = ExAws.S3.presigned_url(config, :put, bucket, path, presign_options)
    media_host = System.get_env("MEDIA_HOST")
    url = "http://#{media_host}/media/#{filename}"
    {:ok, %{presigned_url: presigned_url, url: url}}


  end

  def upload_image(params, _info) do
    Media.create_image(params)
  end

  def update_image(params, _info) do
    Media.update_image(params)
  end

  def delete_image(params, _info) do
    Media.delete_image(params)
  end

  def get_image(args, _) do
    {:ok, Media.get_image!(args.id)}
  end

  #def list_images(_, _, _) do
  #  {:ok, Media.list_images()} #here we use an ok tuple
  #end

  def list_images(args, _) do
    Image
    |> Connection.from_query(&Repo.all/1, args)
  end

end
