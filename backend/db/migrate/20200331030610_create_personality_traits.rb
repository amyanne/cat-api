class CreatePersonalityTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :personality_traits do |t|
      t.string :name
      t.references :cat, null: false, foreign_key: true

      t.timestamps
    end
  end
end
