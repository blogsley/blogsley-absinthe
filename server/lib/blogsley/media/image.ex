defmodule Blogsley.Media.Image do
  use Ecto.Schema
  import Ecto.Changeset

  schema "images" do
    field :title, :string
    field :filename, :string
    field :src, :string

    timestamps()

    #belongs_to(:user, Blogsley.Accounts.User, foreign_key: :user_id)

  end

  @doc false
  def changeset(image, attrs) do
    image
    |> cast(attrs, [:title, :filename, :src])
    |> validate_required([:title, :filename, :src])
    |> unique_constraint(:title)
  end
end
