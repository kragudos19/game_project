require 'bcrypt'
class Player < ApplicationRecord
  include BCrypt
  has_many :races
  has_many :games, foreign_key: :winner_id
  has_many :loses, -> (id) { where.not(winner_id: id) }, through: :races, source: :game

  has_many :wins_against, -> (id) { where.not(id: id) }, through: :games, source: :participants
  has_many :losses_against, through: :loses, source: :winner

  validates :username, uniqueness: { message: "is already in use. Please choose another one." }
  validates :username, :hashed_password, presence: { message: "can't be left blank." }

  def opponents
    wins_against + lost_against
  end




  def password
  @password ||= Password.new(hashed_password)
  end

  def password=(new_password)
  @password = Password.create(new_password)
  self.hashed_password = @password
  end

  def self.authenticate(email, input_password)
  user = User.find_by(email: email)
  return user if user && user.password == input_password
  end

end

