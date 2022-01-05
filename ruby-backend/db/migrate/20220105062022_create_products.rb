class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :status
      # t.integer :category_id
      t.string :image
      t.integer :likes
      t.timestamps
    end
  end
end
