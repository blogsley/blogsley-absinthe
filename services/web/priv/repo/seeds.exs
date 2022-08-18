# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Blogsley.Repo.insert!(%Blogsley.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Blogsley.Repo
alias Blogsley.Accounts.User

Repo.insert! %User{email: "admin@domain.com", password_hash: Bcrypt.hash_pwd_salt("admin"), username: "admin", role: "Admin"}

#Accounts.create_user(
#  %{email: "admin@domain.com", password_hash: :crypto.hash(:sha, "admin"), username: "admin"}
#)
