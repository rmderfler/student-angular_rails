require 'pry'

class StudentsController < ApplicationController

  def index
    @students = Student.all

    respond_to do |format|
      format.json { render :json => @students }
    end
  end

  def create
    @student = Student.new
     name_in_array = params[:students]
     name_in_hash = name_in_array.pop
     @student.name = name_in_hash["name"]

    if @student.save
      respond_to do |format|
        format.html do
          flash[:notice] = "Student created."
          redirect_to root_path
        end
        format.json { render :json => @student, :status => 201 }
      end
    else
      respond_to do |format|
        format.html { render 'new' }
        format.json { render :json => @student.errors, :status => 422 }
      end
    end
  end

  def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    if @student.update(contact_params)
      flash[:notice] = "Student updated."
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy

    respond_to do |format|
      format.html do
        flash[:notice] = "Student deleted."
        redirect_to root_path
      end
      format.json { head :no_content }
    end
  end

private

  def student_params
    params.require(:student).permit(:students)
  end
end
