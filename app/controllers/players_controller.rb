class PlayersController < ApplicationController
  def show
    @player = Player.first
    # @player = Player.find(params[:id])
    @lost_against = @player.losses_against
    @won_against = @player.wins_against
  end
end
