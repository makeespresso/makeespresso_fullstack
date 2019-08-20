class UserMailer < ApplicationMailer
default from: "makeespresso@gmail.com"

def welcome_email(user)
  @user = user
  mail(to: @user.email, subject: "Hi #{@user.username}, welcome to Makeespresso!")
end
end
