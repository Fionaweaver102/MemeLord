class CommentsController < ApplicationController

  # GET /comments
  def index
    comments = Comment.all 
    
    render json: Comment.arr_to_json
  end

  def create
    comment = Comment.new(comment_params)
    meme = Meme.find_or_create_by(id: params[:meme_id])
    comment.meme_id = meme.id

    if comment.save
      render json: comment.instance_to_json
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end



  private
    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :meme_id)
    end
end
