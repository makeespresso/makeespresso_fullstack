class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :image
      t.string :beanType
      t.string :geography
      t.string :altura
      t.string :toast
      t.string :aroma
      t.string :body
      t.string :acidity

      t.timestamps
    end
  end
end
