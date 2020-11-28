defmodule Blogsley.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string
      add :slug, :string
      add :block, :text
      add :body, :text

      timestamps()
    end

    create unique_index(:posts, [:title, :slug])
  end
end
