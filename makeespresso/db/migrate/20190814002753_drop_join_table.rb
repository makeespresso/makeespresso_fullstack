class DropJoinTable < ActiveRecord::Migration[5.2]
  def change
    drop_join_table :users, :products
  end
end
