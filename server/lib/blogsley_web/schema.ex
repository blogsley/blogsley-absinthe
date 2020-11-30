defmodule BlogsleyWeb.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern

  import_types BlogsleyWeb.Schema.Accounts
  import_types BlogsleyWeb.Schema.Blog
  import_types BlogsleyWeb.Schema.Relay

  query do
    import_fields :accounts_queries
    import_fields :blog_queries
  end

  mutation do
    import_fields :accounts_mutations
    import_fields :blog_mutations
  end

end
