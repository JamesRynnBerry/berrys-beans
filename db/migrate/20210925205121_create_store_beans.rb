class CreateStoreBeans < ActiveRecord::Migration[6.1]
  def change
    create_table :store_beans do |t|
      t.integer :store_id
      t.integer :bean_id

      t.timestamps
    end
  end
end
