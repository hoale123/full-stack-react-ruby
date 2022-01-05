class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :product_id
      t.string :status
      t.string :created_at
      t.integer :quantity
    end
  end
end
