class SettingUpTables < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end

    create_table :products do |t|
      t.string :image
      t.string :beanType
      t.string :geography
      t.string :altura
      t.string :toast
      t.string :aroma
      t.string :body
      t.string :acidity
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
