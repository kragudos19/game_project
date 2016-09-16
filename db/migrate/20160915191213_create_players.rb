class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :username
      t.string :hashed_password

      t.timestamps(null:false)
    end
  end
end
