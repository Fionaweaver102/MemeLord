class Comment < ApplicationRecord
  belongs_to :meme

  def self.arr_to_json 
    self.all.map do |p|
      p.instance_to_json
    end 
  end 

  def instance_to_json 
    {
      id: self.id,
      content: self.content,
      meme: {
        id: self.meme.id,
        title: self.meme.id,
        image_url: self.meme.image_url
      }
    }
  end 
end
