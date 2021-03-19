module MemeGenerator 
  class Adapter

    URL = "http://alpha-meme-maker.herokuapp.com/1/"

    def self.get_memes

      memes = JSON.parse(RestClient.get(URL))

      memes['data'].each do |meme|
        Meme.create!(
        title: meme['name'],
        image_url: meme['image']
        )
      end 

    end 

  end 

end 