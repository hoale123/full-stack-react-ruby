class UserController < ApplicationController
    get '/me' do
        user_id = session[:user_id]
        data = { user: user_id ? User.find(user_id) : nil }
        puts data
        data.to_json
      end
    
      post '/login' do
        user = User.find_by(email: login_params['email'].to_s)
        puts user
        if user && user.password == login_params['password']
          puts 'Saving to session'
          session[:user_id] = user.id
          user.to_json
        else
          { error: 'Wrong credentials or email is not in use. Please try again.' }.to_json
        end
    end

    delete '/login' do
        session.delete(:user_id)
      end
    
      post '/register' do
        # register_params
        email = register_params['email']
        if User.find_by(email: register_params['email'].to_s)
          { error: 'Email is already in use. Please login or use a different email' }.to_json
        else
          user = User.create(register_params)
          session[:user_id] = user.id
          user.to_json
        end
    end
    
    patch '/update-avatar/:id' do
    avatar = User.find(params[:id])
        avatar.update(
          avatar: params[:avatar]
        )
    
        avatar.to_json
      end

private 

    def register_params
        allowed_params = %w[name email password avatar]
        params.select { |param, _value| allowed_params.include?(param) }
      end

    def login_params
        allowed_params = %w[email password]
        params.select { |param, _value| allowed_params.include?(param) }
      end
    end