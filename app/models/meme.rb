class Meme < ApplicationRecord
  has_many :comments 

  def self.arr_to_json 
    self.all.map do |p|
      p.instance_to_json
    end 
  end 

  def instance_to_json 
    {
      id: self.id,
      title: self.title,
      image_url: self.image_url,
      comments: self.comments
    }
  end 
end
