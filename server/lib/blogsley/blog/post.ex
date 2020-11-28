defmodule Blogsley.Blog.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :title, :string
    field :block, :string
    field :body, :string

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:title, :block, :body])
    |> validate_required([:title, :block, :body])
    |> unique_constraint(:title)
  end
end
