class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    {food: "apple"}.to_json
  end

    
  get "/test" do
    { message: "Good luck with your project!" }.to_json
  end


end
