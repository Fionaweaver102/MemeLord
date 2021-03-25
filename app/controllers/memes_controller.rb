class MemesController < ApplicationController

  # GET /memes
  def index
    memes = Meme.all
    render json: Meme.arr_to_json
  end

  # GET /memes/1
  def show
    render json: @meme
  end

  # POST /memes
  def create
    meme = Meme.new(meme_params)

    if meme.save
      render json: meme.instance_to_json
    else
      render json: meme.errors, status: :unprocessable_entity
    end
  end


  private
    # Only allow a list of trusted parameters through.
    def meme_params
      params.require(:meme).permit(:title, :image_url)
    end
end
