class CreateCatPersonalityTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :cat_personality_traits do |t|
      t.references :cat, null: false, foreign_key: true
      t.references :personality_trait, null: false, foreign_key: true

      t.timestamps
    end
  end
end
