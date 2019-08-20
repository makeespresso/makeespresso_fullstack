class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  # before_action :authorize_request, except: :create 
  # before_action :authenticate_user, only: [:update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
    end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      UserMailer.welcome_email(@user).deliver
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @current_user.update(user_params)
      render json: @current_user
    else
      render json: @current_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @current_user.destroy
    render json: @current_user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
