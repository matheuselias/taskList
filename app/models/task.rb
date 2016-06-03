class Task < ActiveRecord::Base
  validates :title, :status, :date, presence: true
end
