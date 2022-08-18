defmodule Blogsley.Repo.Migrations.CreateImages do
  use Ecto.Migration

  def change do
    create table(:images) do
      add :title, :string
      add :filename, :string
      add :src, :text

      timestamps()
    end

    create unique_index(:images, [:title])
  end
end
