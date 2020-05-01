class RemovePeronalityTraitFromCats < ActiveRecord::Migration[6.0]
  def change
    remove_reference :cats, :personality_trait, null: false
  end
end
