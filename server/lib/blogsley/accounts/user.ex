defmodule Blogsley.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias Blogsley.Accounts.User

  schema "users" do
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :username, :string
    field :token, :string
    timestamps()

    #has_many(:posts, Blogsley.Blog.Post, foreign_key: :author)

  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :password])

    |> validate_required([:username, :email, :password])
    |> validate_length(:username, min: 3, max: 10)
    |> validate_length(:password, min: 5, max: 20)

    |> unique_constraint(:email, downcase: true)
    |> unique_constraint(:username)

    |> put_password_hash()
  end

  def store_token_changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:token])
  end


  defp put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Bcrypt.hash_pwd_salt(pass))

      _ ->
        changeset
    end
  end

end
