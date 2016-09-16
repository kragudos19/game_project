class Game < ApplicationRecord
  has_many :races
  belongs_to :winner, class_name: :Player
  has_many :participants, through: :races, source: :player
end
